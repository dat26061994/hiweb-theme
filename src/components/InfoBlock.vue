<template>
  <div class="flex flex-wrap">
    
    <div v-if="component.getConfigValue('info-block__title')" class="w-full my-10">
      <p class="uppercase text-3xl text-black font-bold text-center">
        {{ component.getConfigValue('info-block__title') }}
      </p>
    </div>

    <div :style="'background: url(' + bgImage + ') no-repeat center center fixed; background-size: cover;background-position: 50%;background-repeat: no-repeat;background-size: cover;'" class="w-full hidden md:flex flex-wrap content-1 py-0 ">

      <div class="flex flex-wrap container mx-auto">

        <div v-if="component.getConfigValue('info-block__layout') == 'left'" class="w-1/2 hidden sm:flex items-center p-10">

          <img  :src="$image.url(component.getConfigValue('info-block__image')[0])" alt="">

        </div>

        <div  class="w-full sm:w-1/2 flex items-center justify-start p-5">

          <div class=" w-full p-3 sm:p-0">
            <p class="text-xl sm:text-3xl  text-blue-600 font-bold uppercase oswald-medium">
              {{ component.getConfigValue('info-block__heading') }} 
            </p>

            <p v-html="component.getConfigValue('info-block__subtitle')" class="text-black text-base mt-5">
            </p>
          </div>

        </div>
        <div v-if="component.getConfigValue('info-block__layout') == 'right'" class="w-1/2 hidden sm:flex items-center p-10">

          <img  :src="$image.url(component.getConfigValue('info-block__image')[0])" alt="">

        </div>
        
      </div>
    </div>

    <div class="flex md:hidden flex-wrap">
      <div class="w-full">
        <img :src="$image.url(component.getConfigValue('info-block__image-mobile')[0])" alt="">
      </div>
      <div class="p-5 text-center w-full">
        <p class="text-xl sm:text-xl text-blue-600 font-bold uppercase oswald-medium">
          {{ component.getConfigValue('info-block__heading') }}
        </p>

        <p v-html="component.getConfigValue('info-block__subtitle')" style="" class="text-black mt-5">
        </p>
        
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
export default {
  props: ['component'],

  created() {

  },

  computed: {
    bgImage: function () {
      return this.component.getConfigValue('info-block__background').length > 0 ? this.$image.url(this.component.getConfigValue('info-block__background')[0]) : ''
    }
  },
}
</script>

<style type="text/css" lang="scss" scoped>
section {
  margin-bottom: 100px;
}
</style>