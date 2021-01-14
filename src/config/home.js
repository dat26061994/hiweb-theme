import themeConfig from 'hiweb-theme-sdk/config';

themeConfig.section('Home page', 'home', section => {

  // Register a block
  section.block('home', 'Home block', block => {

    // Register a component
    block.register('hero-image', 'Hero image', component => {

      // Featured image
      component.config('hero-image__image').setLabel('Background image').setDriver('image-selector').setLimit(1).default([{
        url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
        path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/header.png'
      }]);

      // Right image
      component.config('hero-image__image-right').setLabel('Image').setDriver('image-selector').setLimit(1).default([{
        url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
        path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/header1.png'
      }]);
      
      // Image mobile
      component.config('hero-image__image-mobile').setLabel('Image mobile').setDriver('image-selector').setLimit(1).default([{
        url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
        path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/header-mobile.png'
      }]);

      // Heading text
      component.config('hero-image__heading').setLabel('Heading text').setDriver('text-input').default('Welcome to our store!');

      // Text heading color
      component.config('hero-image__heading-color').setLabel('Text heading color').setDriver('color-input').default('#333');

      // Text heading fontsize
      component.config('hero-image__heading-fontsize').setLabel('Text heading fontsize').setDriver('text-input').default('20');

      // Sub-title text
      component.config('hero-image__subtitle').setLabel('Subtitle text').setDriver('text-input').default('*Starts from $29.99');

      // Sub-title text color
      component.config('hero-image__subtitle-color').setLabel('Subtitle text color').setDriver('color-input').default('#333');

      // Text heading fontsize
      component.config('hero-image__subtitle-fontsize').setLabel('Subtitle text fontsize').setDriver('text-input').default('16');

      // Button text
      component.config('hero-image__button-text').setLabel('Button text').setDriver('text-input').default('Shop now');

      // Button link
      component.config('hero-image__button-link').setLabel('Button link').setDriver('text-input').default('/collections');

    });

    // Register features description component
    block.register('features-description-block', 'Features description', component => {

      // Featured image
      component.config('features-description__image').setLabel('Features description images').setDriver('image-selector').setLimit(3).default([
        {
          url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
          path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/icon1.png'
        },
        {
          url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
          path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/icon2.png'
        },
        {
          url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
          path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/icon3.png'
        },
      ]);;
      
      // Heading 1
      component.config('features-description-heading1').setLabel('Heading text').setDriver('text-input').default('Example of heading text!');

      // Desciption 1
      component.config('features-description-textarea1').setLabel('Description').setDriver('textarea-input').default('Example of text!');

      // Heading 2
      component.config('features-description-heading2').setLabel('Heading text').setDriver('text-input').default('Example of heading text!');

      // Desciption 2
      component.config('features-description-textarea2').setLabel('Description').setDriver('textarea-input').default('Example of text!');

      // Heading 3
      component.config('features-description-heading3').setLabel('Heading text').setDriver('text-input').default('Example of heading text!');

      // Desciption 3
      component.config('features-description-textarea3').setLabel('Description').setDriver('textarea-input').default('Example of text!');

    });

    // Register features images component
    block.register('features-images-block', 'Features images', component => {

      // Background image
      component.config('features-images__image').setLabel('Background image').setDriver('image-selector').setLimit(1).default([{
        url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
        path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/asset-310.png'
      }]);

      // Heading
      component.config('features-images__heading').setLabel('Heading text').setDriver('text-input').default('Example of heading text!');

      // Subtitle
      component.config('features-images__text').setLabel('Subtitle text').setDriver('text-input').default('Example of Subtitle text!');

      // Tag
      component.config('features-images__tag').setLabel('Tag').setDriver('wysiwyg-input').default('tag');

      // Features images
      component.config('features-images__images').setLabel('Images').setDriver('image-selector').setLimit(4).default([
        {
          url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
          path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/body-4.jpg'
        },
        {
          url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
          path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/body-1.jpg'
        },
        {
          url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
          path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/body-3.jpg'
        },
        {
          url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
          path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/body-2.jpg'
        },
      ]);

    });

    // Register featured product component
    block.register('featured-products', 'Featured products', component => {

      // Product collection
      component.config('featured-products__collection').setLabel('Product collection').setDriver('collection-selector').setLimit(1).default([{
        url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
        path: 'themes/default-ecommerce-theme/assets/img/covers/cover-21.jpg'
      }]);

      // Small text
      component.config('featured-products__small-text').setLabel('Small heading text').setDriver('text-input').default('Our products');

      // Heading text
      component.config('featured-products__heading').setLabel('Heading text').setDriver('text-input').default('This is example of heading');

    });

    // Register info component
    block.register('info-block', 'Info with image', component => {

      // Layout
      component.config('info-block__layout').setLabel('Layout').setDriver('select-input').setOptions({
        left: 'Image on the left',
        right: 'Image on the right'
      }).default('right');

      // Background image
      component.config('info-block__background').setLabel('Background image').setDriver('image-selector').setLimit(1).default([{
        url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
        path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/background1-5f32499c53184.png'
      }]);

      // Featured image
      component.config('info-block__image').setLabel('Featured image').setDriver('image-selector').setLimit(1).default([{
        url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
        path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/content-1-1.png'
      }]);

      // Featured image mobile
      component.config('info-block__image-mobile').setLabel('Featured image mobile').setDriver('image-selector').setLimit(1).default([{
        url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
        path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/alarm-mobile.png'
      }]);

      // Title text
      component.config('info-block__title').setLabel('Title text').setDriver('text-input').default('Example of heading text!');

      // Heading text
      component.config('info-block__heading').setLabel('Heading text').setDriver('text-input').default('Example of heading text!');

      // Subtitle text
      component.config('info-block__subtitle').setLabel('Subtitle text').setDriver('wysiwyg-input').default('Example of subtitle text, you can change this text with theme editor...');

    });

    // Register home customer reviews component
    block.register('features-customer-reviews-block', 'Customer reviews', component => {
      
      // Featured image
      component.config('features-customer-reviews__images').setLabel('Featured image').setDriver('image-selector').setLimit(6).default([
        {
          url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
          path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/review1.jpg'
        },
        {
          url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
          path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/review-2.jpg'
        },
        {
          url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
          path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/review-6.jpg'
        },
        {
          url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
          path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/review3.jpg'
        },
        {
          url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
          path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/review-4.jpg'
        },
        {
          url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
          path: 'websites/913f01b6-346e-49ce-8c9f-8d12b46bd427/review-5.jpg'
        },
      ]);

      // Heading text
      component.config('features-customer-reviews__heading').setLabel('Heading text').setDriver('text-input').default('Example of heading text!');

      // Button text
      component.config('features-customer-reviews__button-text').setLabel('Button text').setDriver('text-input').default('Shop now');

      // Button link
      component.config('features-customer-reviews__button-link').setLabel('Button link').setDriver('text-input').default('/collections');

    });

    // Register countdown component
    block.register('countdown-block', 'Countdown', component => {

      // Background image
      component.config('countdown-block__background-image').setLabel('Background image').setDriver('image-selector').setLimit(1).default([{
        url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
        path: 'themes/default-ecommerce-theme/assets/img/products/product-97.jpg'
      }]);

      // TItle
      component.config('countdown-block__heading').setLabel('Heading text').setDriver('text-input').default('Example of heading text!');

      // Date
      component.config('countdown-block__date').setLabel('Select date').setDriver('datetime-input');

      // Button text
      component.config('countdown-block__button-text').setLabel('Button text').setDriver('text-input').default('Shop now');

      // Button link
      component.config('countdown-block__button-link').setLabel('Button link').setDriver('text-input').default('/collections');

    });

    // Set default data
    block.setDefaultData([
      {
        component: 'hero-image'
      },
      {
        component: 'features-description-block'
      },
      {
        component: 'info-block'
      },
      {
        component: 'features-images-block'
      },
      {
        component: 'info-block'
      },
      {
        component: 'features-customer-reviews-block'
      },
    ]);

  });

});