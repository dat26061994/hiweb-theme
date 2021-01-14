<template>
    <div class="container products-groups">
        <div class="flex flex-wrap">

            <!-- Filter products group -->
            <div class="w-full md:w-1/4">

                <Filters :callback="filterProducts" />

            </div>

            <div class="w-full md:w-3/4">
                <div  class="w-full flex flex-wrap">
                    
                    <div class="w-full flex flex-wrap p-3">
                        <div class="w-2/3">
                            
                        </div>
                        <div class="w-1/3 float-right">
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

                    <div class="w-full">
                        <!-- Is loading -->
                        <div v-if="isLoadingProducts" class="mt-5">
                            <loader />
                        </div>

                    </div>

                    <!-- Products -->
                    <div v-if="!isLoadingProducts && productsDocument" class="w-full flex flex-wrap">
                        <div v-for="product in productsDocument.getData()" class="w-1/2 p-3 md:w-1/4">
                            <product-box :key="product.getId()" :product="product" />
                        </div>
                    </div>
                    
                    <!-- Pagination -->
                    <Pagination v-if="productsDocument && !isLoadingProducts" type="pagination" :callback="onPagination" :dataDocument="productsDocument" :limit="this.limit" :count="productsDocument.getMeta().count"/>

                    <div v-if="!productsDocument && !isLoadingProducts" class="w-full p-5 mt-5">
                        <!-- Errors -->
                        <error-hero :errors="productsErrors" action-text="Go back" :action="$linkTo('products')" />
                    </div>
                    <div v-if="!isLoadingGroups" class="w-full p-5 mt-5">
                        <!-- Errors -->
                        <error-hero :errors="groupsErrors" action-text="Go back" :action="$linkTo('products')" />
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Pagination from '@/components/Pagination';
import Filters from '@/views/products/Filters';

export default {
    
    props: ["handle"],

    components : {
        Pagination,
        Filters,
    },

    data() {
        return {
            groupsDocument: null,
            productsDocument: null,
            productsErrors: [],
            groupsErrors: [],
            productsFilter: [],
            productsSort: '-created_at',
            products: [],
            isLoadingProducts: false,
            isLoadingGroups: false,
            collections:[],
        }
    },

    created() {

        let query = JSON.parse(JSON.stringify(this.$route.query));
        if (query && query.productsFilter) {
            this.productsFilter = JSON.parse(query.productsFilter);
            JSON.parse(query.productsFilter).forEach(element => {
                if (element.field == 'collection_id') {
                    this.collections.push(element.value);
                }
            });
        }
        
        // Load data
        this.loadGroups();
        
    },

    methods: {

        /**
        * Sort products
        */
        sortProduct() {

            this.loadProducts()

        },

        /**
        * Filter products
        */
        filterProducts() {

            this.productsFilter = [];
            if (this.collections && this.collections.length > 0) {
        
                this.collections.forEach((collection,index) => {
                    this.productsFilter.push({
                        field:"collection_id",
                        value: collection,
                        "boolean": "or",
                    });
                });
            }

            let query = JSON.parse(JSON.stringify(this.$route.query));
            query.productsFilter = JSON.stringify(this.productsFilter);
            query.page = null,
            this.$router.replace({
                query
            });

            this.loadProducts();

        },

        /**
        * onPagination
        */
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
            }

        },
        
        /**
        * Load group and products group
        */
        async loadGroups() {

            this.isLoadingGroups = true;

            try {

                this.groupsDocument = await this.$http.collection('products/groups');
                this.loadProducts();

            } catch (error) {
                this.groupsErrors = this.$handleException(error);
            }

            this.isLoadingGroups = false;
            
        },

        /**
        * Load products
        */
        async loadProducts() {

            this.isLoadingProducts = true;

            this.productsFilter.push({ 
                field: "group",
                value: this.handle,
            })

            try {
                
                // Get from api
                this.productsDocument = await this.$http.collection('products', {
                    params: {
                        _query: JSON.stringify(this.productsFilter),
                        sort: this.productsSort,
                        page: this.page,
                        limit: this.limit
                    }
                });
                
            } catch (error) {

                this.productsDocument = null;
                this.productsErrors = this.$handleException(error);
                
            }
            this.isLoadingProducts = false;

        }
    },

    computed: {

        // Group
        group: function () {
            return this.groupsDocument ? this.groupsDocument.getData().find(gr => gr.getAttribute('handle') === this.handle) : null;
        }
    },

    watch: {

        // Page
        page: function () {
            this.loadProducts();
        }
    },
}
</script>