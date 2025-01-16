const state = {
    scroll: '',
};
const getters = {
    getScrollValue: (state) => {
        return state.scroll;
    },
};
const mutations = {
   
    SET_SCROLL_POSITION: (state, payload) => {
        // console.log('check')
        state.scroll = payload;
    },
};
const actions = {
    // moveToNext: ({commit}, payload ) => {
       
    //         commit("SET_SCROLL", payload);
    // },
   
};
export default {
    state,
    getters,
    mutations,
    actions,
};