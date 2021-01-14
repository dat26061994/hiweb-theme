<template>
  
  <div class="navbar p-0">

    <div class=" w-full bg-black">
      
      <div class="hidden md:block">

        <div class="container mx-auto" >

          <div class="w-1/6 flex" style="align-items:center;">
            
            <!-- Brand -->
            <router-link v-if="logo" class="navbar-brand" :to="$linkTo('home')">
              <img :src="$image.url($themeConfig.getConfigValue('logo-image')[0])" style="height: 45px" />
            </router-link>
              
          </div>

          <div class="w-5/6 align-middle">

            <div class="w-full nav-deskop align-middle right-menu flex h-full float-right flex-wrap">

              <div class="dropdown-hover w-1/3 flex items-center">

                <div class="w-full search-bar flex items-center">
                  <input type="text" v-model="searchProductTitle" v-on:keyup.enter="searchProducts" placeholder="Search">
                  <i class="fas fa-search"></i>
                </div>
                  
              </div>

              <div class="w-2/3">

                <div class="flex flex-wrap justify-end">
                  
                  <div class="w-5/6 flex flex-wrap justify-end">

                    <!-- Nav -->
                    <div class="" v-for="menuLink in $themeConfig.getConfigValue('top-menu')">
                      <a v-if="menuLink && menuLink.url && menuLink.url.includes('https://')" :href="menuLink.url" class="nav-link text-white dropbtn " :data-toggle="menuLink.children && menuLink.children.length ? 'dropdown' : ''">{{ menuLink.text }}</a>
                      <router-link v-else :to="{path: menuLink.url}" class="nav-link text-white dropbtn " :data-toggle="menuLink.children && menuLink.children.length ? 'dropdown' : ''">{{ menuLink.text }}</router-link>
                      <!-- Menu child -->
                        <div v-if="menuLink.children && menuLink.children.length" class="dropdown-menu">
                          <div class="card card-lg">
                            <div class="card-body">
                              <ul class="list-styled font-size-sm">
                                <li v-for="childLink in menuLink.children" class="list-styled-item">
                                  <a v-if="childLink && childLink.url && childLink.url.includes('https://')" :href="childLink.url" class="list-styled-item">{{ childLink.text }}</a>
                                  <router-link v-else class="list-styled-link" :to="{path: childLink.url}">{{ childLink.text }}</router-link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                    </div>

                  </div>

                  <div class="dropdown-hover relative w-1/6 flex items-center">

                    <span class="nav-link text-white cursor-pointer" data-toggle="modal" href="#modalShoppingCart">
                      <span :data-cart-items="cart.getAttribute('item_count') || 0">
                        <i class="fe fe-shopping-cart"></i>
                      </span>
                    </span>
                      
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      

      <div class="w-full flex items-center justify-center relative md:hidden">

        <button data-toggle="modal" href="#modalToggleMenu" class="absolute btn-menu text-white">
          <transition name="slide-fade">
            <i :class="icon_menu"></i>
          </transition>
        </button>

        <div class="logo">
          <router-link :to="$linkTo('home')">
            <img :src="$image.url(logo)" style="height: 45px" />
          </router-link>
        </div>

        <div class="absolute cart" style="right: 20px;">
          <div class="relative">
            <span class="nav-link text-white cursor-pointer" data-toggle="modal" href="#modalShoppingCart">
              <span :data-cart-items="cart.getAttribute('item_count') || 0">
                <i class="fe fe-shopping-cart"></i>
              </span>
            </span>
          </div>
        </div>
        
        
      </div>

      <div class="" v-click-outside="closeEvent">
        <div style="width:80%;" class="modal fixed-left fade" id="modalToggleMenu" tabindex="-1" role="dialog" aria-hidden="true">

          <div class="modal-dialog modal-dialog-vertical" role="document">
            <div class="modal-content p-3">

              <div class="search-bars">
                <input type="text" v-model="searchProductTitle" v-on:keyup.enter="searchProducts" placeholder="Search">
              </div>

              <div class="w-full border-b border-solid border-black">

                <!-- Nav -->
                <div class="" v-for="menuLink in topMenu">
                  <a v-if="menuLink.url && menuLink.url.includes('https://')" :href="menuLink.url" class="nav-link text-black " :data-toggle="menuLink.children && menuLink.children.length ? 'dropdown' : ''">{{ menuLink.text }}</a>
                  <router-link v-else :to="{path: menuLink.url}" class="nav-link text-black " :data-toggle="menuLink.children && menuLink.children.length ? 'dropdown' : ''">{{ menuLink.text }}</router-link>
                  <!-- Menu child -->
                    <div v-if="menuLink.children && menuLink.children.length" class="dropdown-menu">
                      <div class="card card-lg">
                        <div class="card-body">
                          <ul class="list-styled font-size-sm">
                            <li v-for="childLink in menuLink.children" class="list-styled-item">
                              <a v-if="childLink.url && childLink.url.includes('https://')" :href="childLink.url" class="list-styled-link">{{ childLink.text }}</a>
                              <router-link v-else class="list-styled-link" :to="{path: childLink.url}">{{ childLink.text }}</router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>

              </div>

              <div class="list-page mt-3">
                <a href="" class="mx-2">
                  <i class="fab fa-instagram fa-lg rounded-full text-black bg-white text-center py-2 footer__social-icon"></i>
                </a>
                <a href="" class="mx-2">
                  <i class="fab fa-facebook-f fa-lg rounded-full text-black bg-white text-center py-2 footer__social-icon"></i>
                </a>
                <a href="" class="mx-2">
                  <i class="fab fa-twitter fa-lg rounded-full text-black bg-white text-center py-2 footer__social-icon"></i>
                </a>
                <a href="" class="mx-2">
                  <i class="fab fa-pinterest fa-lg rounded-full text-black bg-white text-center py-2 footer__social-icon"></i>
                </a>
                <a href="" class="mx-2">
                  <i class="fab fa-snapchat-ghost fa-lg rounded-full text-black bg-white text-center py-2 footer__social-icon"></i>
                </a>
              </div>

            </div>
          </div>
         
        </div>
      </div>

    </div>

  </div>

  
