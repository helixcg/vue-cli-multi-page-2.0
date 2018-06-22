<style scoped>
    @import 'index.less';
</style>
<template>
<div id="app">
	<vheader></vheader>
	<vimg></vimg>
	<div style="position: absolute; z-index: 100;top: 800px;width: 100%">
		<vcenter></vcenter>
    <div>
    	<div class="centerb row" style="margin-right: 0px;">
			<div class="col-md-7">
				<div class="asdtext">
					<h1>誉嘉智能锁管理平台允许您查看、管理您的用户与锁, 实现无间隙的观察与安全性。</h1>
					<h3><a href="">了解管理平台</a></h3>
				</div>
			</div>
			<div class="col-md-5" style="padding-right: 0px">
				<img src="~components/img/4567.png">
			</div>
    	</div>
    	<div class="centerv row" style="margin-right: 0px; background: #ccc">
    		<div class="col-md-5">
				<img src="~components/img/20180507锁.png" class="col-md-12">
			</div>
			<div class="col-md-6" style="padding-right: 0px">
				<div class="asdtext">
					<h1>誉嘉锁<br>采用优质材料和耐用设计, 我们的智能锁定解决方案的范围将使您的团队、构建和资产安全.</h1>
				</div>
			</div>
    	</div>
    	<div class="centerv row" style="margin-right: 0px;">
			<div class="col-md-8" style="padding-right: 0px">
				<div class="asdtext">
					<h1>誉嘉智能锁管理平台允许您查看、管理您的用户与锁, 实现无间隙的观察与安全性。</h1>
					<h3><a href="">了解管理平台</a></h3>
				</div>
			</div>
			<div class="col-md-3">
				<img src="~components/img/123.png" class="col-md-8">
			</div>
    	</div>
    	<div class="centerz row" style="margin-right: 0px">
        <div class="col-md-1"></div>
        <div class="col-md-5 hoverimg">
          <a href="../detail/list.html" class="imghover">
            <div class="imgall col-md-12">
              <div class="imghead">
                <img src="~components/img/logo.png" class="img-fluid" >
                <p class="colq">123</p>
              </div>
              <img src="~components/img/20180508锁.png" width="100%" class="ash col-md-9">
            </div>
          </a>
        </div>
        <div class="col-md-5 hoverimg">
          <a href="../detail/list.html" class="imghover">
            <div class="imgall col-md-12">
              <div class="imghead">
                <img src="~components/img/logo.png" class="img-fluid">
                <p class="colq">123</p>
              </div>
              <img src="~components/img/20180508锁.png" width="100%" class="ash col-md-9">
            </div>
          </a>
        </div>
    	</div>
	</div>
  <cell title="多页面路由" value="" is-link link="../router/details.html"></cell>
	<vfooter></vfooter>
	</div>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import Lib from 'assets/js/Lib';
import header from 'components/header/header';
import indeximg from 'components/indeximg/indeximg'
import center from 'components/center/center'
import footer from 'components/footer/footer'
import Swiper from 'swiper';

export default {
   props:{ // 子组件获取 父组件 数据
	 sell:{
	  type:Object // 传递的类型
	 }
   },
  data() {
    return {
    	webname:5464,
		'list':[{
			'id':0,
			'name':'alert弹窗',
			'url':'../vuxDemo/alert.html'
		},{
			'id':1,
			'name':'Calendar时间选择',
			'url':'../vuxDemo/calendar.html'
		},{
			'id':2,
			'name':'button按钮',
			'url':'../vuxDemo/button.html'
		}]
    }
  },
  components: {
	vheader:header,vimg:indeximg,vcenter:center,vfooter:footer,
  },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){

  },
  //在挂载开始之前被调用
  beforeMount(){

  },
  //已成功挂载，相当ready()
  mounted(){
  	var swiper = new Swiper('.swiper-container', {
      // Enable lazy loading
      lazy: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
  //相关操作事件
  methods: {

  }
}
</script>

<style lang="less" scoped>
@import '~bootstrap/dist/css/bootstrap.min.css';
</style>
