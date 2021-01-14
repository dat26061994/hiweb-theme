<template>
    <div class="bg-white">
      <div class="container mx-auto">
        <div class="flex flex-wrap p-5">
          <div class="w-full sm:w-1/3 p-4" v-for="des,index in component.getConfigValue('features-description__image')">
            <p class="p-5 md:p-8"><img class="m-auto" :src="$image.url(des)" alt=""></p>

            <p class="text-xl text-blue-600 font-bold text-center mt-3 uppercase">
              {{ component.getConfigValue('features-description-heading'+ (parseInt(index) + 1 )) }}
            </p>

            <p class="text-center my-3">
              {{ component.getConfigValue('features-description-textarea'+ (parseInt(index) + 1 )) }}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    
    props: ['component'],

    created() {
      
    },

}
</script>