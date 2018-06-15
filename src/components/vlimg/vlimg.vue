<template>
  <div class="vclimg">
    <div class="center centerback">
            <p>123</p>
            <img src="~components/img/fff.png" width="33%" style="float: right;margin-right: 10%">
            <div class="clearfix"></div>
            <template>
              <u-animate-container>
                <u-animate
                  name="fadeIn"
                  delay="0s"
                  duration="1s"
                  :iteration="1"
                  :offset="0"
                  animateClass="animated"
                  :begin="false"
                >
                  测试
                </u-animate>
              </u-animate-container>
            </template>
    </div>
  </div>
</template>

<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'

    export default{
        name: '',
        props: {
        },
        components: {
          UAnimateContainer,
          UAnimate
        },
        data(){
            return {}
        },

        mounted(){

      },
    }
</script>
<style lang="less">
@font-face {
  font-family: 'iconfont';  /* project id 426128 */
  src: url('//at.alicdn.com/t/font_426128_lrrtp3gawhw4gqfr.eot');
  src: url('//at.alicdn.com/t/font_426128_lrrtp3gawhw4gqfr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_426128_lrrtp3gawhw4gqfr.woff') format('woff'),
  url('//at.alicdn.com/t/font_426128_lrrtp3gawhw4gqfr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_426128_lrrtp3gawhw4gqfr.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
*{
  margin:0;
  padding:0;
}
.nav-title{
   font-family: 'Abril Fatface', cursive;
}
.navbar-header .nav-title:hover,
.navbar-header .nav-title:focus{
  background:#fff;
  color:#000;
}

.cative{
  font-family:'Comfortaa', cursive;
}
.navbar-collapse .navbar-nav li a:hover,
.navbar-collapse .navbar-nav li a:focus{
  color:#000;
  background:#fff;
}
.navbar-collapse .navbar-nav li a:hover, .navbar-collapse .navbar-nav li a:focus{
background:transparent;
color: #fff!important;
}
.nav-item{

}
.nav-item a{
  color:#e7e5e5!important;
}
.ani{
  position: absolute;
  top: 50%;
  left:50%;
}

</style>