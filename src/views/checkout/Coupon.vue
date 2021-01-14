<template>
    <div>
        <span @click="showCoupon = !showCoupon;" style="font-size:15px;" class="wfacp_showcoupon cursor-pointer text-blue-500">Have a coupon? Click here to enter your code</span>
        <div v-if="showCoupon" class="flex flex-wrap mt-3">
            <div class="w-full">
                <ErrorAlert :errors="errorsDiscount" />
            </div>

            <div class="w-full">
                <div v-if="cart.getRelationshipData('discount')" class="col-12 mt-3">
                    <div class="alert alert-success">
                        <span>Congrats! Coupon code {{ cart.getRelationshipData('discount').getAttribute('code') }} applied successfully. </span>
                        <span @click="removeDiscount" class="cursor-pointer text-muted">(Remove)</span>

                        <template v-if="cart.getRelationshipData('discount').getAttribute('description')">
                        <hr />
                        <p class="mb-0">
                            {{ cart.getRelationshipData('discount').getAttribute('description') }}
                        </p>
                        </template>
                    </div>
                </div>
            </div>

            <div class="w-3/4">
                <input name="voucher" class="input-coupon px-3"  @keyup.enter="applyDiscount(couponCode)" v-model="couponCode" placeholder="Enter promo code" type="text" value="">
            </div>
            <div class="w-1/4">
                <button @click="applyDiscount(couponCode) " type="button" class="button btn-coupon" name="apply_coupon" value="Apply coupon">
                    <span>Apply coupon</span> 
                </button>
            </div>
            
        </div>
    </div>
</template>

<script>
import Loader from '@/components/Loader';
import ErrorHero from '@/components/ErrorHero';
import ErrorAlert from '@/components/ErrorAlert';

export default {

    components: {
        Loader,
        ErrorHero,
        ErrorAlert,
    },

    data() {
        return {
            showCoupon:false,
            couponCode:'',
            errorsDiscount:[],
        }
    },

    created() {
        // Discount applied
        this.$event.$on('discount-applied', e => {
            this.errorsDiscount = [];
        });

        // Discount apply failed
        this.$event.$on('apply-discount-failed', e => {
            this.errorsDiscount = this.$handleException(e);
        });
        
        // Cart loaded
        this.$event.$on('cart-loaded', () => {
            this.errors = [];
        });
        
    },
}
</script>