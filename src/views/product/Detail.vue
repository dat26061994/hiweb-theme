<template>
  <div class="product__detail">
    
    <!-- Heading -->
    <h1 class="mb-2 font-bold text-2xl capitalize text-black">{{ product.getAttribute('title') }}</h1>

    <!-- rating -->
    <div class="flex items-end flex-wrap py-3 w-full">
      <StarRating :disabled="true" value="5" customClass="inline pt-2" />
      <div class="ml-2">
        <span>
          4.8 (1,216 Reviews)
        </span>
      </div>
    </div>

    <!-- Price -->
    <div class="mb-2">
      <span style="text-decoration-color: red;" class="text-3xl text-gray-700 line-through pl-2 mr-1">
        {{ $currency.priceFormat((selectedVariant ? selectedVariant.getAttribute('compare_at_price') : product.getAttribute('compare_at_price')) * $parent.productQuantity) }}
      </span>
      <span class="text-black text-xl font-bold">
        {{ $currency.priceFormat((selectedVariant ? selectedVariant.getAttribute('price') : product.getAttribute('price')) * $parent.productQuantity) }}
      </span>
    </div>

    <!-- Options -->
    <Options />

    <!-- Add to cart -->
    <div class="">

      <div class="row">
        <div class="col-12">


          <!-- quantity -->
          <div class="py-3">

            <p>Quantity:</p>

            <div class="pt-2">

              <i @click=" $parent.productQuantity > 1 ? $parent.productQuantity-- : $parent.productQuantity" class="fe fe-minus h-10 border p-3 border-gray-300 border-r-0 rounded-l-lg cursor-pointer"></i>

              <input type="number" name="quantity" min="1" v-model="$parent.productQuantity" class="text-xl outline-none border border-gray-300 inline w-16 h-10 align-top rounded-none text-center product__detail-qty">

              <i @click="$parent.productQuantity++" class="fe fe-plus h-10 border p-3 border-gray-300 border-l-0 rounded-r-lg cursor-pointer"></i>

            </div>
            
          </div>

        </div>

        <div class="col-12">

          <!-- Submit -->
          <button @click="$parent.onClickAddToCart" :disabled="!selectedVariant || $parent.isCreatingCartItem" type="submit" class="btnAddToCart flex items-center justify-center uppercase w-full btn-adding-cart text-white p-4 mt-3 font-bold tracking-widest">
            <span v-if="!$parent.isCreatingCartItem">Add to Cart <i class="fe fe-shopping-cart ml-2"></i></span>
            <span v-else><i class="fas fa-spinner fa-pulse"></i> Adding...</span>
          </button>

          <hr class="mt-3" style="height: 2px;background: #51a3d4;">

          <div class="mt-5">
            <img src="@/assets/img/payment/checkout-type.png" alt="">
          </div>

        </div>
      </div>
      
    </div>

    <!-- Add to cart errors -->
    <error-alert title="Failed to add item to cart" :errors="$parent.createCartItemErrors" />

  </div>
</template>

<script type="text/javascript">
import Options from './Options';
import StarRating from '@/elements/StarRating';

export default {

  components: { Options, StarRating },

  created() {
    
    if (this.$route.query.landing) {

      this.$cookies.set('landing', this.$route.query.landing);
      
    }

  },

  methods: {

    addToCart() {
      
      return this.$parent.addToCart();

    }
  },

  computed: {

    product: function() {
      return this.$parent.product;
    },
    
    collection: function() {
      return this.$parent.product.getRelationshipData('collection') || null;
    },

    selectedVariant: function() {
      return this.$parent.selectedVariant;
    },

  }
}
</script>

<style lang="scss">

  $spCol: #000;

  .btn-adding-cart{
    background-color: #51a3d4;
    font-weight: 600!important;
    -webkit-box-shadow: inset 0 -3px rgba(0,0,0,.1);
    font-size: 25px!important;
    box-shadow: inset 0 -3px rgba(0,0,0,.1);
    border-radius: 4px;
    -webkit-font-smoothing: antialiased;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-color: rgba(0,0,0,.05);
    padding: 20px;
  }

  .sp {
    width: 30px;
    height: 30px;
    clear: both;
  }

  /* Spinner Circle Rotation */
  .sp-circle {
    border: 4px rgba($spCol,0.25) solid;
    border-top: 4px rgba($spCol,1) solid;
    border-radius: 50%;
    -webkit-animation: spCircRot .6s infinite linear;
    animation: spCircRot .6s infinite linear;
    display: inline-block;
  }
  @-webkit-keyframes spCircRot {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(359deg); }
  }
  @keyframes spCircRot {
    from { transform: rotate(0deg); }
    to { transform: rotate(359deg); }
  }

</style>