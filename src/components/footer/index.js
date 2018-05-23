import myfooter from './footer'　　//  ./表示當前目錄，header表示header.vue（自動補全後綴）

const Header = {
  install : function(Vue){
    Vue.component('vfooter', myfooter)
  }
}

export default Header