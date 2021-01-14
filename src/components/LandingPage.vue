<template>
    <div>
        <Landing1 :component="component" :product="product" v-if=" showLanding && landingType == 'landing1'" />
        <Landing2 :component="component" :product="product" v-if=" showLanding && landingType == 'landing2'" />
        <Landing3 :component="component" :product="product" v-if=" showLanding && landingType == 'landing3'" />
        <Landing4 :component="component" :product="product" v-if=" showLanding && landingType == 'landing4'" />
    </div>
</template>

<script>
import Landing1 from '../views/product/landing/Landing1'
import Landing2 from '../views/product/landing/Landing2'
import Landing3 from '../views/product/landing/Landing3'
import Landing4 from '../views/product/landing/Landing4'

export default {

    props : ['component'],

    components : {
        Landing1,
        Landing2,
        Landing3,
        Landing4,
    },

    data() {
        return {
            country:null,
            countryCode:null,
            product:null,
        }
    },

    created() {

        this.checkCountry();

    },

    methods: {

        /**
        * get country api
        */
        checkCountry: function() {

            $.ajax({
                url: 'https://get.geojs.io/v1/ip/geo.json',
                method: 'GET',
                dataType: 'json',
                success: result => {

                    this.country = result.country ? result.country : null;
                    this.countryCode = result.country_code ? result.country_code : result.continent_code;

                },
                error: error => {
                }

            });

        },

    },

    watch: {

    },

    computed: {

        // Landing page type
        landingType: function() {
            this.$event.$on('view-product', eventPayload => {
                this.product = eventPayload.getData();
            });
            var vm = this;
            let checkCollection = vm.collections.some(collection => vm.collectionsSelector.includes(collection.getId()));
            if (checkCollection) {

                vm.$store.commit('loadLanding', vm.landingSelector);
                return vm.landingSelector;
                
            }else{

                vm.$store.commit('loadLanding', 'custom');
                return 'custom';

            }

        },
        
        // faqs
        faqs: function() {
            return this.component.getConfigValue('landing-pages__faqs');
        },
        
        // Collections selector
        collectionsSelector: function() {

            return this.component.getConfigValue('landing-page__collections') || [];

        },
        
        // Collection product
        collections: function() {

            return this.product ? this.product.getRelationshipData('collections') : [];

        },
        
        // Landing selected
        landingSelector: function() {

            return this.component.getConfigValue('landing-page__landing') || '';

        },

        // Landing parameter
        params: function() {

            return this.component.getConfigValue('landing-page__parameter') || '';

        },

        // Load first landing page
        firstLanding: function() {

            return this.$store.state.firstLanding || false;

        },

        // Check show landing
        showLanding: function() {

            if ( this.checkIp == 'check') {

                if (this.countryCode != 'VN') {
                    return true;
                }

                if (this.$route.query.landing === this.params || this.params === this.$cookies.get('landing')) {
                    return true;
                }
                
            }else {

                return true;

            }

            return false;

        },

        // Check IP 
        checkIp: function () {
            return this.component.getConfigValue('landing-page__check-ip');
        }

    },
    
}
</script>