</template>

<script type="text/javascript">
import Vue from 'vue'

// Directive event click outside handle
Vue.directive('click-outside', {
    bind(el, binding, vnode) {
        var vm = vnode.context;
        var callback = binding.value;

        el.clickOutsideEvent = function (event) {
            if (!(el == event.target || el.contains(event.target))) {
                return callback.call(vm, event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
});

export default {

  data() {
    return {
      searchProductTitle:'',
      icon_menu:'fas fa-bars',
    }
  },

  created() {

  },

  methods: {

     /**
    * Close modal
    */
    closeEvent() {

      $(this.$el.querySelector('.modal')).modal('hide');

    },

    /**
    * search Product
    *
    * @param String
    */
    searchProducts() {

      this.$router.push( { name: 'products', query: { search: this.searchProductTitle }});
      
    },

  },

  computed: {

    // Logo
    logo() {

      return this.$themeConfig.getConfigValue('logo-image')[0] || null;      

    },

    // Top menu selector
    topMenu() {

      return this.$themeConfig.getConfigValue('top-menu') || null;

    }
  },

  watch: {
    '$route': function() {

      this.closeEvent();
      
    }
  },

}
</script>

<style type="text/css" lang="scss">
  .search-bar{
    cursor: pointer;
    padding: 2px 15px;
    background: #fff;
    border-radius: 20px;

    input {
      border: none;
      color: #51a3d4;
      height: 35px;
      -webkit-box-shadow: none;
      box-shadow: none;
      width: 100%;
    }

    input:focus {
      border: none;
      outline: none;
    }

    i {
      color: #51a3d4;
      font-size: 18px;
    }
  }

  .dropbtn {
    line-height: 80px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
  }

  @media only screen and (max-width: 767px) {

    .nav-mobile {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      height: 50px;
      width: 100%;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      -webkit-box-shadow: 0 0 2px rgba(0,0,0,.3);
      box-shadow: 0 0 2px rgba(0,0,0,.3);
      z-index: 15;
    }

    .btn-menu {
      left: 10px;
      padding: 5px;
      cursor: pointer;
    }

    .search-bars {
        border-bottom: 1px solid #000;
        margin-top: 20px!important;
        -webkit-box-shadow: none!important;
        box-shadow: none!important;
        padding-left: 0!important;
        padding-right: 0!important;
        height: 48px!important;

        input{
          -webkit-box-shadow: none!important;
          box-shadow: none!important;
          background: transparent;
          border: none;
          outline: none;
          -webkit-transform: translateY(4px);
          transform: translateY(4px);
          font-size: 20px;
          height: 44px;
          padding: 0 11px;
          -webkit-appearance: none;
          vertical-align: top;
          width: 100%;
        }
    }

  }
  
  

</style>