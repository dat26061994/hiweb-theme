<template>
    <div class="checkout container mx-auto">
        
        <div  class="flex flex-wrap p-5">

            <div class="w-full m-auto sm:full md:full lg:w-7/12 xl:7/12 p-0 lg:pt-4 pt-4 sm:px-4 mb-5">

                <div>

                    <ErrorAlert :errors="errors" />
                    <!-- Cart items -->
                    <CartItems />

                    <!-- Contact Information -->
                    <ContactInfor :callback="setShippingAddressAttributes" :preset-attributes="shippingAddressAttributes" address-type="shipping" />

                    <!-- Billing address -->
                    <div class="w-full mt-5">
                        <label class="container-checkbox mb-0">
                            Billing address ( Same as shipping address )
                            <input id="billing-address-same-as-shipping-address" value="1" v-model="checkoutSameAddress" type="checkbox">
                            <span class="checkmark"></span>
                        </label>

                        <hr>
                    </div>
                    <div class="w-full">

                        <!-- billing address -->
                        <template v-if="!checkoutSameAddress">
                            <ErrorAlert :errors="billingAddressErrors" />
                            <ContactInfor :callback="setBillingAddressAttributes" :preset-attributes="billingAddressAttributes" address-type="billing" />
                        </template>

                    </div>

                    <ErrorAlert :errors="shippingAddressErrors" />

                    <button :disabled="isSavingAddresses" class="btn-shipping uppercase mt-5 flex items-center justify-center" @click="makeInvoice" >
                        <i v-if="isSavingAddresses" class="fas fa-spinner fa-pulse mr-2"></i>
                        Review your order
                    </button>
                </div>

            </div>

            <!-- Customer reviews -->
            <div class="w-full sm:full md:full lg:w-5/12 xl:5/12 lg:pt-8 pt-4 sm:px-4 ">

                <div v-if="reviewsTemplate" v-html="reviewsTemplate">

                </div>

                <div v-else>
                    <CustomerReviews />
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import CartItems from '@/views/checkout/CartItems';
import ContactInfor from '@/views/checkout/ContactInfor';
import CustomerReviews from '@/views/checkout/CustomerReviews';
import ErrorAlert from '@/components/ErrorAlert';
import { JsonApi } from 'jsonapi-client-js';

export default {

    components: {CartItems, ContactInfor, ErrorAlert, CustomerReviews,},

    data() {
        return {
            errors: [],
        }
    },

    created() {

        // Use checkout mixin
        this.useCheckoutMixin(true);

        // Save address failed
        this.$event.$on('save-address-failed', e => {
            window.scrollTo(0, 0);
        });

        // Invoice saved
        this.$event.$on('invoice-saved', invoiceDocument => {
        
            // Redirect to invoice page
            this.$router.push({
                name: 'invoice',
                params: {
                invoiceId: invoiceDocument.getData().getId()
                }
            });

            window.scrollTo(0, 0);
        });

        // Save invoice failed
        this.$event.$on('save-invoice-failed',e => {
            window.scrollTo(0, 0);
            this.errors = this.$handleException(e);
        });

    },

    methods: {

        /**
        * Set shipping address attributes
        */
        setShippingAddressAttributes(attrs) {
            this.shippingAddressAttributes = attrs;
            if (this.checkoutSameAddress) {
                this.billingAddressAttributes = this.shippingAddressAttributes;
            }
        },

        /**
        * Set billing address attributes
        */
        setBillingAddressAttributes(attrs) {
            this.billingAddressAttributes = attrs;
        }
    },

    computed: {

        /**
        * Reviews config template
        */
        reviewsTemplate: function () {

            // Load trustbox-landing
            setTimeout(function(){ 
                var element = document.getElementsByClassName("trustpilot-widget");
                for(var i=0; i<element.length; i++) {
                    window.Trustpilot.loadFromElement(element[i]);
                }
            }, 1000);

            return this.$themeConfig.getConfigValue('checkout-review-template') || null;

        }
    },

    
}
</script>

<style lang="scss">

    .table-cart-item {
        border: none;
        border-collapse: separate;
        border-spacing: 0 10px;

        tr{
            border-bottom: 1px solid #f3f3f3;
            th{
                border: none;
                border-bottom: none !important;
            }
        }
        th {
            border:none;
        }
        td {
        }
    }
    .quantity-btn {
        width: 50px;
        height: 35px;
        padding: 0 5px;
        text-align: center;
        -moz-appearance: textfield;
        -webkit-appearance: none;
        vertical-align: top;
        border: 1px solid rgba(0,0,0,.1);
    }

    .btn-shipping {
        text-transform: capitalize;
        font-size: 16px;
        width: 100%;
        padding: 20px 15px;
        font-weight: 700;
        color: #fff;
        background-color: #51a3d4;
    }
</style>