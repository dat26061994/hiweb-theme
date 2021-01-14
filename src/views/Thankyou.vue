<template>
  <div class="thank-you pb-5">
    
    <div v-if="isLoadingInvoice || ((isLoadingCart && !cart) || isLoadingRecommendedProducts)" class="text-center pt-5">
      <Loader />
      <h1 style="color: #a6a6a6">...Loading...</h1>      
    </div>

    <!-- Invoice loaded -->
    <div v-else>

      <div v-if="recommendedProductsDocument" class="container">

        <div style="background: #333;width:100%;" class="py-3 px-5 text-center">
            <p class="header-suggestion">Processing your order...</p>
            <div class="progressing">
                <div class="progressing-child"></div>
            </div>
            <div style="font-size:20px;" class="text-white text-uppercase bold mt-3">
                <span style="font-weight:bold;" class="text-danger">warning: </span >Do not hit your "<span style="font-weight:bold;" class="text-danger">back</span>" button or close this page
            </div>
            <div class="text-white ">
                Processing your "BACK" button can cause you to accidentally double order!
            </div>
        </div>
      </div>

        
      <!-- Cart loaded - show related products -->
      <div v-if="recommendedProductsDocument" class="container pt-5">
        <div class="row flex  items-center justify-center">
          <div v-if="indexProduct == index" v-for="product,indexProduct in recommendedProductsDocument.getData()" class="card card-suggestion col-16 col-lg-6">
            <ProductBoxSuggestion :product="product" />
          </div>
        </div>

        <div class="text-center mt-3">
            <a style="text-decoration:underline;font-size:13px;cursor:pointer;" @click="skip()">
                No I don't want to claim this offer
            </a>
        </div>

      </div>

    </div>

  </div>
</template>

<script type="text/javascript">
import Loader from '@/components/Loader';
import ErrorAlert from '@/components/ErrorAlert';
import ErrorHero from '@/components/ErrorHero';
import ProductBoxSuggestion from '@/components/ProductBoxSuggestion';

export default {

  components: { Loader, ErrorHero, ErrorAlert, ProductBoxSuggestion },

  data() {
    return {
        
      index: 0,

      // Show thankyou
      showThankyou: false,

      // Recommended products
      isLoadingRecommendedProducts: false,
      recommendedProductsDocument: null,

    };
  },

  created() {

    // Listen to cart item created event
    this.$event.$on('cart-item-created', cartItemDocument => {
      this.skip();
    });
    
    // Active mixin
    this.useThankyouMixin(true);

    // On cart loaded event
    this.$event.$on('cart-loaded', async cartDocument => {

      // Skip if recommended products are loaded
      if (this.recommendedProductsDocument) {
        return;
      }

      let products = cartDocument.findResources([
        ['type', 'products']
      ]);

      // No products?
      if (!products || !products.length) {
        this.showThankyou = true;
        return;
      }
      
      let words = [];
      products.forEach(product => {

        let productHandleWords = product.getAttribute('handle').split('-');
        words = words.concat(productHandleWords);
        words = words.filter((word, index) => {
          return index === words.indexOf(word);
        });

      });

      // Search string
      // let searchString = words.join(' ');
      let exceptionWords = ['skull'];
      let excludeWords = ['water','tracker','bottle','stainless','steel','with','lid'];
      let searchString = words.filter(word => {

        if (word === '-') {
          return false;
        }

        var re = /^[A-Za-z]+$/;

        if (!re.test(word)) {
          return false;
        }
        
        if (excludeWords.indexOf(word) > -1) {
          return false;
        }

        // words.push(word);
        
        return true;

      }).join(' ');
      searchString = this.$string.limit(searchString, 90);

      // Search for related products
      this.isLoadingRecommendedProducts = true;
      try {

        this.recommendedProductsDocument = await this.$http.collection('products', {
          params: {
            'filter[search]': searchString
          }
        });

      } catch (e) {
        
        this.showThankyou = true;
        this.$cookie.set('cart-id', '', -1);
        this.$router.push({ name : 'successful'});

      }

      this.isLoadingRecommendedProducts = false;

    });

  },

  methods: {

    /**
    * Skip related products
    */
    skip() {

      if (this.index < 2) {
          this.index = this.index + 1;
      }else {
          this.$router.push({ name : 'successful'});
      }
      if (this.index + 1 > this.recommendedProductsDocument.getData().length) {

          this.$cookie.set('cart-id', '', -1);
          this.$router.push({ name : 'successful'});

      }

    },
  },

  computed: {
    searchString: function() {

    }
  },
}
</script>

<style lang="scss">

 @media only screen and (max-width: 600px) {
   .card-suggestion {

  }
 }
  
  .header-suggestion{
    text-transform: uppercase;
    font-size: 26px;
    color: #ffa500;
    font-weight: bold;
  }

  .progressing{
    padding:2px;
    height: 20px;
    border: 2px solid #fff;
    border-radius: 10px;
  }

  .progressing-child{
    height: 100%;
    width: 75%;
    background: #ffa500;
    border-radius: 5px;
  }

  .activeVariant{
    background:#ffa500 !important;
    text-transform:uppercase;
    color:#fff !important;
    font-weight:bold;
    padding: 15px 20px;
  }

  .btnAddToOrder{
    background:#fff !important;
    text-transform:uppercase;
    color:#aaa !important;
    font-weight:bold;
    padding: 15px 20px;
    border: 0.5px solid #aaa !important;
  }

  .err-input{
    border-color: red !important;
  }
</style>