<template>
  <div>
    <p>
• 配送流程
客服人员核实完订单后将在1~3小时内完成配货，确认支付货款后，每天分别安排在16:00之前发货，16:00之前的订单统一第二日配送（除特殊节日，会公告安排）
<br>
• 配送方式
我们目前支持ems,顺丰等快递，
<br>
• 配送注意事项
送货上门：快递员送货上门时，请您务必当面对照发货单核对商品，如果出现商品数量缺少、商品破损，请您当场办理。
<br>
如果您的订单使用帐户余额或礼券支付，只有退货商品的金额小于实际应付款金额时才可办理。
<br>
邮局邮寄订单：请您在领取包裹时务必检查外包装，如果发现包裹破损，请您不要签收，随后请及时将包裹单原件邮寄。
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
