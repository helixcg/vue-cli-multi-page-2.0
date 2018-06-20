<style scoped>
    @import 'index.less';
</style>
<template>
<div id="app">
    <vheader></vheader>
    <!-- <vclimg></vclimg> -->
    <div style="position: absolute; z-index: 100;width: 100%">
        <div class="row asdcen" style="margin-right: 0px;">
          <div class="col-md-2"></div>
          <div class="centersx col-md-5">
              <div class="ctext_ta">
                  <u-animate-container>
                    <u-animate name="fadeInLeft" delay="2s" duration=".7s" :iteration="1" :offset="0" animateClass="animated" :begin="true"><p class="centers">专为<br>&nbsp&nbsp&nbsp&nbsp公寓/长短租/民宿/客栈/酒店 &nbsp设计</p></u-animate>
                    <u-animate name="fadeInLeft" delay="2.5s" duration=".7s" :iteration="1" :offset="0" animateClass="animated" :begin="true"><p class="centers asd">互联网公寓管理智能门锁系统解决方案</p></u-animate>
                  </u-animate-container>
              </div>
          </div>
          <div class="col-md-5">
              <img src="~components/img/fff.png" width="90%">
          </div>
        </div>
        <div class="row tese" style="margin-right: 0px">
            <p class="col-md-12 text-center" style="margin-top: 50px">
                <u-animate-container>
                <u-animate name="fadeInUpBig" delay="0s" duration=".5s" :iteration="1" :offset="0" animateClass="animated" :begin="false"><p class="">海量门锁 管理很轻松</p></u-animate>
          </u-animate-container>
            </p>
            <p class="col-md-12 text-center">
                <u-animate-container>
                <u-animate name="fadeInUpBig" delay="0s" duration=".5s" :iteration="1" :offset="0" animateClass="animated" :begin="false"><p class="asdq">1个系统，管理100万把锁</p></u-animate>
                  </u-animate-container>
            </p>
            <div style="width: 100%">
                <div class="man-con cf">
                    <u-animate-container>
                        <u-animate name="fadeInUpBig" delay="0s" duration=".4s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                            <dl class="wow fadeInUp animated">
                            <dt class="man-item1 iconfont">&#xe7a3;</dt>
                            <dd>
                             多锁管理
                             <p>海量门锁集中管理<br />方便快捷</p>
                            </dd>
                           </dl>
                        </u-animate>
                      </u-animate-container>
                      <u-animate-container>
                        <u-animate name="fadeInUpBig" delay="0s" duration=".5s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                            <dl class="wow fadeInUp animated">
                            <dt class="man-item1 iconfont">&#xe7a3;</dt>
                            <dd>
                             账户分配
                             <p>多级账户权限分配<br />密码下发</p>
                            </dd>
                           </dl>
                        </u-animate>
                      </u-animate-container>
                      <u-animate-container>
                        <u-animate name="fadeInUpBig" delay="0s" duration=".6s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                            <dl class="wow fadeInUp animated">
                            <dt class="man-item1 iconfont">&#xe7a3;</dt>
                            <dd>
                             智能运维
                            <p>门锁平台智能运维<br />操作流畅</p>
                            </dd>
                           </dl>
                        </u-animate>
                      </u-animate-container>
                      <u-animate-container>
                        <u-animate name="fadeInUpBig" delay="0s" duration=".7s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                            <dl class="wow fadeInUp animated">
                            <dt class="man-item1 iconfont">&#xe7a3;</dt>
                            <dd>
                             无缝接口
                            <p>多项终端随时查看<br />兼容性高</p>
                            </dd>
                           </dl>
                        </u-animate>
                      </u-animate-container>
                  </div>
            </div>
            <div style="width: 100%">
                  <div class="ss-section">
                   <div class="auto-container">
                    <div class="section-title section-title2">
                        <u-animate-container>
                            <u-animate name="fadeInLeft" delay=".1s" duration="1s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                                <p class="wow fadeInUp animated" >房源动态 / 库存信息 / 电池电量 / 网络信号 <br /> 门锁基站信息 / 异常预警 <br />每个房间进行密码 / 权限实时管理</p>
                            </u-animate>
                        </u-animate-container>
                    </div>
                    <div class="ss-right">
                     <div class="img1-wrap img-wrap">
                      <u-animate-container>
                        <u-animate name="fadeInRight" delay=".1s" duration="1s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                            <img src="~components/img/yujia.png" class="ss-img1 wow fadeInDown animated" />
                        </u-animate>
                      </u-animate-container>
                     </div>
                    </div>
                    <div class="clearfix"></div>
                   </div>
                  </div>
            </div>
        </div>
    <div>
        <div class="row cenwenhh tese" style="margin-right: 0px">
            <p class="col-md-12 text-center">
                <u-animate-container>
                <u-animate name="fadeInUpBig" delay=".1s" duration=".6s" :iteration="1" :offset="0" animateClass="animated" :begin="false"><p class="">密码远程发放 查询安全便捷</p></u-animate>
          </u-animate-container>
            </p>
            <p class="col-md-12 text-center">
                <u-animate-container>
                  <u-animate name="fadeInUpBig" delay=".2s" duration="1s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                    <p class="asdq">时效密码  临时密码</p>
                  </u-animate>
                </u-animate-container>
            </p>
        </div>
        <div class="slider-wrap centerv row" style="margin-right: 0px; background: #ccc">
          <div class="slider col-md-8" id="slider" style="padding-right: 0px">
              <section id="section-1" class="section hero is-primary is-fullheight" v-show="showList">
                <div class="containe">
                    <u-animate-container>
                  <u-animate name="fadeInUpBig" delay=".2s" duration="1s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                    <img src="~components/img/php2.png" class="slide" id="slide-0" width="100%">
                  </u-animate>
                </u-animate-container>
                </div>
              </section>
              <section id="section-2" class="section hero is-info is-fullheight" v-show="!showList">
                <div class="containe">
                    <u-animate-container>
                  <u-animate name="fadeInUpBig" delay=".2s" duration="1s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                    <img src="~components/img/php1.png" class="slide" id="slide-0" width="100%">
                  </u-animate>
                  </u-animate-container>
                </div>
              </section>
          </div>
          <nav class="slider-nav col-md-4" style="padding: 0;">
            <div class="my-nav">
              <div href="#home" class="scrollactive-item" v-on:mouseover="home" id="home">
                  <u-animate-container>
                      <u-animate name="fadeInUpBig" delay=".2s" duration="1s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                        <p ><span class="iiu">时效密码 远程发放</span><br>
                        根据房客入住时间自动生成 到期自动失效</p>
                      </u-animate>
                  </u-animate-container>

              </div>
              <div href="#about" class="scrollactive-item" v-on:mouseover="about" id="about">
                <u-animate-container>
                      <u-animate name="fadeInUpBig" delay=".2s" duration="1s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                        <p><span class="iiu">临时密码 安全便捷</span><br>
                        看房、物业、家政临时上门 安全便捷</p>
                      </u-animate>
                  </u-animate-container>
              </div>
            </div>
          </nav>
        </div>
        <div class="row cenwenhh tese" style="margin-right: 0px">
            <p class="col-md-12 text-center">
                <u-animate-container>
                <u-animate name="fadeInUpBig" delay=".1s" duration=".6s" :iteration="1" :offset="0" animateClass="animated" :begin="false"><p class="">适用于绝大多数门体</p></u-animate>
          </u-animate-container>
            </p>
            <p class="col-md-12 text-center">
                <u-animate-container>
                  <u-animate name="fadeInUpBig" delay=".2s" duration="1s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                    <p class="asdq">国标尺寸  适配性高  安装方便</p>
                  </u-animate>
                </u-animate-container>
            </p>
        </div>

        <div class="centerz row" style="margin-right: 0px">
            <div class="col-md-1"></div>
            <div class="col-md-5 hoverimg">
              <a href="../iconfont/list.html" class="imghover">
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
              <a href="../iconfont/list.html" class="imghover">
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
        <div class="centerg row" style="margin-right: 0px;">
                <div class="text-center col-md-12 ">
                    <h2>防盗门适配率＞98%</h2>
                    <u-animate-container>
                      <u-animate name="fadeInLeft" delay=".2s" duration="1s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                        <div style="width: 100%;height: 77px;background: #ccc;position: absolute;opacity: 0.9"></div>
                      </u-animate>
                    </u-animate-container>
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
import vlimg from 'components/vlimg/vlimg'
import center from 'components/center/center'
import footer from 'components/footer/footer'
import {UAnimateContainer, UAnimate} from 'vue-wow'
import animate from 'animate.css'

export default {
   props:{ // 子组件获取 父组件 数据
     sell:{
      type:Object // 传递的类型
     },
     components: {
        UAnimateContainer,
        UAnimate
      }
   },
  data() {
        return{
            showList:true
        }
  },
  components: {
    vheader:header,vclimg:vlimg,vcenter:center,vfooter:footer,
  },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){

  },
  //在挂载开始之前被调用
  beforeMount(){

  },
  //已成功挂载，相当ready()
  mounted(){

  },
  //相关操作事件
  methods: {
    home: function(){
        this.showList=true;
    },
    about: function(){
        this.showList=false;
    },
  }
}
</script>

<style lang="less" scoped>
@import '~bootstrap/dist/css/bootstrap.min.css';
</style>
