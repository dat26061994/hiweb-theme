<template>
  <div class="progress ml-2" :style="{'width': widthCurrent, 'height': heightCurrent}" :class="customClass">
    <span class="progress__load" :style="{'width': width, 'background': color}"></span>
  </div>
</template>

<script>
export default {

  props: ['width', 'color', 'widthBar', 'heightBar', 'customClass'],

  data() {
    return {
      widthCurrent: '100px',
      heightCurrent: '10px',
    }
  },

  created() {

    if (this.widthBar) {
      this.widthCurrent = this.widthBar;
    }

    if (this.heightBar) {
      this.heightCurrent = this.heightBar;
    }

  }

}
</script>

<style lang="scss">
.progress {
  position: relative;
  background: #ededed;

  &__load {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }
}
</style>