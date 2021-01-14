import themeConfig from 'hiweb-theme-sdk/config';

themeConfig.section('Product page', 'product', section => {

    // Register block
    section.block('product', 'Product block', block => {

        // Register a component
        block.register('landing-page-block', 'Landing page ', component => {

            // Product collection
            component.config('landing-page__collections').setLabel('Product collection').setDriver('collection-selector');

            // Landing page selector
            component.config('landing-page__landing').setLabel('Landing type').setDriver('select-input').setOptions({
                landing1: 'Landing1',
                landing2: 'Landing2',
            }).default('landing1');

            // Landing page selector
            component.config('landing-page__check-ip').setLabel('Check ip').setDriver('select-input').setOptions({
                check: 'Check',
                uncheck: 'Uncheck',
            }).default('check');

            // Customer reviews
            component.config('landing-page__customer-reviews').setLabel('Customer reviews').setDriver('textarea-input');

            // Landing page parameter
            component.config('landing-page__parameter').setLabel('Parameter').setDriver('text-input').default('wtb');

            // QA text
            component.config('landing-pages__faqs').setLabel('Questions and Answers').setDriver('wysiwyg-input');

        });

    });


});