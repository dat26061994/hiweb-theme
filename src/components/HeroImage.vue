<template>
  <div class="hero-image">
    <div class="slide-container hidden md:flex flex-wrap" :style="'background: url(' + $image.url(component.getConfigValue('hero-image__image')[0]) + ') no-repeat center center fixed; background-size: cover;background-position: 50%;background-repeat: no-repeat;background-size: cover;'">
      
      <div class="container mx-auto flex flex-wrap">
          <div class="mx-auto w-1/2 flex items-center">

            <div>
              <p class="p-0 m-0 uppercase font-bold oswald-medium" :style="'color: ' + component.getConfigValue('hero-image__heading-color') + ';font-size: ' + component.getConfigValue('hero-image__heading-fontsize') + 'px' ">
                {{ component.getConfigValue('hero-image__heading') }}
              </p>
              <p class="p-0 m-0 text-lg sm:text-xl mt-2  sm:mt-5" :style="'color: ' + component.getConfigValue('hero-image__subtitle-color') + ';font-size: ' + component.getConfigValue('hero-image__subtitle-fontsize') + 'px'  ">
                {{ component.getConfigValue('hero-image__subtitle') }}
              </p>
              <router-link v-if="component.getConfigValue('hero-image__button-text')" :to="component.getConfigValue('hero-image__button-link')">
                <button class="uppercase text-lg p-3 rounded font-bold mt-3 sm:mt-5 bg-blue-600 text-white oswald-medium">
                  {{ component.getConfigValue('hero-image__button-text') }}
                </button>
              </router-link>
              
            </div>
            
          </div>

          <div class="w-1/2 flex justify-center">
            <img :src="$image.url(component.getConfigValue('hero-image__image-right')[0])" alt="">
          </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="flex-wrap flex md:hidden">
      <div class="w-full text-center px-5 mt-5">
        <p class="uppercase text-xl sm:text-3xl font-bold oswald-medium">
          {{ component.getConfigValue('hero-image__heading') }}
        </p>
        <p class="text-lg sm:text-xl mt-2  sm:mt-5">
          {{ component.getConfigValue('hero-image__subtitle') }}
        </p>
        <router-link v-if="component.getConfigValue('hero-image__button-text')" :to="component.getConfigValue('hero-image__button-link')">
          <button class="uppercase text-lg p-3 rounded font-bold mt-3 sm:mt-5 bg-blue-600 text-white oswald-medium">
            {{ component.getConfigValue('hero-image__button-text') }}
          </button>
        </router-link>
      </div>
      <div class="w-full">
        <img class="m-auto" :src="$image.url(component.getConfigValue('hero-image__image-mobile')[0])" alt="">
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
export default {

  props: ['component']

}
</script>
