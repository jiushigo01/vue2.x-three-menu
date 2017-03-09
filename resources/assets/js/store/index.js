import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const leftmenu = require('./leftmenu/');

export default new Vuex.Store({
    modules: {
      leftmenu,
    }
});