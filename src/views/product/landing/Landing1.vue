<template>
    <div class="landing-page-1">
        
        <div style="" class="flex image-review flex-wrap items-center justify-center my-5 customer-review-img" :style="{ backgroundImage: 'url(' + require('@/assets/img/landing1/Backgound.png') + ')' }">
            <div class="container mx-auto">
                <p style="font-size:1.75rem;" class="text-xl sm:text-2xl text-center text-black font-bold uppercase py-5 oswald-medium">
                    Over 12,316 Happy Customers 
                </p>

                <!-- Slider -->
                <div class="landing_product__images__carousel mx-n2 mb-10 mb-md-0">

                    <!-- Item -->
                    <div v-for="image in imagesRievew" class="w-full md:w-1/6">

                        <!-- Image -->
                        <a v-if="image.attributes" :data-fancybox="'product-' + ''" :href="require('@/assets/img/'+image.attributes.path)">
                            <div class="embed-responsive embed-responsive-1by1 bg-cover" :style="{ backgroundImage: 'url(' + require('@/assets/img/'+image.attributes.path) + ')' }"></div>
                        </a>
                        <a v-else :data-fancybox="'product-' + ''" :href="$image.url(image)">
                            <div class="embed-responsive embed-responsive-1by1 bg-cover" :style="'background-image: url(' + $image.url(image) + ');'"></div>
                        </a>

                    </div>

                </div>

            </div>
        </div>

        <div class=" landing-page mt-8">

            <div class="container mx-auto w-full md:w-1/2 mx-auto text-center flex items-center justify-center my-5">
                <img class="w-full md:w-1/2" src="https://storage.googleapis.com/fulfill/spaces/8efe8c76-fd7e-4c54-8d37-9b16a52eb1b5/eKOGZ9lQqTBXn3H4N1M0TlG0SWSN8Nz8MSsOqtQ9.png?fbclid=IwAR1DEzPimQQ19lRsrD2mY_-2RELzj_2Btli6TH5-Y2gJhddIKKC1qOLedtA" alt="">
            </div>

            <div class="container mx-auto flex flex-wrap">
                <div class="w-full sm:w-1/2 flex flex-wrap">
                    <div class="w-full py-3 text-xl uppercase oswald-medium" style="color:#51a3d4;">
                        Drink 64 Ounces of water daily easily with this water Tracker bottle
                    </div>

                    <div class="w-full flex flex-wrap my-3">
                        <div class=" w-full md:w-1/6 flex items-center justify-center">
                            <img src="@/assets/img/landing1/icon1.png" alt="">
                        </div>
                        <div style="font-size: 16px;" class="w-full md:w-5/6 p-3 text-black">
                            <p>Our Water Tracker Bottle makes things easy. With a time marker measuring how much water you should be drinking hour-by-hour, you can stay on track with your water consumption each day.</p>
                        </div>
                    </div>

                    <div class="w-full flex flex-wrap my-3">

                        <div class="w-full md:w-1/6 flex items-center justify-center">
                            <img src="@/assets/img/landing1/icon2.png" alt="">
                        </div>
                        <div style="font-size: 16px;" class="w-full md:w-5/6 p-3 text-black">
                            A wide opening, 32-oz capacity with Fast Water Flow Technology make your drinking experience a delight.Hydration should be simple. We’re here to make it that way.
                        </div>

                    </div>
                </div>

                <div class="w-1/2 hidden sm:block">
                    <img src="@/assets/img/landing1/Drink 64ounces.png" alt="">
                </div>
            </div>

            <div class="container mx-auto flex flex-wrap">

                <div class="w-1/2 hidden sm:block">
                    <img src="@/assets/img/landing1/Infusion.png" alt="">
                </div>

                <div class="w-full sm:w-1/2">
                    <div class="w-full py-3 text-xl uppercase oswald-medium" style="color:#51a3d4;">
                        Healthy & Delicious H20 With A Fruit Infusion Filter
                    </div>

                    <div class="w-full flex flex-wrap my-3">
                        <div class="w-full md:w-1/6 flex items-center justify-center">
                            <img src="@/assets/img/landing1/icon3.png" alt="">
                        </div>
                        <div style="font-size: 16px;" class="w-full md:w-5/6 p-3 text-black">
                            Water doesn’t have to taste bland. With an in-built fruit infusion filter and a wide mouth for pouring and filtering, a cold, refreshing fruits flavored drink is ready at your service any time.  It also keeps ice from blocking the infusion bottle nozzle while you're drinking from your infuser bottle.
                        </div>
                    </div>
                   
                </div>

            </div>

            <div class="container mx-auto flex flex-wrap">
                <div class="w-full sm:w-1/3">
                    <div class="w-full flex items-center justify-center">
                        <img style="height:140px;" src="@/assets/img/landing1/Asset 41.png" alt="">
                    </div>
                    <p class="text-xl font-bold text-center p-3 oswald-medium" style="color:#51a3d4;">One-Hand Opening Technology </p>
                    <p class="text-black text-center p-3">
                        Make hydration an effortless daily habit. Open it with just one hand, drink easily with Fast Water Flow Technology and refill fastly with a wide bottle opening!
                    </p>
                </div>

                <div class="w-full sm:w-1/3">
                    <div class="w-full flex items-center justify-center">
                        <img style="height:140px;" src="@/assets/img/landing1/Asset 40.png" alt="">
                    </div>
                    <p class="text-xl font-bold text-center p-3 oswald-medium" style="color:#51a3d4;">100% Leakproof</p>
                    <p class="text-black text-center p-3">
                        The lid of the cup is equipped with a silicone sealing ring. This Water Tracker Bottle will NEVER leak in any situation even when it is reversed!
                    </p>
                </div>

                <div class="w-full sm:w-1/3">
                    <div class="w-full flex items-center justify-center">
                        <img style="height:140px;" src="@/assets/img/landing1/reminder.png" alt="">
                    </div>
                    <p class="text-xl font-bold text-center p-3 oswald-medium" style="color:#51a3d4;">Powerful Reminders And Motivations</p>
                    <p class="text-black text-center p-3">
                        Hour-by-hour, you’ll know exactly how much water you should be drinking throughout the day.
                        With a huge 32-oz capacity, say goodbye to constantly running back and forth for refills. With our Water Tracker Bottle, you just need to refill once to hit your daily hydration goals.
                    </p>
                </div>
            </div>
            
            <!-- Step Order -->
            <StepOrder />

            <!-- Products recommends -->
            
            <!-- Customers Reviews -->
            <div style="" class="customer-saying text-center p-5 text-xl bg-gray-600 sm:text-2xl uppercase text-white font-bold mb-5 oswald-medium">
                What our customers are saying about us
            </div>
            <!-- TrustBox widget - List -->
            <div class="container mx-auto" v-if="htmlCustomerReviews && htmlCustomerReviews != ''" v-html="htmlCustomerReviews">

            </div>

            <div v-else class="container mx-auto px-10">
                <CustomerReviews />
            </div>
            
            
            <!-- End TrustBox widget -->

            <div style="" class="customer-saying text-center bg-gray-600 p-5 oswald-medium text-xl sm:text-2xl uppercase text-white font-bold my-5">
                100% Happiness Guarantee Policy
            </div>
            
            <div class="container mx-auto flex flex-wrap">
                <div class="w-full sm:w-1/2 p-3">
                    <img src="@/assets/img/landing1/guarantee.jpg" alt="">
                </div>

                <div class="w-full sm:w-1/2 p-3 text-black">
                    <p>
                        Everyone guarantees the refund. However, We understands that you do not want your money back, you want to be satisfied, worry-free about the gift you planned for your loved ones.
                        Hence, within 30 days after your purchase, if you feel that
                        your order is not good for the price you paid, just send us
                        an email and we will send you:
                    </p>

                    <ul class="pl-10 font-bold list-new">
                        <li>A full-refund of your purchase. No question asked.</li>
                        <li>A 25% Coupon for your next order (if you give us another chance!)</li>
                    </ul>
                    <p>
                        You don't even have to return your package. We will take
                        this loss as our responsibility if you are not happy with your
                        order.
                    </p>
                </div>
            </div>

            <div class="container mx-auto flex flex-wrap my-10">

                <div class="w-full text-2xl font-bold text-center my-3 oswald-medium" style="color:#51a3d4;">
                    Frequently Asked Questions
                </div>

                <div v-html="faqs" class="w-full mt-3 text-black">
                    
                </div>

            </div>

        </div>

    </div>
