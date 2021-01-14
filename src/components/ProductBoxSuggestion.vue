<template>
  <div class="product-box">

    <div class="card card-product">
      <div class="card-image">
        <a href="#">
          <img :src="$image.resize(product.getRelationshipData('image'), 300, true)" class="img-center img-fluid">
        </a>
      </div>
      <div class="card-body mt-2 pt-0 pb-0">
        <h6 :title="product.getAttribute('title')">
          {{ product.getAttribute('title') }}
        </h6>
        <p v-if="product.getAttribute('description')" class="text-sm">
          {{ product.getAttribute('description') }}
        </p>

        <!-- If selected variant present -->
        <template v-if="selectedVariant">
          <strong class="text-primary">{{ $currency.priceFormat(selectedVariant.getAttribute('price') * productQuantity) }}</strong>
          <small v-if="selectedVariant.getAttribute('compare_at_price')" class="text-muted ml-2" style="text-decoration: line-through;">
            {{ $currency.priceFormat(selectedVariant.getAttribute('compare_at_price') * productQuantity) }}
          </small>
        </template>
        <span v-else class="text-muted">Out of stock</span>

        <!-- Product options -->
        <template v-if="product.getAttribute('options') && product.getAttribute('options').length">
          <div v-for="option, index in product.getAttribute('options')" class="product-box__option mb-1">
            <label>{{ option.name }}</label>
            <select @change="setProductOptionValue(index + 1)" :class="'form-control custom-select product-option-' + (index + 1)">
              <option v-for="value in option.values" :value="value">{{ value }}</option>
            </select>
          </div>
        </template>

      </div>
      <div class="card-footer" >

        <!-- Errors -->
        <ErrorAlert :errors="createCartItemErrors" />

        <!-- Success -->
        <div v-if="success" class="alert alert success">Your order has been updated successfully.</div>

        <!-- Add to cart -->
        <div class="row">
          <div class="col-auto">
            <select v-model="productQuantity" class="form-control custom-select" style="">
              <option v-for="i in 10">{{ i }}</option>
            </select>
          </div>
          <div class="col">
            <button :disabled="!selectedVariant || isCreatingCartItem" @click="addToCart" class="bg-blue-600 uppercase w-full text-white btn-checkout">Add to my order</button>
          </div>
        </div>

      </div>
    </div>
    
  </div>
</template>

<script type="text/javascript">
import ErrorAlert from '@/components/ErrorAlert';

export default {

  props: ['product'],

  components: { ErrorAlert },

  data() {
    return {
      success: false,
      index: 0,
    };
  },

  created() {

    // Build product document to use product mixin
    this.productDocument = new this.$JsonApi;
    this.productDocument.setData(this.product);

    // Included data
    let included = [];

    // Add variants
    let variants = this.product.getRelationshipData('variants');
    if (variants) {
      included = included.concat(variants);
    }
    
    this.productDocument.setIncluded(included);

    // Set default selected option
    let options = this.productDocument.getData().getAttribute('options');
    if (options && options.length) {
      options.forEach((option, index) => {
        
        // If no values
        let values = option.values;
        if (!values || !values.length) {
          return;
        }

        this['productOption' + (index + 1)] = values[0];

      });
    }

    // Listen to cart item created event
    this.$event.$on('cart-item-created', cartItemDocument => {
      this.success = true;
    });

    // Use product mixin
    this.useProductMixin(true);

  },

  methods: {

    setProductOptionValue(optionIndex) {
      let value = this.$el.querySelector('.product-option-' + optionIndex).value;
      this['productOption' + optionIndex] = value;
    }
  }

}
</script>