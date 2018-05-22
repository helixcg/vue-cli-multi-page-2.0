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

		<group>
			<cell v-for="el in list" :key="el.id" :title="el.name" value="" is-link :link="el.url"></cell>
		</group>
		<div class="note">
			<p>这里仅展示几个VUE UI的demo，更多组件demo请访问vux UI官网，官网地址：
				<a href="https://vux.li" target="_blank">https://vux.li</a>
			</p>
		</div>
	</div>
	<div>
		<divider>多页面 vue-router 2</divider>
	    <group>
			<cell title="多页面路由" value="" is-link link="../router/details.html"></cell>
		</group>
	</div>

	<div class="martop15">
	<divider>iconfont 字体</divider>
    <group>
		<cell title="iconfont图标展示" value="" is-link link="../iconfont/list.html"></cell>
	</group>
	</div>

	<div class="martop15">
	<divider>其他</divider>
    <group>
		<cell title="自定义vue全局过滤器" value="" is-link link="../tools/vuefilter.html"></cell>
		<cell title="模块下放静态文件" value="" is-link link="../tools/bigimage.html"></cell>
		<cell title="ajax" value="" is-link link="../tools/ajax.html"></cell>
		<cell title="获取url参数" value="" is-link link="../tools/getQuery.html?goodsid=1688&shopid=25"></cell>
	</group>
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
import { Cell,Group,Divider } from 'vux'
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
	Cell,Group,Divider,vheader:header,vimg:indeximg,vcenter:center,
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
.note{
	color:#666;
	padding:10px;
	font-size:12px;
}
.note p{
	line-height:25px;
}

.weui-cells{
font-size: 14px!important;
}

/*
 * less 展示
 */
.lessTest{
	.listbox{
		border-radius: 10px;
		font-size: 14px;
	}
	.boxcontent{
		padding: 15px;
	}
}
.centerb{
	background: #fff;
	padding-top:4rem;
	padding-bottom: 2rem;
}
.centerb img{
	float: right;
}
.centerb h1{
	padding-left:60px;
	padding-top: 90px;
	font-family:'Microsoft Yahei'!important;
	font-weight: 100!important;
}
.centerv{
	padding-top:1rem;
}
.centerv img{
	float: right;
}
.centerv h1{
	padding-left:60px;
	padding-top: 90px;
	font-family:'Microsoft Yahei'!important;
	font-weight: 100!important;
}
.centerv{
	background: #fafafa;
	img{

	}
}
.asdtext{
	a{
		display: inline-block;
		padding-left:60px;
		padding-top: 20px;
		color: blue;
		font-family: 'Microsoft Yahei'!important;
		font-weight: 100!important
	}
}
@import '~bootstrap/dist/css/bootstrap.min.css';
</style>
