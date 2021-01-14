<template>
  <div ref="products" class="products container">

    <!-- Products -->
    <div  class="flex flex-wrap">

      <!-- Search Products -->
      <div v-if="search" class="w-full my-3">
        <div class="search-bars">
          <i class="fas fa-search"></i>
          <input type="text" v-model="searchString" v-on:keyup.enter="searchProducts" placeholder="Search">
        </div>
      </div>

      <div class="w-full flex flex-wrap">

        <!-- Filter -->
        <div class="w-full md:w-1/4">

          <Filters :groups="groups" :collections="collections" :callback="filterProducts" />

        </div>

        <div class="w-full md:w-3/4">

          <div  class="w-full flex flex-wrap">

            <div class="w-full flex flex-wrap p-3">
              <div class="w-2/3">
                <span v-if="productsDocument" >
                  {{ productsDocument.getMeta().count }} results <span v-if="searchString"> for <strong> {{ this.searchString }} </strong></span>
                </span>
              </div>
              <div v-if="!searchString" class="w-1/3 float-right">
                <div class="relative">
                  <select @change="sortProduct" v-model="productsSort" class="relative capitalize block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="-created_at">new arrival</option>
                    <!-- <option value="-order">Best seller</option> -->
                    <option value="-price">Price: high to low</option>
                    <option value="price">Price: low to high</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div class=" flex w-full flex-wrap items-center">
              <div class="w-full">
                <!-- Is loading -->
                <div v-if="isLoadingProducts" class="mt-5">
                  <loader />
                </div>

              </div>
            </div>

            <div v-if="!isLoadingProducts" class="w-full flex flex-wrap">
              <div v-for="product in products" class="w-1/2 p-3 md:w-1/4">
                <product-box :key="product.getId()" :product="product" />
              </div>
            </div>

            <!-- Pagination -->
            <Pagination v-if="productsDocument" type="pagination" :callback="onPagination" :dataDocument="productsDocument" :limit="this.limit" :count="productsDocument.getMeta().count"/>
            
          </div>

          <div v-if="products.length == 0" class="w-full mt-3">
            <!-- Errors -->
            <error-hero :errors="productsErrors" action-text="Go back" :action="$linkTo('home')" />
          </div>

        </div>

      </div>

    </div>


  </div>
</template>

<script type="text/javascript">
import Pagination from '@/components/Pagination';
import Filters from '@/views/products/Filters';

export default {

  components : {
    Pagination,
    Filters,
  },

  data() {
    return {
      searchString: '',
      products: [],
      next: null,
      previous: null,
      currentPage: 1,
      collections: [],
      groups: [],
    }
  },

  created() {

    if (this.search) {

      this.searchString = this.search;
      
      this.productsFilter.push({
        "field":"search",
        "value": this.search
      });
      
      this.productsSort = null;

    }

    let query = JSON.parse(JSON.stringify(this.$route.query));
    if (query && query.productsFilter) {
      this.productsFilter = JSON.parse(query.productsFilter);
      JSON.parse(query.productsFilter).forEach(element => {
        if (element.field == 'group') {
          this.groups.push(element.value);
        }else if (element.field == 'collection_id') {
          this.collections.push(element.value);
        }
      });
    }

    // Active mixin
    this.useProductsMixin(true);
  },

  computed: {
    
    // Query title search
    search: function() {
      return this.$route.query.search || null;
    },
    
  },

  methods: {

    /**
    * Sort products
    *
    */
    async sortProduct() {
      
      let query = JSON.parse(JSON.stringify(this.$route.query));
      query.productsFilter = JSON.stringify(this.productsFilter);
      query.page = null,
      this.$router.replace({
        query
      });
      // Active mixin
      this.useProductsMixin(true);

    },

    /**
    * Filter Products
    *
    */
    async filterProducts() {
      
      this.productsFilter = [];
      this.currentPage = 1;

      if (this.search) {
        this.productsFilter.push({
          "field":"search",
          "value": this.search
        });
      }

      if (this.collections && this.collections.length > 0) {
        
        this.collections.forEach((collection,index) => {
          this.productsFilter.push({
            field:"collection_id",
            value: collection,
            "boolean": "or",
            "operator":"=",
          });
          
        });
      }
      
      if (this.groups && this.groups.length > 0) {
        this.groups.forEach((group,index) => {

          this.productsFilter.push({
            field:"group",
            value: group,
            "boolean": "or",
            "operator":"="
          });
          
        });
      }

      let query = JSON.parse(JSON.stringify(this.$route.query));
      query.productsFilter = JSON.stringify(this.productsFilter);
      query.page = null,
      this.$router.replace({
        query
      });
      // Active mixin
      this.useProductsMixin(true);
    },

    /**
    * search Product
    *
    * @param String
    */
    searchProducts() {

      this.$router.replace( { name: 'products', query: { search: this.searchString }});

    },

    onPagination(type) {
      if (this.productsDocument && !this.isLoadingProducts) {
        let query = JSON.parse(JSON.stringify(this.$route.query));
        let page = type === 'previous' ? this.productsDocument.getMeta().previous : this.productsDocument.getMeta().next ;
        query.page = page;
        let productsFilter = query.productsFilter ? JSON.parse(query.productsFilter) : [];
        this.$router.replace({
          query
        });
        this.productsFilter = productsFilter;
        this.useProductsMixin(true);
      }
    }
  },

  watch: {

    '$route': function() {
      if (this.search) {
        
        this.productsSort = null;
        this.productsFilter = [];

        this.searchString = this.search;

        this.productsFilter.push({
          "field":"search",
          "value": this.search
        });
        // Active mixin
        this.useProductsMixin(true);

      }else{

        let query = JSON.parse(JSON.stringify(this.$route.query));
        let productsFilter = query.productsFilter ? JSON.parse(query.productsFilter) : [];
        this.productsFilter = productsFilter;
        // Active mixin
        this.useProductsMixin(true);
      }
        
    },

    productsDocument: function(productsDocument) {

      if (!productsDocument || !productsDocument.getData()) {
        this.products = [];
      }

      this.products = productsDocument ? productsDocument.getData() : [];
      this.next = productsDocument ? productsDocument.getMeta().next : null;
      this.previous = productsDocument ? productsDocument.getMeta().previous : null;

    },

  }
}
</script>

<style lang="scss">
  .search-bars {
    -webkit-box-shadow: 0 2px 8px rgba(0,0,0,.1);
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
    margin-top: 20px;
    height: 48px;
    padding-left: 80px;
    padding-right: 80px;
    display: flex;
    align-items: center;
    i {
      font-size: 16px;
      text-align: center;
      text-transform: none;
      line-height: 22px;
      vertical-align: middle;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    input {
      -webkit-box-shadow: none!important;
      box-shadow: none!important;
      background: transparent;
      border: none;
      outline: none;
      font-size: 20px;
      height: 44px;
      padding: 0 11px;
      -webkit-appearance: none;
      vertical-align: top;
      width: 100%;
    }
  }
</style>