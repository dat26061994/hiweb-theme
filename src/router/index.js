import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import hiwebRouter from 'hiweb-theme-sdk/router';

// Views
import cart from '@/views/Cart';
import collection from '@/views/Collection';
import collections from '@/views/Collections';
import groups from '@/views/Groups';
import group from '@/views/Group';
import home from '@/views/Home';
import page from '@/views/Page';
import pages from '@/views/Pages';
import post from '@/views/Post';
import posts from '@/views/Posts';
import product from '@/views/Product';
import products from '@/views/Products';
import checkout from '@/views/Checkout';
import invoice from '@/views/Invoice';
import successful from '@/views/Successful';
import thankyou from '@/views/Thankyou';
import reviews from '@/views/Reviews';

Vue.use(VueRouter)

const routes = [{
        path: '/groups',
        component: groups,
    },
    {
        path: '/groups/:handle',
        name: 'groups.products',
        component: group,
        props: true,
    },
    {
        path: '/payment/successful',
        name: 'successful',
        component: successful,
        props: true,
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: reviews,
        props: true,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes,
})

// Register routes through hiweb router
hiwebRouter(router).register({
    cart,
    collection,
    collections,
    home,
    page,
    pages,
    post,
    posts,
    product,
    products,
    checkout,
    invoice,
    successful,
    thankyou,
});

export default router