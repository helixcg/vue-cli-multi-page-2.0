<style scoped>
    @import 'index.less';
</style>
<template>
<div id="app">
	<vheader></vheader>
	<vimg></vimg>
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
    	<div class="centerc row" style="margin-right: 0px;">
			<div class="col-md-12" style="padding-right: 0px;">
				<img src="~components/img/center6.png" width="100%" >
			</div>
    	</div>
    	<div class="centerv row" style="margin-right: 0px;">
			<div class="col-md-4">
				<img src="~components/img/123.png" class="col-md-6">
			</div>
			<div class="col-md-8" style="padding-right: 0px">
				<div class="asdtext">
					<h1>誉嘉智能锁管理平台允许您查看、管理您的用户与锁, 实现无间隙的观察与安全性。</h1>
					<h3><a href="">了解管理平台</a></h3>
				</div>
			</div>
    	</div>
	</div>
	<vfooter></vfooter>
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
