<template>
    <div>
        <p class="my-5 text-2xl font-bold"> Order Summary </p>

            <!-- Loading -->
            <div v-if="isLoadingCart" class="text-center pt-5">
                <Loader />
            </div>

            <!-- No cart found -->
            <ErrorHero v-else-if="!cart || !cart.getId()" title="404" message="Cart not found." />

            <!-- Cart is empty -->
            <ErrorHero v-else-if="!cart.getRelationshipData('cart_items') || !cart.getRelationshipData('cart_items').length" message="Your cart is empty. Lets go back to shopping." />

            <table v-else class="table table-cart-item w-full">

                <thead>
                    <tr>
                        <th class="px-1 sm:px-4 md:px-4 lg:px-4 xl:px-4 py-2 text-left">Products</th>
                        <th class="px-1 sm:px-4 md:px-4 lg:px-4 xl:px-4 py-2">Qty</th>
                        <th class="px-1 sm:px-4 md:px-4 lg:px-4 xl:px-4 py-2">Price</th>
                    </tr>
                </thead>

                <tbody>

                    <tr v-for="cartItem in cartItems">
                        <td class="p-2">
                            <div class="flex items-center">
                                <div class="w-1/3 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 relative flex items-center justify-center">

                                    <!-- Image -->
                                    <router-link :to="$linkTo('product', cartItem.getRelationshipData('product'))">
                                        <img width="60" :src="$image.url(cartItem.getRelationshipData('product').getRelationshipData('image'))" class="img-fluid" />
                                    </router-link>
                                    
                                </div>
                                <div class="w-2/3 sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4">
                                    <div class="product-name product_name ml-2">
                                        <span v-if="cartItem.getRelationshipData('product')">{{ cartItem.getRelationshipData('product').getAttribute('title') }}</span>
                                        <span v-if="cartItem.getRelationshipData('variant') && cartItem.getRelationshipData('variant').getAttribute('option1')">
                                            - {{ cartItem.getRelationshipData('variant').getAttribute('option1') }}
                                        </span>
                                        <span v-if="cartItem.getRelationshipData('variant') && cartItem.getRelationshipData('variant').getAttribute('option2')">
                                            - {{ cartItem.getRelationshipData('variant').getAttribute('option2') }}
                                        </span>
                                        <span v-if="cartItem.getRelationshipData('variant') && cartItem.getRelationshipData('variant').getAttribute('option3')">
                                            - {{ cartItem.getRelationshipData('variant').getAttribute('option3') }}
                                        </span>
                                    </div>
                                                                                                                
                                </div>
                            </div>
                        </td>

                        <td v-if="cartItem.getRelationshipData('variant')" class="p-2">
                            <div class="flex items-center justify-center">
                                {{ cartItem.getAttribute('quantity') }}
                            </div>
                        </td>

                        <td class="p-2">
                            <div class="flex items-center justify-center">
                                {{ $currency.priceFormat(cartItem.getAttribute('price')) }}
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="p-2">Shipping</span></td>
                        <td class="p-2"></td>
                        <td v-if="!shippingFee" class="text-center p-2">Free</td>
                        <td v-else class="text-center p-2">{{ $currency.priceFormat(shippingFee) }}</td>
                    </tr>

                    <tr v-if="$currency.priceFormat(totalDiscount)">
                        <td class="p-2">Discount</td>
                        <td  class="p-2"></td>
                        <td class="text-center p-2">{{ $currency.priceFormat(totalDiscount) }}</td>
                    </tr>

                    <tr>
                        <td class="p-2">Total</td>
                        <td class="p-2"></td>
                        <td class="text-center p-2">{{ $currency.priceFormat(totalPrice) }}</td>
                    </tr>

                </tbody>

            </table>

            <Coupon />

    </div>
</template>

<script>
import Coupon from '@/views/checkout/Coupon';
import Loader from '@/components/Loader';
import ErrorHero from '@/components/ErrorHero';
import ErrorAlert from '@/components/ErrorAlert';

export default {

    props: ['invoice'],

    components: {
        Loader,
        ErrorHero,
        ErrorAlert,
        Coupon,
    },

    data() {
        return {

        }
    },

    created() {
        
        // Cart loaded
        this.$event.$on('cart-loaded', () => {
            this.errors = [];
        });

    },

    methods: {
        
        /**
        * Change quantity Cart item
        *
        * @param Resource
        */
        changeQuantity(cartItem, quantity) {
            this.createCartItem(cartItem.getRelationshipData('variant').getId(), quantity);
        }
    
    },

    computed: {

        subtotalPrice: function() {
            return this.invoice ? this.invoice.getAttribute('subtotal_price') : this.cart.getAttribute('subtotal_price');
        },

        totalDiscount: function() {
            return this.invoice ? this.invoice.getAttribute('total_discount') : this.cart.getAttribute('total_discount');
        },

        totalPrice: function() {
            return this.invoice ? this.invoice.getAttribute('total_price') : this.cart.getAttribute('total_price');
        },

        shippingFee: function() {
            return this.invoice ? this.invoice.getAttribute('shipping_fee') : null;
        }
    }


}
</script>

<style lang="scss">
    .input-coupon {
        min-height: 52px;
        font-size: 14px;
        line-height: 1.5;
        width: 95%;
        background-color: #fff;
        border-radius: 4px;
        position: relative;
        color: #404040;
        display: block;
        padding: 15px;
        vertical-align: top;
        -webkit-box-shadow: none;
        box-shadow: none;
        border: 1px solid #bfbfbf;
        margin: 0 0 15px;
    }

    .btn-coupon {
        background-color: #24ae4e!important;
        min-height: 52px;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        padding: 8px 16px;
        height: 49px;
        line-height: 1;
        display: inline-block;
        width: 100%;
        text-transform: capitalize;
        -webkit-border-radius: 2px;
    }
</style>