import myHeader from './header'　　//  ./表示當前目錄，header表示header.vue（自動補全後綴）

const Header = {
  install : function(Vue){
    Vue.component('vheader', myHeader)
  }
}

export default Header