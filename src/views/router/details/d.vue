<template>
  <div>  <msg title="路由切换demo" description="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现" icon="success">
  	<div  slot='buttons'>

  	<router-link to='/list'>
  		<x-button type="primary">路由切换</x-button>
  	</router-link>

  	<div style="margin-top: 15px;">
  		<a href="../home/list.html">
  			 <x-button>返回demo列表页</x-button>
  		</a>
  	</div>
  	</div>
  </msg>
  </div>
</template>

<script>

import { Msg, Divider, XButton } from 'vux'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import Lib from 'assets/js/Lib';
import header from 'components/header/header';
import vlimg from 'components/vlimg/vlimg'
import center from 'components/center/center'
import footer from 'components/footer/footer'
import {UAnimateContainer, UAnimate} from 'vue-wow'
import animate from 'animate.css'
import HbHead from 'components/HbHead';

export default {
  name: 'add',
  components: {
    HbHead,Msg, Divider, XButton,vheader:header,vclimg:vlimg,vcenter:center,vfooter:footer,
  },
  data () {
    return {

    }
  },
  methods: {


  }
}
</script>

<style lang="less">

</style>
