const state = {
    theme: 'theme-default',
    themeBoxWidth: null,

}
const mutations = {
    CHANGE_THEME_BOX_WIDTH: (state, width) => {
        state.themeBoxWidth = width;
    },
    CHANGE_THEME: (state, color) => {
        state.theme = color;
    },
    

}
const actions = {
    changeTheme: ({ commit },  color) => {
        commit('CHANGE_THEME', color)
    }

}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}