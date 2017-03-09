import Vue from 'vue'

import 'minireset.css/minireset.min.css' //清除浏览器默认样式

// element-ui
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css' //默认主题
import '../theme/index.css' //定制主题 https://elementui.github.io/theme-preview/#/zh-CN
Vue.use(ElementUI);

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// router
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// vuex
import Vuex from 'vuex';
Vue.use(Vuex);


// root component
import App from './App.vue'

//vuex store
import store from './store/';

import routes from './router/index'
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

//页面顶部进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

router.beforeEach((to, from, next) => {
  // window.scroll(0, 0);
  
  // // 可做登录与权限判断
  // if (!store.state.userInfo.userId && to.path !== '/login') {
  //   // store.dispatch('remove_userinfo');
  //   next('/login');
  // } else {
  //   if (store.state.userInfo.userId && to.path === '/login') {
  //     next({
  //       path: '/'
  //     });
  //   } else {
      NProgress.start();
      next();
  //   }
  // }
})

router.afterEach(transition => {
  NProgress.done();
});

/* eslint-disable no-new */
const app = new Vue({
	el: '#app',
	components: {
		App
	},
  router: router,
  store
});