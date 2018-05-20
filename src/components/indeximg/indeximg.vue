<template>
  <div class="vimg">
  <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background: #ccc">
          <img src="../img/20180504锁.png">
          <p class="ani" data-swiper-animation="fadeIn" data-duration=".5s" data-delay="1s" style="position: absolute;top: 50%;left: 50%">Animation
          </p>
        </div>
        <div class="swiper-slide" style="background:rgba(235,213,161,0.4);">
          <img src="../img/20180512锁.png">
        </div>
        <div class="swiper-slide">
          <img src="../img/20180501.png">
        </div>
        <div class="swiper-slide">
          <img src="../img/20180501.png">
        </div>
        <div class="swiper-slide">
          <img src="../img/20180501.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"
import SwiperAnimation from 'swiper-animation';
import "swiper/dist/css/swiper.min.css"
    export default{
        name: '',
        props: {
          swipeid: {
            type: String,
            default: ""
          },
          effect: {
            type: String,
            default: "slide"
          },
          loop: {
            type: Boolean,
            default: false
          },
          direction: {
            type: String,
            default: "horizontal"
          },
          pagination: {
            type: Boolean,
            default: true
          },
          paginationType: {
            type: String,
            default: "bullets"
          },
          autoPlay: {
            type: Number,
            default: 3000
          }
        },
        data(){
            return {}
        },
        mounted(){
        let swiperAnimation = new SwiperAnimation();
        var swiper = new Swiper('.swiper-container', {
          on: {
            init: () => swiperAnimation.init(swiper).animate(),
            slideChange: () => swiperAnimation.init(swiper).animate()
          },
          preloadImages: false,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
          },
          fadeEffect: {
            crossFade: true
          },
        });
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
 .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-wrapper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        position:relative;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
        display: -webkit-box;
        // display: -ms-flexbox;
        // display: -webkit-flex;
        // display: flex;
        // -webkit-box-pack: center;
        // -ms-flex-pack: center;
        // -webkit-justify-content: center;
        // justify-content: center;
        // -webkit-box-align: center;
        // -ms-flex-align: center;
        // -webkit-align-items: center;
        // align-items: center;
        img {
            width: 50%;
            height: 50%;
        }
        .imgp{
            position: absolute;
            top: 50%;
            left: 50%;
        }
    }
}
.vimg{
position: relative;
top: -60px;
z-index: 1;
}
.swiper-lazy-preloader-white{
  background-image: linear-gradient(top,#5d7385,#8da0b0);
  background-image: -webkit-linear-gradient(top,#5d7385,#8da0b0);
  background-image: -o-linear-gradient(top,#5d7385,#8da0b0);
  background-image: -ms-linear-gradient(top,#5d7385,#8da0b0);
  background-image: -moz-linear-gradient(top,#5d7385,#8da0b0)
}
</style>