<template>
  <div id="app">

    <div v-if="$themeConfig.getConfigValue('promotion-text')" style="background:#fdea3b;color: #000;font-size: 20px;font-weight: 700;padding: 20px 0;" class="w-full text-center">
        {{ $themeConfig.getConfigValue('promotion-text') }}
    </div>

    <!-- Navbar -->
    <Navbar v-if="showNavBar" />

    <router-view/>

    <!-- Footer -->
    <Footer v-if="showFooter" />

    <!-- Cart modal -->
    <CartModal />

  </div>
</template>

<script type="text/javascript">
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartModal from '@/components/CartModal';

export default {

  components: { Navbar, Footer, CartModal },

  mounted() {
        
  },

  watch: {
    
    '$route': function() {
        // Load trustbox-landing
        setTimeout(function(){ 
            var element = document.getElementsByClassName("trustpilot-widget");
            for(var i=0; i<element.length; i++) {
                window.Trustpilot.loadFromElement(element[i]);
            }
        }, 1000);
    }

  },

  computed: {
      showNavBar() {
          if (this.$route.name !== 'thankyou' && this.$route.name !== 'checkout' && this.$route.name !== 'invoice') {
              return true;
          }
          return false;
      },

      showFooter() {

          if (this.$route.name !== 'thankyou' && this.$route.name !== 'checkout' && this.$route.name !== 'invoice') {
              return true;
          }
          return false;

      }
  },
  
}
</script>

<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

.list-new {
    list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAcCAYAAACZOmSXAAAACXBIWXMAAA5lAAAOZQHwd0H4AAACgElEQVRIia2XwXHbQAxFQY/vdgdWB6YriE68hh1IKYBjuoK4BGVYgKkKIl95sVSBxQ7kDqQK1gPN3wwIAis6CWZ4kLi7Dwt8YJdZCIFSljXFLREtiWiO50YNPxHRFk8bqu6YXFCYCwd0RUSLqYvB1kT0HKru8FfwrCmWAOtdTjWORhmqbpsaf22AGfrojO8RXhlaTsU3NY6dfsY7ufaMiHIiOoSq2w92njUFT/ipFjohCq0XSqSoxnMj5s2iBhDNF/Eu/wPPmqIkot9q3R2LbUr+hBO8gbMzDjjawxmOSQeV43WouuUU6AWHrDT2oerymHMtrt1/ArdGtfRRC9cQgRxwQl3/C5QjyeDv6tUr0nhOB++8VANWU3OcAHNF3KtXozRa8FYslEM8Ry6NCWCO4sYA/wpVV+vxV6pGe7Vr1sIbEb0jfykwO7o3wD8scIRLS3WkBZTrgbdGR2Sw67SG60NBh/oRNSvB/PtdgVm0DxGcNcUcT56CDwzhWqu/X6IDTvNg8DxqhKFI3Rv04MJnhgNLx4HWAHMN50qcsr/fafiH+GMQFmE1FpZmNg+jTOfk2JXK6z3KRe/+iEW0A9FeAR5oBjUvq2mndz7IAw6GkSUc4OZROjcYXWKjnG8gkmgLrcpoAJTYKevgyTsDEMEkPJ5q+hzvrTB+xbKm0A1n1F6j2ldKeDxpi5x9FXqLSpDgk5XOMxw71OHjyXvU6VRw7HS6EmrrsNLXKKtpEPLbehdCQGvnpuu22NHtNeEAIXx7UZ45Hu+Wm+zt3tU5hzLvzFmX7QOXhuTVOfnFgirgSEx1It50+UJysVIufi7BCa5tFp4VZu5aLKZNqDrdsHwjok9iMDe1IG29DQAAAABJRU5ErkJggg==);
}

p{
  margin:0px;
  padding:0px;
}

.text-black {
    color: #333 !important;
}

.h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.3em;
    text-transform: none;
    letter-spacing: .03em;
    font-family: "pangram",Helvetica,Arial,sans-serif;
}

.h3 {
    font-weight: bold;
    line-height: 1.3em;
    letter-spacing: .03em;
    font-family: "pangram",Helvetica,Arial,sans-serif;
    font-size: 16px;
}

.margin-bottom-xs-1 {
    margin-bottom: 24px;
}

.margin-top-xs-1 {
    margin-top: 24px;
}

