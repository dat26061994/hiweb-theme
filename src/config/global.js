import themeConfig from 'hiweb-theme-sdk/config';

// Global config
themeConfig.section('Global', null, section => {

  // Logo image
  section.config('logo-image').setLabel('Logo image').setDriver('image-selector').setLimit(1).default([{
    url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
    path: 'themes/default-ecommerce-theme/assets/img/covers/cover-21.jpg'
  }]);

  // Top menu
  section.config('top-menu').setLabel('Top menu').setDriver('menu-selector');

  // Promotion text
  section.config('promotion-text').setLabel('Promotion text').setDriver('text-input').default(' ⚡️ 50% OFF for all products (Coupon: CHANGE-THIS-IN-THEME-SETTING) ⚡️ ');

  // Redirect to cart/checkout
  section.config('redirect-cart-or-checkout').setLabel('Add to cart behavious').setDriver('select-input').setOptions({
    cart: 'Redirect to cart page',
    checkout: 'Redirect to checkout page',
  }).default('cart');

});