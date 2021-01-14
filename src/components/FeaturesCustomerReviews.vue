<template>
    <div>
        <div class="p-5 sm:p-10 flex items-center justify-center" style="background:#333;">
            <div class="w-full sm:w-1/3">
                <p class="text-2xl text-white uppercase font-bold text-center">
                    {{ component.getConfigValue('features-customer-reviews__heading') }}
                </p>
            </div>
        </div>

        <div class="container flex-wrap mx-auto mt-5 hidden md:flex">

            <div class="w-1/2 flex flex-wrap p-3">
                <div class="w-1/2 p-2">
                    <img :src="$image.url(component.getConfigValue('features-customer-reviews__images')[0] ? component.getConfigValue('features-customer-reviews__images')[0] : '' )" alt="">
                </div>
                <div class="w-1/2 p-2">
                    <img :src="$image.url(component.getConfigValue('features-customer-reviews__images')[1] ? component.getConfigValue('features-customer-reviews__images')[1] : '' )" alt="">
                </div>
                <div class="w-full p-2">
                    <img :src="$image.url(component.getConfigValue('features-customer-reviews__images')[2] ? component.getConfigValue('features-customer-reviews__images')[2] : '' )" alt="">
                </div>
            </div>
            
            <div class="w-1/2 flex flex-wrap p-3">

                <div class="w-full p-2">
                    <img :src="$image.url(component.getConfigValue('features-customer-reviews__images')[3] ? component.getConfigValue('features-customer-reviews__images')[3] : '' )" alt="">
                </div>
                <div class="w-1/2 p-2">
                    <img :src="$image.url(component.getConfigValue('features-customer-reviews__images')[4] ? component.getConfigValue('features-customer-reviews__images')[4] : '' )" alt="">
                </div>
                <div class="w-1/2 p-2 ">
                    <img class="review6" :src="$image.url(component.getConfigValue('features-customer-reviews__images')[5] ? component.getConfigValue('features-customer-reviews__images')[5] : '')" alt="">
                </div>

            </div>

            <div class="text-center w-full my-5">
                <router-link :to="component.getConfigValue('features-customer-reviews__button-link')">
                    <button class="uppercase text-white py-3 px-5 bg-blue-600 font-bold">
                        {{ component.getConfigValue('features-customer-reviews__button-text') }}
                    </button>
                </router-link>
            </div>
        </div>

        <!-- slide -->
        <div class="block md:hidden w-full mt-3">
            
            <div class="customer_reviews__images__carousel mx-n2 mb-md-0">

                <!-- Item -->
                <div v-for="image in component.getConfigValue('features-customer-reviews__images')" class="col-12 carousel-cell">

                    <!-- Image -->
                    <a :data-fancybox="'customer-review-images'" :href="$image.url(image)">
                        <div class="embed-responsive embed-responsive-1by1 bg-cover" :style="'background-image: url(' + $image.url(image) + ');'"></div>
                    </a>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import Flickity from 'flickity';

export default {
    
    props: ['component'],


    data() {
        return {
            
        }
    },

    created() {
        
    },

    mounted() {
        // Load Flickity slider
        let flkty = new Flickity(this.$el.querySelector('.customer_reviews__images__carousel'), {
            draggable: true,
            freeScroll: true,
            contain: true,
            ageDots: false,
            pageDots: false,
            autoPlay: true,
            fullscreen: true,
            lazyLoad: 1,
            fade: true,

        });
    },

}
</script>

<style lang="scss">
    
</style>