.col-md-offset-2 {
    margin-left: 16.6666666667%;
}

.flex-justify-content-center {
    -webkit-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
}

.flex-grow-xs-2 {
    -webkit-flex-grow: 2;
    flex-grow: 2;
}

.padding-right-xs-h {
    padding-right: 10px;
}

img {
    vertical-align: middle;
}

.flex-grow-xs-3 {
    -webkit-flex-grow: 3;
    flex-grow: 3;
}

.padding-left-xs-h {
    padding-left: 10px;
}

.flex-box[layout='column'], [layout='column'].option-box {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

h3, .h3 {
    font-weight: 500;
    line-height: 1.3em;
    letter-spacing: .03em;
    font-family: "pangram",Helvetica,Arial,sans-serif;
    font-size: 16px;
}

.margin-bottom-sm-1 {
    margin-bottom: 24px;
}

.padding-right-sm-2 {
    padding-right: 40px;
}

.margin-left-sm-1 {
    margin-left: 20px;
}

.w-95{
    width: 95%;
}
button:focus {
    outline: none;
}

h1,h2,h3,h4,h5,h6{
    font-weight: bold;
}

.w-100{
    width: 100% !important;
}

.radio {
    margin: 16px 0;
    display: block;
    cursor: pointer;
    input {
        display: none;
        & + span {
            line-height: 22px;
            height: 22px;
            padding-left: 22px;
            position: relative;
            &:not(:empty) {
                padding-left: 22px + 28;
            }
            &:before,
            &:after {
                content: '';
                width: 22px;
                height: 22px;
                display: block;
                border-radius: 50%;
                left: 0;
                top: 0;
                position: absolute;
            }
            &:before {
                transition: background .2s ease, transform .4s cubic-bezier(.175, .885, .32, 2);
                border-width: 2px;
            }
            &:after {
                background: #fff;
                transform: scale(.78);
                transition: transform .6s cubic-bezier(.175, .885, .32, 1.4);
            }
        }
        &:checked + span {
            &:before {
                transform: scale(1.04);
                background: #ffffff;
            }
            &:after {
                transform: scale(.6);
                transition: transform .3s ease;
                background: #333;
            }
        }
    }
    &:hover {
        input {
            & + span {
                &:before {
                    transform: scale(.92);
                }
                &:after {
                    transform: scale(.74);
                }
            }
            &:checked + span {
                &:after {
                    transform: scale(.6);
                }
            }
        }
    }
}

.radio-square {
    // margin: 16px 0;
    display: block;
    cursor: pointer;
    input {
        display: none;
        & + span {
            line-height: 22px;
            height: 22px;
            padding-left: 22px;
            position: relative;
            &:not(:empty) {
                padding-left: 22px + 28;
            }
            &:before,
            &:after {
                content: '';
                width: 22px;
                height: 22px;
                display: block;
                left: 0;
                top: 0;
                position: absolute;
            }
            &:before {
                transition: background .2s ease, transform .4s cubic-bezier(.175, .885, .32, 2);
                border-width: 2px;
            }
            &:after {
                background: #fff;
                transform: scale(.78);
                transition: transform .6s cubic-bezier(.175, .885, .32, 1.4);
            }
        }
        &:checked + span {
            &:before {
                transform: scale(1.04);
                background: #ffffff;
            }
            &:after {
                transform: scale(.6);
                transition: transform .3s ease;
                background: #333;
            }
        }
    }
    &:hover {
        input {
            & + span {
                &:before {
                    transform: scale(.92);
                }
                &:after {
                    transform: scale(.74);
                }
            }
            &:checked + span {
                &:after {
                    transform: scale(.6);
                }
            }
        }
    }
}

body{
    font-size: 14px;
    line-height: 35px;
    color: #333;
    font-family: Libre Franklin !important;
    background-color: #ffffff;
    overflow: auto;
    overflow-x: hidden;
}

button:focus{
    outline: none !important;
}

.librefranklin-regular {
    font-family: 'Libre Franklin';
}

.oswald-medium {
    font-family: 'Oswald';
}

.oswald-light {
    font-family: 'Oswald-light', sans-serif;
}

::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3);
	border-radius: 5px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 6px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	border-radius: 5px;
	-webkit-box-shadow: inset 0 0 3px rgba(0,0,0,.3);
	background-color: #555;
}

strong {
    font-weight: bold !important;
}
</style>