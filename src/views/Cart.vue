<template>
  <div class="cart container">

    <!-- CONTENT -->
    <section class="pt-7 pb-12">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <!-- Heading -->
            <h3 v-if="isLoadingCart || (!isLoadingCart && cartItems && cartItems.length)" class="mb-10 text-center font-bold">Shopping Cart</h3>

          </div>
        </div>
        <div v-if="isLoadingCart" class="col-12">
          <loader />
        </div>
        <div v-else-if="!cartItems || !cartItems.length">
          <error-hero title="Your cart is empty" :errors="['Lets go back to Shopping']" action-text="Go back" :action="$linkTo('home')" />
        </div>
        <div v-else class="row flex flex-wrap my-8 justify-center">

          <div class="w-full sm:w-full md:w-full lg:w-5/12 xl:w-5/12 mr-0 sm:mr-0 md:mr-3 lg:w-mr-3 xl:w-mr-3">
            <div class="cart-container pr-2 w-full">
              <!-- List group -->
              <ul class="list-group list-group-lg list-group-flush-x mb-6">
                
                <!-- Cart items -->
                <li v-for="cartItem in cartItems" class="">
                  <div class="row align-items-center">
                    <div class="col-4">

                      <!-- Image -->
                      <router-link :to="$linkTo('product', cartItem.getRelationshipData('product'))">
                        <img :src="$image.url(cartItem.getRelationshipData('product').getRelationshipData('image'))" class="img-fluid" />
                      </router-link>

                    </div>
                    <div class="col-8">

                      <!-- Title -->
                      <div class="d-flex mb-2 font-bold ">
                        <router-link :to="$linkTo('product', cartItem.getRelationshipData('product'))" class="text-body">
                          {{ cartItem.getRelationshipData('product').getAttribute('title') }}
                        </router-link> 
                        
                      </div>

                      <!-- Text -->
                      <div style="width: fit-content;" v-if="cartItem.getRelationshipData('variant').getAttribute('title')" class="bg-blue-600 text-white p-3 mr-2 rounded-lg ellipsis">
                        {{ cartItem.getRelationshipData('variant').getAttribute('title') }}
                      </div>

                      <!-- price -->
                      <div style="width: fit-content;" class="mt-3">
                        <span class="ml-auto roboto inline vertical-middle text-xl text-black">{{ $currency.priceFormat(cartItem.getAttribute('total_price')) }}</span>
                      </div>

                      <!--Footer -->
                      <div class="d-flex align-items-center">

                        <!-- quantity -->
                        <div class="pt-2">

                            <i @click="subQuantity(cartItem,cartItem.getAttribute('quantity'))" class="fas fa-minus h-10 border p-3 border-gray-300 border-r-0 rounded-l-lg cursor-pointer"></i>

                            <input @change="changeQuantity(cartItem, $event.target.value)" type="number" name="quantity" :value="cartItem.getAttribute('quantity')" class="text-xl outline-none border border-gray-300 inline w-16 h-10 align-top rounded-none text-center product__detail-qty">

                            <i @click="addQuantity(cartItem,cartItem.getAttribute('quantity'))" class="fas fa-plus h-10 border p-3 border-gray-300 border-l-0 rounded-r-lg cursor-pointer"></i>

                        </div>

                        <!-- Remove -->
                        <span @click="deleteCartItem(cartItem)" class="remove-btn rounded-lg w-6 h-6  border border-blue-600 bg-blue-600 text-white">
                          <i class="fe fe-x"></i>
                        </span>

                      </div>

                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>

          <div class="p-5 border-l-0 md:border-l border-black w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 text-left">
            
            <!-- Subtotal -->
            <div class="flex flex-wrap">
              <div class="w-2/3 text-xl">
                Subtotal: 
              </div>
              <div class="w-1/3 text-xl font-bold">{{ $currency.priceFormat(cart.getAttribute('subtotal_price')) }}</div>

              <div class="w-full mt-3">
                Orders will be processed in USD
              </div>
            </div>

            <!-- Checkout -->
            <div class="mt-5 text-center">
              <a :href="'/checkout/' + cart.getId()" class="bg-blue-600 uppercase w-full text-white btn-checkout"><i class="fas fa-lock mr-2"></i>Checkout</a>
            </div>

            <!-- Continue Shopping -->
            <div class="text-center mt-2" style="text-decoration:underline;">
              <router-link class="text-blue-400 " to="products">
                Continue Shopping
              </router-link>
            </div>

          </div>
          
        </div>
      </div>
    </section>

    <!-- Cart block -->
    <hiweb-theme-block block="cart" />

  </div>
</template>

<script type="text/javascript">
export default {

  data() {
    return {
      discountCode: '',
      errors: [],
    };
  },

  created() {

    // Cart loaded
    this.$event.$on('cart-loaded', () => {
      this.errors = [];
    });
  },

  methods: {
    
    /**
    * Sub quantity Cart item
    *
    * @param Resource
    */
    subQuantity(cartItem,quantity){

      quantity--;
      this.createCartItem(cartItem.getRelationshipData('variant').getId(), quantity);

    },

    /**
    * Add quantity Cart item
    *
    * @param Resource
    */
    addQuantity(cartItem,quantity) {

      quantity++;
      this.createCartItem(cartItem.getRelationshipData('variant').getId(), quantity);

    },

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
  .btn-checkout{
    padding: 17px 15.4px;
    font-size: 14px;
    line-height: 14px;
    border-radius: 2px;
    height: inherit;
    min-width: inherit;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .remove-btn {
    position: absolute;
    right: 15px;
    top: -5px;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
</style>