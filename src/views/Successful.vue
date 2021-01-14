<template>
    <div id="payment-successful">
    <div class="card container mx-auto">

      <div class="p-5 border border-green-400 my-10">
        <h2 class="mb-3 text-3xl text-green-500">Thank you for your payment!</h2>

        <p class="text-base pt-2">We received your payment and our system have just sent you a confirmation email. Your order is now being processed and we'll inform you via email for any update.</p>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },

  created() {

    // Reload cart
    this.$cookie.set('cart-id', '', -1);

  },

  methods: {
    
  },
}
</script>