<template>
  <div>
    <vheader></vheader>
    <div class="row allbanner" style="margin-right: 0px">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <img src="~components/img/banner.jpg" class="col-md-12">
      </div>
    </div>
    <div class="row cenwenhh " style="margin-right: 0px">
        <p class="col-md-12 text-center">
            <u-animate-container>
            <u-animate name="fadeInUp" delay=".1s" duration=".6s" :iteration="1" :offset="0" animateClass="animated" :begin="false"><h2 class="">用户指南</h2></u-animate>
          </u-animate-container>
        </p>
        <p class="col-md-12 text-center">
            <u-animate-container>
              <u-animate name="fadeInUp" delay=".2s" duration="1s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                <p class="asdq">USER GUIDE</p>
              </u-animate>
            </u-animate-container>
        </p>
    </div>
		<div class="row teseall" style="margin-right: 0px">
        <div class="col-md-1"></div>
        <div class="col-md-2">
          <div class="text-center guiul">
            <ul>
              <li>
                <router-link to='/'  active-class="active">
                  <p>上门安装</p>
                </router-link>
              </li>
              <li>
                <router-link to='/list' active-class="active">
                  <p>退货维修</p>
                </router-link>
              </li>
              <li>
                <router-link to='/list' active-class="active">
                  <p>常见问题</p>
                </router-link>
              </li>
              <li>
                <router-link to='/list' active-class="active">
                  <p>关于我们</p>
                </router-link>
              </li>
              <li>
                <router-link to='/list' active-class="active">
                  <p>联系我们</p>
                </router-link>
              </li>
              <li>
                <router-link to='/list' active-class="active">
                  <p>新闻中心</p>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-8">
        <router-view></router-view>
      </div>
    </div>
    <div style="clear: both"></div>
    <vfooter></vfooter>
  </div>
</template>
<script>
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
    components: {
    vheader:header,vclimg:vlimg,vcenter:center,vfooter:footer,UAnimateContainer,UAnimate
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
.all{
    margin:0 auto;
    width: 1200px;
}
.right{
    float: right;
    width: 800px;
}
.active{
  color: #12965d;
  font-weight: 700
}
.allbanner{
  background-color:#12965d;
  padding-top: 55px;
}
.cenwenhh{
  background-color:#f1f0f338;
  padding-top: 30px;
}
.teseall{
  margin:55px 0;
}
.guiul ul li{
    padding:10px 0;
    background-color: #e5e5e5;
    font-size: 15px;
    font-weight: 100;
    text-decoration: none;
}

</style>
