<template>
  <div>
    <p>

• 选择配送方式：快递、邮政EMS；
<br>
• 选择配送时间：工作日、双休日、指定日期、任何时间(春节期间只提供EMS快递服务)。送货地址如果白天没人，请提前告知客服人员，以便通知快递公司安排其他时间送货(注：特别安排可能会超出预计送货天数)，如果有特殊说明的请在"特殊说明"中填写。
<br>

• 选择合适的付款方式：腾讯财付通、支付宝、移动手机支付、微信支付。
<br>
• 付款：根据您的付款方式，向本公司指定帐号支付订单所需款项。
<br>
• 提交订单后，进入配货流程。
<br>
• 客服人员核实完订单后将在1~3小时内完成配货，确认支付货款后，每天分别安排在16:00之前发货，16:00之前的订单统一第二日配送（除特殊节日，会公告安排）
<br>
• 产品具体到达时间请参阅配送方式里的配送时间说明。
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
