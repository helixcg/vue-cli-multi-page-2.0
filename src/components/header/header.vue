<template>
  <div class="header container-fluid" id="asd">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample08">
        <span  class="navbar-text">
          <div class="imgheader"></div>
          <p class="img_title">让生活变得便捷、安全、智能</p>
        </span >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link colora" href="//yujia.ickkey.com" target="_blank" id="colora">系统登录</a>
          </li>
          <li class="nav-item mgf_tips_icons">
            <a class="nav-link  iconfont" title="谢谢关注" href="#" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">&#xe635;</a>
            <img src="../img/wechat-yujia.jpg" width ="130px" height = "130px" class="float_tips_area" />
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import $ from 'jquery';
    export default{
        name: '',
        data(){
            return {}
        },
        methods: {
          menu() {
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (this.scroll>= 1) {
              $("#asd").removeClass("header");
              $("#asd").addClass("headerp");
            }
            if (this.scroll <=0) {
              $("#asd").removeClass("headerp");
              $("#asd").addClass("header");
            }
          }
        },
        mounted() {
          window.addEventListener('scroll', this.menu)
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
.nav-item a{
  color:#fff!important;
  vertical-align: middle;
  display: inline-block;
}
.max-width{
  margin: 0 auto!important;
  color: #fff;
  width: 100%
}
.max-width p{
  color: #fff!important;
}
.allinheader{
}
.img_title{
  color: #fff!important;
  vertical-align: middle;
  display: inline-block;
  line-height:38px;
  font-size: 15px;
  font-weight: 600;
}
.float_tips_area {
    position:absolute;
    background-color: #ffffff;
    border-radius: 5px;
    display:none;
    right:20px;
    right: 3px;
    z-index: 1000;
  }
  .float_tips_area:hover #dropdown08{
    color: #000!important
}
.mgf_tips_icons{
    display:inline-block;
    position: relative;
    padding-left: 5px;
}
.mgf_tips_icons:hover .float_tips_area{
     display:block;
     border: 1px solid #dedede;
}
.header:hover{
  z-index: 1000;
  position: fixed;
  background:#fff!important;
  transition: background-color .24s ease;
}
.header{
  z-index: 1000;
  position: fixed;
  width: 100%;
  background: linear-gradient(#999,transparent)
}
.header:hover .imgheader{
  background: url('../img/2logo.png')!important;
  background-size: cover!important;
  transition: background-color .24s ease;
}
.header:hover .img_title{
  color: #000!important;
}
.header:hover .nav-link{
  color: #000!important;
}
.header:hover #colora{
  color: #000!important;
}
.headerp{
  z-index: 1000;
  position: fixed;
  width: 100%;
  background:#fff!important;
  border-bottom: 1px solid #f9f9f9;
  transition: border-bottom .24s ease;
  transition: background-color .24s ease;
}
 .headerp .imgheader{
    background: url('../img/2logo.png')!important;
    background-size: cover!important;
    transition: background-color .24s ease;
  }
  .headerp .img_title{
    color: #000!important;
  }
  .headerp .nav-link{
    color: #000!important;
  }
  .headerp #colora{
    color: #000!important;
  }
.bg-dark{
  background: transparent!important;
}
.imgheader{
  margin:3.9px 20px;
  height: 30px;
  width: 83px;
  display:inline-block;
  vertical-align: middle;
  color: #fff;
  background:url('../img/logo.png');
  background-size: cover;
}
#colora{
  color: #fff!important;
}
.colora{
  font-size: 15px;
  font-weight: 600;
  color:#fff!important
}
#dropdown08:hover{
  color:#1afa29!important
}
#colora{
    position: relative;
    text-decoration: none;
}
#colora:before{
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 100%;
    background: #4285f4!important;
    transform: scale(0)!important;
    transition: all 0.3s!important;
}
#colora:hover:before{
    transform: scale(1)!important;
}
@media screen and (max-width:760px) {
.navbar, .navbar-expand-lg, .navbar-dark, .bg-dark{
  background: transparent!important;
}
}
.navbar-category{

}
</style>