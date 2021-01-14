<template>
  <footer class="bg-dark bg-cover mt-12 @@classList" :style="'background-image: url(' + require('@/assets/img/patterns/pattern-2.svg') + ')'">
    <div class="py-12 border-bottom border-gray-700">
      <div class="container">
        
        <div class="row">
          <div class="col-12 col-md-3">

            <!-- Heading -->
            <h4 class="mb-6 text-white">{{ $themeConfig.getConfigValue('footer-brand-text') }}</h4>
            <div v-html="$themeConfig.getConfigValue('footer-html')" class="text-muted"></div>

            <!-- Social -->
            <ul v-if="$themeConfig.getConfigValue('footer-show-social') == 'show'" class="list-unstyled list-inline mb-7 mb-md-0">
              <li class="list-inline-item">
                <a :href="$themeConfig.getConfigValue('footer-social-facebook')" class="text-gray-350">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a :href="$themeConfig.getConfigValue('footer-social-youtube')" class="text-gray-350">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a :href="$themeConfig.getConfigValue('footer-social-twitter')" class="text-gray-350">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a :href="$themeConfig.getConfigValue('footer-social-instagram')" class="text-gray-350">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>

          </div>

          <div v-for="menuLink in $themeConfig.getConfigValue('footer-menu')" class="col-auto col-sm">

            <!-- Heading -->
            <h6 class="heading-xxs mb-4 text-white">
              <a :target="menuLink.target || 'self'" v-if="menuLink.url && menuLink.url.includes('https://')" class="text-light" :href="menuLink.url">{{ menuLink.text }}</a>
              <router-link v-else :to="{ path: menuLink.url }" :target="menuLink.target || 'self'" class="text-light">{{ menuLink.text }}</router-link>
            </h6>

            <!-- Links -->
            <ul v-if="menuLink.children" class="list-unstyled mb-0">
              <li v-for="childLink in menuLink.children">
                <a v-if="childLink.url && childLink.url.includes('https://')" class="text-gray-300" :href="childLink.url">{{ childLink.text }}</a>
                <router-link v-else class="text-gray-300" :target="childLink.target || 'self'" :to="{ path: childLink.url }">{{ childLink.text }}</router-link>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </div>
    <div class="py-6 container mx-auto">
      <div class="w-full flex flex-wrap mx-2 p-3" style="border-top:1px solid #fff">
        <div class="w-full md:w-1/3 md:w-1/2">
          <img :src="$image.url($themeConfig.getConfigValue('logo-image')[0])" alt="">
        </div>
        <div  class="w-full md:w-2/3 md:text-right md:w-1/2 text-white text-sm">
          <p v-html="$themeConfig.getConfigValue('footer-address')">

          </p>
          <p>{{ $themeConfig.getConfigValue('footer-copyright-text') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>