</template>

<script>

import Flickity from 'flickity';
import StepOrder from '../StepOrder';
import CustomerReviews from '@/views/checkout/CustomerReviews';

export default {

    props : ['product','component'],

    components: {
        StepOrder,
        CustomerReviews,
    },

    data() {
        return{
            reviewsImages : [
                {
                    attributes: {
                        type:'fix',
                        path: "landing1/rv9.jpg"
                    }
                },
                {
                    attributes: {
                        type:'fix',
                        path: "landing1/rv10.jpg"
                    }
                },
                {
                    attributes: {
                        type:'fix',
                        path: "landing1/rv11.jpg"
                    }
                },
                {
                    attributes: {
                        type:'fix',
                        path: "landing1/rv12.jpg"
                    }
                },
                {
                    attributes: {
                        type:'fix',
                        path: "landing1/rv13.jpg"
                    }
                },
                {
                    attributes: {
                        type:'fix',
                        path: "landing1/rv14.jpg"
                    }
                },
                {
                    attributes: {
                        type:'fix',
                        path: "landing1/rv15.jpg"
                    }
                },
            ],
        }
    },

    created() {
        
        

    },

    mounted() {

        // Load Flickity slider
        let flkty = new Flickity(this.$el.querySelector('.landing_product__images__carousel'), {
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

    computed: {

        // Product Images
        images: function() {

            return this.product ? this.product.getRelationshipData('images') : []; 

        },
        
        // Images reviews
        imagesRievew: function () {
            let length = this.images.length;
            let images = [];
            for (let index = 1; index <= 5; ++index) {
                const element = this.images[index];
                if (element) {
                    images.push(element);
                }
            }
            if (images) {
                for (let index = 0; index < this.reviewsImages.length; index++) {
                    const element = this.reviewsImages[index];
                    if (images.length < 10 && element) {
                        images.push(element);
                    }
                }
            }
            
            return images;
        },

        // Questions and answers
        faqs: function () {
            return this.component.getConfigValue('landing-pages__faqs');
        },

        // Customer review trust box plugin
        htmlCustomerReviews: function () {

            // Load trustbox-landing
            setTimeout(function(){ 
                var element = document.getElementsByClassName("trustpilot-widget");
                for(var i=0; i<element.length; i++) {
                    window.Trustpilot.loadFromElement(element[i]);
                }
            }, 1000);
            return this.component.getConfigValue('landing-page__customer-reviews');
        }

    },
}
</script>

<style lang="scss">
    .carousel-cell-5 {
        width: 20%; /* half-width */
        margin-right: 10px;
    }
    .image-review{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>