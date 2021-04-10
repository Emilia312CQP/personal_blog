const getters = {
    uname: state => state.user.uname,
    token: state => state.user.token,
    themeBoxWidth: state => state.style.themeBoxWidth,
    theme: state => state.style.theme,
}
export default getters;