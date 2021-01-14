<template>
    <div class="container mx-auto">
        <!-- Loading -->
        <div v-if="isLoadingInvoice" class="text-center pt-5">
            <Loader />
        </div>

        <!-- No invoice found -->
        <ErrorHero v-else-if="!invoiceDocument || !invoiceDocument.getData()" title="404" message="Invoice not found." />

        <!-- No cart found -->
        <ErrorHero v-else-if="!cart || !cart.getId()" title="404" message="Cart not found." />

        <div v-else class="flex flex-wrap">
            <div class="w-full sm:full md:full lg:w-7/12 xl:7/12 p-3 lg:pt-4 pt-4 sm:px-4">

                <ErrorAlert v-if="invoiceErrors.length" :errors="invoiceErrors" />

                <!-- Order sumary -->
                <OrderSumary :invoice="invoice" />

                <p class="my-5 text-2xl font-bold"> Payment Information </p>	                
                <p class="tiny margin-bottom-xs-h text-gray"> All transactions are secure and encrypted. Credit card information is never stored on our servers. </p>
                <div v-if="paymentGatewaysDocument && defaultPaymentGateway" class="card-body">
                        
                    <!-- Has payment gateways -->
                    <div v-if="paymentGatewaysDocument.getData() && selectedPaymentGateway" v-for="paymentGateway, index in paymentGatewaysDocument.getData()" :class="'invoice__payment-gateway ' + (paymentGateway.getId() === selectedPaymentGateway.getId() ? 'selected-payment-gateway' : '')" :style="'border-color: ' + $themeConfig.getConfigValue('header-background-color')">
                        <div @click="selectedPaymentGateway = paymentGateway" class="row cursor-pointer">
                            <div class="col-auto">
                                <div style="width: 150px">

                                <!-- Paypal -->
                                <template v-if="paymentGateway.getAttribute('gateway') === 'paypal'">
                                    <img src="@/assets/img/payment/paypal.png" />
                                </template>

                                </div>
                            </div>
                            <div class="col">

                            </div>
                        </div>
                    </div>

                </div>
                <div v-if="!defaultPaymentGateway" class="card-body text-center">
                    <p class="text-muted mt-3">No payment method availlable.</p>
                </div>

                <!-- Return to your cart -->
                <a class="mt-3 cursor-pointer text-muted" :href="'/checkout/'+cart.getId()">« Return to Your Cart</a>

                <!-- Complete order -->
                <button  class="btn-shipping mt-5 flex items-center justify-center" @click="initInvoicePayment(selectedPaymentGateway)" :class="{'opacity-75': isSavingInvoice}" :disabled="isSavingInvoice || !selectedPaymentGateway">
                    <i v-if="isSavingInvoice" class="fas fa-spinner fa-pulse mr-2"></i> <span> ➜ Complete Your Order with Happiness Guarantee Policy ! </span>
                </button>

                <div class="wfacp-payment-dec mt-5">
                  <h3 style="font-size: 25px;font-weight: bold;text-align:center">Happiness Guarantee Policy</h3>
                  <img class="my-3" style="margin-bottom: 15px;max-width: 300px;width:100%;margin:10px auto" src="https://static.litestore.io/bottles/20200519/img/guarantee.fdf8bab8.jpg">
                  <div style="text-align: left!important;font-size: 110%;font-style: italic"><p style="line-height: 30px">Everyone guarantees the refund. However, I understands that you do not want your money back, you want to be satisfied, worry-free about the gift you planned for your loved ones.</p>
                    <p style="line-height: 30px">Hence, within 30 days after your purchase, if you feel that your order is not good for the price you paid, just send me an email and we will send you:</p>
                    <ul>
                        <li>✅ <strong>A full-refund</strong> of your purchase. No question asked.</li>
                        <li>✅ <strong>A 25% Coupon for your next order</strong> (if you give us another chance!)</li>
                        <li>✅ <strong>You don't even have to return your package.</strong> We will take this loss as our responsibility if you are not happy with your order.</li>
                    </ul>
                  </div> 
                </div>

            </div>

            <div class="w-full sm:full md:full lg:w-5/12 xl:5/12 lg:pt-8 pt-4 sm:px-4">

                <!-- Customer Reviews -->
                <CustomerReviews />
            </div>
            

        </div>
        
        
    </div>
</template>

<script>
import Loader from '@/components/Loader';
import OrderSumary from '@/views/checkout/OrderSumary';
import CustomerReviews from '@/views/checkout/CustomerReviews';
import ErrorAlert from '@/components/ErrorAlert';
import ErrorHero from '@/components/ErrorHero';

export default {

    components: {Loader, ErrorAlert, OrderSumary, CustomerReviews, ErrorHero,},

    data() {
        return {
            selectedPaymentGateway: null
        }
    },

    created() {
        // Active invoice mixin
        this.useInvoiceMixin(true);
    },

    computed: {

        // Invoice
        invoice: function() {
            return this.invoiceDocument ? this.invoiceDocument.getData() : null;
        },

        // Set default payment gateway
        defaultPaymentGateway: function() {

            if (!this.paymentGatewaysDocument || !this.paymentGatewaysDocument.getData()) {
                return null;
            }
            
            return this.paymentGatewaysDocument.getData().find(paymentGateway => {
                return paymentGateway.getAttribute('is_primary');
            });
        }
    },

    watch: {

        // defaultPaymentGateway
        defaultPaymentGateway: function() {

            if (!this.selectedPaymentGateway) {
                this.selectedPaymentGateway = this.defaultPaymentGateway;
            }
        }
    }
}
</script>

<style lang="scss">
    .selected-payment-gateway {
        border: 0.1em solid;
        padding: 20px;
        border-radius: 6px;
    }
</style>