module.exports = {
    state: {
      activeIndex: 1,
      marginLeft: 300
    }, 
    mutations: {
      SET_ACTIVE_INDEX(state,index){
        state.activeIndex = index;
      },
      SET_CONTENT_MARGINLEFT(state,marginLeft){
        state.marginLeft = marginLeft;
      },
    },
    actions: {
        set_active_index({ commit }, index) {
            commit('SET_ACTIVE_INDEX', index);
        },
        set_content_margin({ commit }, marginLeft) {
            commit('SET_CONTENT_MARGINLEFT', marginLeft);
        },
    }
}