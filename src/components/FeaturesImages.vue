<template>
    <div class="section-2" :style="'background: url(' + $image.url(component.getConfigValue('features-images__image')[0]) + ') no-repeat center center fixed; background-size: cover;background-position: 50%;background-repeat: no-repeat;background-size: cover;'">
      <div class="container mx-auto p-3 sm:p-5">

        <div class="flex flex-wrap">
          <div class="w-full sm:w-5/6">
            <p class="mb-0 text-xl sm:text-2xl text-black uppercase font-bold">
              {{ component.getConfigValue('features-images__heading') }}
            </p>
            <p class="mb-0 text-black text-lg mt-3">
              {{ component.getConfigValue('features-images__text') }}
            </p>
          </div>
          <div v-html="component.getConfigValue('features-images__tag')" class="w-fill mt-3 md:mt-0 sm:w-1/6 border-l-2 border-blue-600 px-3">
              
          </div>
        </div>

        <div class="hidden md:flex flex-wrap">
          <div class="w-1/4 p-3" v-for="image in component.getConfigValue('features-images__images')">
            <img style="width:100%;height:100%;" :src="$image.url(image)" alt="">
          </div>
        </div>

        <div class="flex flex-wrap md:hidden">
          <div class="w-full p-3">
            <img style="width:100%;height:100%;" :src="$image.url(component.getConfigValue('features-images__images')[0])" alt="">
          </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
    
    props: ['component']

}
</script>