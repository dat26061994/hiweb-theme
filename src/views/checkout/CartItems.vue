<template>
    <div>
        <p class="my-5 text-2xl font-bold"> Your Cart </p>

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
                                        <img :src="$image.url(cartItem.getRelationshipData('product').getRelationshipData('image'))" class="img-fluid" />
                                    </router-link>
                                    
                                </div>
                                <div class="w-2/3 sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4">
                                    <div class="product-name product_name ml-2">
                                        <router-link class="text-black" :to="$linkTo('product', cartItem.getRelationshipData('product'))">
                                            <span v-if="cartItem.getRelationshipData('product')">{{ cartItem.getRelationshipData('product').getAttribute('title') }}</span>
                                        </router-link>
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
                                    <div  class="text-red-500 ml-2">
                                        Save {{ $currency.priceFormat( cartItem.getRelationshipData('variant').getAttribute('compare_at_price') * cartItem.getAttribute('quantity') - cartItem.getAttribute('total_price') )  }} until {{ new Date() | moment("MM/DD/YYYY") }}
                                    </div>
                                                                                                                
                                </div>

                            </div>
                        </td>

                        <td v-if="cartItem.getRelationshipData('variant')" class="text-center p-2">
                            <input @change="changeQuantity(cartItem, $event.target.value)" :value="cartItem.getAttribute('quantity')" class="quantity-btn mt-2 mr-0" type="number" >
                        </td>

                        <td class="text-center p-2 relative">
                            <div v-if="cartItem.getRelationshipData('variant')" class="line-through">
                                {{ cartItem.getRelationshipData('variant').getAttribute('compare_at_price') }}
                            </div>
                            <div>
                                {{ $currency.priceFormat(cartItem.getAttribute('price')) }}
                            </div>

                            <!-- Remove -->
                            <span @click="deleteCartItem(cartItem)" class="font-size-xs text-gray-400 ml-auto cursor-pointer remove-cart-item-icon">
                                <i class="fe fe-x"></i>
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td class="p-2">Discount</td>
                        <td  class="p-2"></td>
                        <td class="text-center p-2">{{ $currency.priceFormat(cart.getAttribute('total_discount')) }}</td>
                    </tr>

                    <tr>
                        <td class="p-2">Total</td>
                        <td class="p-2"></td>
                        <td class="text-center p-2">{{ $currency.priceFormat(cart.getAttribute('total_price')) }}</td>
                    </tr>

                </tbody>

            </table>

            <!-- Coupon -->
            <Coupon />

    </div>
</template>

<script>
import Loader from '@/components/Loader';
import ErrorHero from '@/components/ErrorHero';
import ErrorAlert from '@/components/ErrorAlert';
import Coupon from '@/views/checkout/Coupon';

export default {

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