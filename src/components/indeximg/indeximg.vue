<template>
  <div class="vimg" style="position:fixed;top: 0px;width: 100%">
  <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background: #ccc">
          <img src="../img/20180521锁.png">
          <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">誉嘉，生活智能化</p>
        </div>
        <div class="swiper-slide" style="background:rgba(235,213,161,0.4);">
          <img src="../img/20180523.png">
          <p class="ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">誉嘉，生活智能化
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"
import SwiperAnimation from 'swiper-animation';
import "swiper/dist/css/swiper.min.css";
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
          require('swiper-animate-cn/animate.min.css')
        var swiperAnimation = new SwiperAnimation();
        var swiperAnimateCache = require('swiper-animate-cn').swiperAnimateCache;
        var swiperAnimate = require('swiper-animate-cn').swiperAnimate;
        var clearSwiperAnimate = require('swiper-animate-cn').clearSwiperAnimate;
        var swiper = new Swiper('.swiper-container', {
           onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
              swiperAnimateCache(swiper); //隐藏动画元素
              swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function(swiper){
              swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            },
            loop : true,
            autoplay : 4000,
            speed:300,
            observer: true,
            observeParents: true,
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
.ani{
  position: absolute;
  top: 50%;
  left:50%;
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
            width: 100%;
            height: 100%;
        }
        p{
          font-size: 2rem;
          text-align: center;
          font-weight: 700;
          color: #fff;
        }
        .asdf{
          margin: 45px auto 0;
          font-size: 1rem;
          line-height: 26px;
          text-align: center;
          position: absolute;top: 50%;
          left: 50%;
          color: #fff;
        }
    }
}
</style>