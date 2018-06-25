<template>
  <div>
    <p>
      作为国内起步较早专注于互联网智能锁的科技型公司，北京永恒世家科技有限公司旗下品牌誉嘉以“让居住更安全、更便捷”为企业使命，凭借产品的高科技与适用性，广泛用于集中/分散类公寓运营商、长/短租房东、房屋租售平台商、酒店以及家庭住户,并通过自身的不断创新，加速推进商旅住宿及智能家居的发展与变革。 誉嘉在全国拥有研发与服务团队近200人，其中40%以上为研发人员，来自华为、百度、中科院等500强企业及国内一流技术研发机构。誉嘉互联网智能锁“商用类“与”家用类“产品所提供的房屋门锁全套解决方案，为房屋管理者提供安心、高效的房屋管理服务；让家庭用户居住更加安全、便捷。誉嘉自有的品控团队，已涵盖北上广深、三亚、杭州等数十个省会及旅游城市，为用户提供7×24小时快捷满意的服务。
    </p>
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
