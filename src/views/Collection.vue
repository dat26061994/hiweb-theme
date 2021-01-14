<template>
  <div class="collection container mt-5">
    
    <!-- Errors -->
    <error-hero :errors="collectionErrors" action-text="Go back" :action="$linkTo('home')" />

    <!-- Collection -->
    <template >
      
      <!-- Breadcrumb -->
      <ol class="breadcrumb mb-0 font-size-xs text-gray-400">
        <li class="breadcrumb-item">
          <router-link class="text-gray-400" :to="$linkTo('home')">Home</router-link>
        </li>
        <li v-if="collectionDocument" class="breadcrumb-item active">
          <span class="text-gray-400">{{ collection.getAttribute('title') }}</span>
        </li>
      </ol>

      <!-- Heading -->
      <!-- <h1 v-if="collectionDocument" class="my-5 text-center">{{ collection.getAttribute('title') }}</h1> -->
      <!-- <p  v-if="collectionDocument" class="text-muted text-center">{{ collection.getAttribute('description') }}</p> -->

      <!-- Is loading products -->
      <loader v-if="isLoadingCollectionProducts" />

      <div class="flex flex-wrap">
        <div class="w-full md:w-1/4">
          <Filters :callback="filterProducts" />
        </div>

        <div class="w-full md:w-3/4">

          <!-- Products -->
          <div v-if="collectionProductsDocument" class="row mb-5">
            <div v-for="product in products" class="col-lg-3 col-6">
              <product-box :product="product" />
            </div>
          </div>

          <!-- Errors -->
          <error-hero title="No products" :errors="collectionProductsErrors" action-text="Go to home" :action="$linkTo('collections')" />

          <Pagination type="pagination" :callback="onPagination" :dataDocument="collectionProductsDocument" :limit="this.limit" :count="collectionProductsDocument ? collectionProductsDocument.getMeta().count : 0"/>

        </div>
      </div>
      

    </template>

  </div>
</template>

<script type="text/javascript">
import Pagination from '@/components/Pagination';
import Filters from '@/views/products/Filters';

export default {

  components: {
    Pagination,
    Filters,
  },

  data() {
    return {
      groups:[],
    }
  },

  created() {
    // Active collection mixin
    this.useCollectionMixin(true);
  },

  methods: {

    /**
    * Filter products
    */
    filterProducts() {

      this.collectionProductsFilter = [];

      if (this.groups && this.groups.length > 0) {
        this.groups.forEach((group,index) => {

          this.collectionProductsFilter.push({
            field:"group",
            value: group,
            "boolean": "or",
          });
          
        });
      }

      let query = JSON.parse(JSON.stringify(this.$route.query));
      query.collectionProductsFilter = JSON.stringify(this.collectionProductsFilter);
      query.page = null,
      this.$router.replace({
        query
      });

      // Active mixin
      this.useCollectionMixin(true);

    },

    /**
    * pagination
    */
    onPagination(type) {
      if (this.collectionProductsDocument && !this.isLoadingCollectionProducts) {
        let query = JSON.parse(JSON.stringify(this.$route.query));
        let page = type === 'previous' ? this.collectionProductsDocument.getMeta().previous : this.collectionProductsDocument.getMeta().next ;
        query.page = page;
        this.$router.replace({
          query
        });
        this.collectionProductsFilter = query.collectionProductsFilter ? JSON.parse(query.collectionProductsFilter) : [];

        // Active mixin
        this.useCollectionMixin(true);
      }
    }
  },

  computed: {

    // Collection
    collection: function() {
      return this.collectionDocument.getData();
    },

    // Products
    products: function() {
      return this.collectionProductsDocument.getData();
    }
  }
}
</script>