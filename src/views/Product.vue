<template>
  <div class="product  mt-5">
    
    <div class="container">

      <!-- Loader -->
      <div v-if="isLoadingProduct" class="mt-5 pt-5">
        <div class="mt-5 pt-5"></div>
        <loader />
      </div>

      <!-- Errors -->
      <error-hero :errors="productErrors" action-text="Go back" :action="$linkTo('collections')" />

      <!-- Product -->
      <template v-if="productDocument">

        <!-- Breadcrumb -->
        <ol class="breadcrumb mb-0 font-size-xs text-gray-400">
          <li class="breadcrumb-item">
            <router-link class="text-gray-400" :to="$linkTo('home')">Home</router-link>
          </li>
          <li v-if="collection" class="breadcrumb-item">
            <router-link class="text-gray-400" :to="$linkTo('collection', collection)">{{ collection.getAttribute('title') }}</router-link>
          </li>
          <li class="breadcrumb-item active">
            <span class="text-gray-400">{{ product.getAttribute('title') }}</span>
          </li>
        </ol>

        <!-- Product information -->
        <div class="row mt-6">
          <div class="col-12 col-md-6">
            <Images />
          </div>
          <div class="col-12 col-md-6 pl-lg-10">

            <!-- Product detail -->
            <Detail ref="detailProduct" />

          </div>
        </div>

        <!-- Description -->
        <!-- <div class="mt-5 pt-5">
          <Description />
        </div> -->

        <!-- Custom product page -->
        <template v-if="landing && landing === 'custom'">
          <Custom />
        </template>

      </template>

    </div>

    <!-- Sticky Top -->
    <div v-if="productDocument && showSticky" class="flex sticky-top-product">

      <div class="flex flex-wrap container mx-auto items-center justify-center">

        <div v-if="images && images.length > 0" class="mx-3 hidden md:block">
          <img style="width:65px;height:65px;" :src="$image.url(images[0])" alt="">
        </div>

        <div class="mx-3 hidden md:block">
          <p v-if="collection" style="font-size: 27px; font-weight: 500; color: #444;text-transform: capitalize;" class="text-lg font-bold text-black">
            {{ collection.getAttribute('title') }}
          </p>
        </div>

        <div class="mx-5 hidden md:block">
          <img style="width:65px;height:65px;" src="@/assets/img/products/gright2.png" alt="">
        </div>

        <button ref="btnAddToCartPage" style="background:#51a3d4;" :disabled="!selectedVariant || isCreatingCartItem"  @click="onClickAddToCart" class="btnAddToCart uppercase  btn-adding-cart text-white p-4 font-bold tracking-widest" :class="{'opacity-75': !selectedVariant || $parent.isCreatingCartItem}">
          <span v-if="!isCreatingCartItem"> Add to cart</span>
          <span v-else><i class="fas fa-spinner fa-pulse"></i> Adding...</span>
        </button>

      </div>
    </div>
    

    <!-- Product block -->
    <hiweb-theme-block block="product" />

  </div>
</template>

<script type="text/javascript">
import Images from '@/views/product/Images';
import Detail from '@/views/product/Detail';
import Description from '@/views/product/Description';
import Custom from '@/views/product/landing/Custom';

export default {

  components: { Images, Detail, Description, Custom },

  data() {
    return {
      showSticky: false,
    }
  },

  created() {

    // Set cookie landing
    if (this.$route.query.landing) {

      this.$cookie.setCookie('landing', this.$route.query.landing);
      
    }

    // Use product mixin
    this.useProductMixin(true);

    // Listen to add to cart event
    this.$event.$on('cart-item-created', cartItemDocument => {
      
      // Show cart modal
      let action = this.$themeConfig.getConfigValue('redirect-cart-or-checkout');
      console.log(action);
      if (action === 'modal') {
        this.$event.$emit('_show-cart-modal');
      } else if (action === 'checkout'){
        this.$router.push({ name: 'checkout', params: {cartId: this.cart.getId()}});
      }else {
        this.$router.push({ name : 'cart'});
      }

    });
  },

  methods: {

    async onClickAddToCart() {

      // let cartItems = this.cart ? this.cart.getRelationshipData('cart_items') : null;
      // if (cartItems) {
      //   let cartItem = cartItems.find(item => item.getRelationshipData('variant').getId()  === this.selectedVariant.getId());
      //   if (cartItem) {
      //     this.isCreatingCartItem = true;
      //     let quantity = parseInt(cartItem.getAttribute('quantity')) + parseInt(this.productQuantity);
      //     try {
      //       let createCartItem = await this.createCartItem(cartItem.getRelationshipData('variant').getId(), quantity );
      //     } catch (error) {
      //       this.createCartItemErrors = this.$handleException(error);
      //     }
      //     this.isCreatingCartItem = false;
      //   }else{
      //     this.addToCart();
      //   }
      // }else{

      //   this.addToCart();

      // }
      
      this.addToCart();

    },

    onScroll() {
      
      if (screen.width <= 768 ) {
        if (window.scrollY > 900) {
          this.showSticky = true;
        }else{
          this.showSticky = false;
        }
      }

      if (screen.width > 768) {
        if (window.scrollY > 700) {
          this.showSticky = true;
        }else{
          this.showSticky = false;
        }
      }

    },

  },

  computed: {

    product: function() {
      return this.productDocument.getData();
    },

    images: function() {
      return this.product.getRelationshipData('images') || [];
    },

    collection: function() {
      return this.product.getRelationshipData('collection');
    },

    landing: function() {
      return this.$store.state.landing || null;
    }
  },

  mounted() {

    window.addEventListener("scroll", this.onScroll);
    
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },

}
</script>

<style lang="scss">
  .sticky-top-product{
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 0;
    z-index: 400;
    box-shadow: rgb(102, 102, 102) 0px -2px 3px;
    background: #fff;
    padding: 10px 0;
    text-transform: capitalize;
  }
</style>