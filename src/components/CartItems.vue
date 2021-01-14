<template>
  
  <div class="cart ">

    <div class="container m-auto">
      <div class="text-center margin-bottom-xs-1 margin-top-xs-1">
        <div class="h2 margin-bottom-xs-h font-bold">
          Shopping Cart 
        </div>

        <div class="flex flex-wrap my-8 justify-center">
          <div class="w-full sm:w-full md:w-full lg:w-5/12 xl:w-5/12 mr-0 sm:mr-0 md:mr-3 lg:w-mr-3 xl:w-mr-3">
            <CartItems v-on:loadCartItems="loadCartItems" />
          </div>

          <div class="p-5 border-l-0 md:border-l border-black w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 text-left">
            
            <!-- <OrderSummary :hideCartItems="true" /> -->
            <div class="flex flex-wrap">
              <div class="w-2/3 text-xl">
                Subtotal: 
              </div>
              <div class="w-1/3 text-xl font-bold">{{ $hiwebBase.currency.formatted($hiwebBase.cart.subTotalPrice()) }}</div>

              <div class="w-full mt-3">
                Orders will be processed in USD
              </div>
            </div>

            <div class="mt-5">
              <button class="bg-blue-600 uppercase w-full text-white btn btn-block btn-primary" @click="btnCheckout" :disabled="isLoadingCart" :class="{'opacity-75': isLoadingCart}">
                <i v-if="isLoadingCart" class="fas fa-spinner fa-pulse"></i>
                <i v-else class="fas fa-lock"></i>
                Checkout
              </button>
              <!-- <input  track-tag="cart_next_btn" class="track-btn btn btn-block btn-primary" type="submit" value="Checkout"> -->
            </div>

            <div class="text-center mt-2" style="text-decoration:underline;">
              <router-link class="text-blue-400 " to="products">
                Continue Shopping
              </router-link>
            </div>

          </div>

        </div>
        
      </div>
    </div>

    <!-- Products recommended -->
    
  </div>

</template>