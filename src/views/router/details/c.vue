<template>
  <div>
    <strong>
      北京永恒世家科技有限公司

     联系人：黄先生   010-68885750
     <br>
      <br>
      地址：北京市昌平区龙域北街10号院1号楼(龙域东一路旁)创集合405
      <br>
     <br> 全国服务热线 400-061-3581
    </strong>
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
