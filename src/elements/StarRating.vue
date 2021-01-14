<template>

  <div class="star-rating" :class="customClass">

    <!-- <span v-if="!hideValue" class="align-middle">({{ value }})</span> -->

    <label class="star-rating__star"
      :class="{ 'bg-star-not' : value < rating || value == null }"
      v-for="rating in ratings"
      v-on:click="set(rating)"
      v-on:mouseover="star_over(rating)"
      v-on:mouseout="star_out"
      :style="{'font-size': fontSize}">

      <input class="star-rating star-rating__checkbox" type="radio" :value="rating" :name="name" v-model="value" :disabled="disabled">
      
      <span v-if="value >= rating && value != null" class="fa star fa-star" :class="starClass"></span>
      <span v-else class="fa star-item fa-star star-item-not"></span>

    </label>

  </div>

</template>

<style lang="scss">
  %visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px; width: 1px;
    margin: -1px; padding: 0; border: 0;
  }

  .reviews-star-rating {
    .star-rating__star{
      background:#475459;
    }
  }

  .star-rating {

    .bg-star-not {
        background: #ababab;
    }

    &__star {
      background: #51a3d4;
      width: 30px;
      margin-right: 5px;
      padding: 2.5px 6px;
      vertical-align: middle;
      line-height: 1;
      font-size: 1.5em;
      color: #ABABAB;
      -webkit-transition: color 0.2s ease-out;
      transition: color 0.2s ease-out;
      border-radius: 5px;

      &:hover {
        cursor: pointer;
      }
      
      &.is-selected {
        color: #ABABAB;
      }
      
      &.is-disabled:hover {
        cursor: default;
      }
    }

    .star {
      font-size:0.8em;
      color: #fff;
      width: 18px;
      height: 18px;
    }

    .star-item{
      font-size:0.8em;
      color: #fff;
    }

    &__checkbox {
      @extend %visually-hidden;
    }
  }
</style>

<script>

export default {

  props: ['name', 'value', 'id', 'disabled', 'required', 'customClass', 'starClass', 'fontSize', 'hideValue'],

  data() {
    return {

      temp_value: null,
      ratings: [1, 2, 3, 4, 5]

    };
  },

  methods: {
    
    star_over(index) {
      var self = this;

      if (!this.disabled) {
        this.temp_value = this.value;
        return this.value = index;
      }

    },

    star_out() {
      var self = this;

      if (!this.disabled) {
        return this.value = this.temp_value;
      }
    },

    set(value) {
      var self = this;

      if (!this.disabled) {
        this.temp_value = value;
        return this.value = value;
      }
    }
  }

}
</script>