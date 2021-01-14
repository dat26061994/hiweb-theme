<template>
    <div class="py-10" style="background: #333;">
        <div style="font-size:1.5rem;" class="text-center capitalize oswald-medium text-white ">
            HOW LONG WILL IT TAKE TO GET MY ORDER?
        </div>
        <div class="text-center text-white">
            Follow this timeline to see how your bottles are made
        </div>
        
        <div class="container mx-auto mt-3 slick-step-order">
            <div class="flex flex-wrap items-center justify-center">
                <div class="w-full md:w-1/2" >
                    <template>
                        <!-- Slider -->
                        <Slick ref="slick" :options="slideOptions" @afterChange="handleAfterChange">


                            <template class="p-3" v-if="image.attributes.path" v-for="(image, key) in reviewsImages">

                                <div v-if="image.attributes.type" class="outline-none px-3 flex flex-wrap">
                                    <!-- Image -->
                                    <img class="m-auto w-1/2" :src="require('@/assets/img/'+image.attributes.path)" alt="">
                                    <div class="w-full uppercase text-lg oswald-medium text-center text-white mt-2">
                                        {{ image.attributes.title }}
                                    </div>
                                    <div class="w-full text-center text-white">
                                        {{ image.attributes.text }}
                                    </div>
                                </div>
                                

                            </template>

                        </Slick>

                    </template>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap my-3 container mx-auto">
            <div class="w-1/2">
            </div>
            <div class="w-1/2 hidden md:block">
                <img height="30" v-bind:style="{ marginLeft: marginLeft + 'px' }" class="time-line-deskop" style="height:40px;max-width:unset" src="@/assets/img/landing1/timeline.png" alt="">
            </div>
            <div class="w-full justify-center items-center flex md:hidden mt-3">
                <img height="30" v-if="mobileImage == 1" style="height:35px;max-width:unset" src="@/assets/img/landing1/timeline-mobile-1.png" alt="">
                <img height="30" v-if="mobileImage == 2"  style="height:35px;max-width:unset" src="@/assets/img/landing1/timeline-mobile-2.png" alt="">
                <img height="30" v-if="mobileImage == 3"  style="height:35px;max-width:unset" src="@/assets/img/landing1/timeline-mobile-3.png" alt="">
                <img height="30" v-if="mobileImage == 4"  style="height:35px;max-width:unset" src="@/assets/img/landing1/timeline-mobile-4.png" alt="">
                <img height="30" v-if="mobileImage == 5" style="height:35px;max-width:unset" src="@/assets/img/landing1/timeline-mobile-5.png" alt="">
            </div>
           
        </div>
        
    </div>
</template>

<script>

import Flickity from 'flickity';
import $ from 'jquery';
import Slick from 'vue-slick';

export default {

    components: {
        Slick
    },

    data() {
        return {

            slideOptions: {
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
            },

            marginLeft:-150,

            reviewsImages : [
                {
                    attributes: {
                        type:'fix',
                        path: "landing1/process1.png",
                        title: "ORDER RECEIVED",
                        text: 'No worries, you still have 24 hours to cancel your order. After 24 hours, we will send your order to our factory for the printing process.',
                    }
                },
                {
                    attributes: {
                        type:'fix',
                        path: "landing1/process2.png",
                        title: 'PRINT',
                        text : 'We use the special UV Printing technique to print your design on a blank Tritan, Non-BPA & Toxic-Free plastic bottle. Therefore, your design will be highly resistant to weathering and fading.',
                    }
                },
                {
                    attributes: {
                        type:'fix',
                        path: "landing1/process3.png",
                        title:'PACKAGE & QUALITY CONTROL',
                        text: 'The finished product will be forward to our quality control team. If it passes the quality process - we will start packaging your bottle immediately.'
                    }
                },
                {
                    attributes: {
                        type:'fix',
                        path: "landing1/process4.png",
                        title: "SHIPPED",
                        text: 'After packaging, we will ship the product to your address through UPS Express, therefore, your shipment will not be affected by the Pandemic. Your package will take from 5 to 10 days to arrive.'
                    }
                },
                {
                    attributes: {
                        type:'fix',
                        path: "landing1/delivered.png",
                        title:'Delivered',
                        text: 'Please Unbox & Enjoy your exclusively customized bottle!'
                    }
                },
            ],

            mobileImage: 1,

        }
        
    },

    methods: {

        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        handleAfterChange(event, slick, currentSlide) {

            switch (currentSlide) {
                case 0:
                    this.marginLeft = -150;
                    this.mobileImage = 1
                    break;
                case 1:
                    this.marginLeft = -420;
                    this.mobileImage = 2
                    break;
                case 2:
                    this.marginLeft = -720;
                    this.mobileImage = 3
                    break;
                case 3:
                    this.marginLeft = -990;
                    this.mobileImage = 4
                    break;
                case 4:
                    this.marginLeft = -1260;
                    this.mobileImage = 5
                    break;
            
                default:
                    break;
            }
        },
        
    },

    mounted() {

        var vm = this;
        // Set Flickity slider
        // let flkty = new Flickity(this.$el.querySelector('.step-order__images__carousel'), {
        //     draggable: true,
        //     freeScroll: true,
        //     contain: true,
        //     pageDots: false,
        //     autoPlay: false,
        //     fullscreen: true,
        //     lazyLoad: 1,
        //     fade: true,

        // });

        // // Handle event click next or previous slide
        // flkty.on( 'change', function( index ) {
        //     switch (index) {
        //         case 0:
        //             vm.marginLeft = -150;
        //             vm.mobileImage = 1
        //             break;
        //         case 1:
        //             vm.marginLeft = -420;
        //             vm.mobileImage = 2
        //             break;
        //         case 2:
        //             vm.marginLeft = -720;
        //             vm.mobileImage = 3
        //             break;
        //         case 3:
        //             vm.marginLeft = -990;
        //             vm.mobileImage = 4
        //             break;
        //         case 4:
        //             vm.marginLeft = -1260;
        //             vm.mobileImage = 5
        //             break;
            
        //         default:
        //             break;
        //     }

        // });
    },
}
</script>

<style lang="scss">

    @import '../../../node_modules/slick-carousel/slick/slick.css';

    .slick-prev, .slick-next{
        opacity: 1;
    }

    .slick-step-order .slick-next {
        right: 0!important;
    }

    .slick-next, .slick-prev {
        position: absolute;
        display: block;
        height: 2.25rem;
        width: 2.25rem;
        line-height: 0;
        font-size: 0;
        cursor: pointer;
        background: grey;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        padding: 0;
        border: none;
        border-radius: 50%;
        outline: none;
        z-index: 9;
        -webkit-transition: .3s;
        transition: .3s;
    }

    .slick-next:before, [dir=rtl] .slick-next:before {
        font-family: Font Awesome\ 5 Free;
        font-weight: 900;
    }

    .slick-next:before {
        content: "\F054";
    }

    .slick-next:before, .slick-prev:before {
        font-size: 20px;
        line-height: 1;
        color: #fff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .slick-next.slick-disabled:before, .slick-prev.slick-disabled:before {
        opacity: .25;
    }

    .slick-prev:before, [dir=rtl] .slick-prev:before {
        font-family: Font Awesome\ 5 Free;
        font-weight: 900;
    }

    .slick-prev:before {
        content: "\F053";
    }

    .slick-step-order {
        .slick-next {
            right: 0px !important;
        }

        .slick-prev {
            left: 0px !important;
        }
    }
</style>