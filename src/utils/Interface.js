import store from '../store';
export const getTheme = ()=>{
    if(localStorage.getItem("theme")){
        store.commit('style/CHANGE_THEME',localStorage.getItem("theme"))
        return localStorage.getItem("theme")
    }
    else{
        store.commit('style/CHANGE_THEME', "theme-default")
        return "theme-default";
    }
}
export const changeTheme = (theme)=>{
    localStorage.setItem("theme",theme);
    store.dispatch('style/changeTheme',theme);
    
}
