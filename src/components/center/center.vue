<template>
  <div class="center centerback">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark businessInfoSec">
      <div class="col-xs-12 col-md-3  businessInfoRow">
        <img src="../img/logo1.png">
        <h2>基于云的安全</h2>
        <h3>系统安全地管理您的锁和用户, 通过web与微信连接我们强大的锁。</h3>
      </div>
      <div class="col-xs-12 col-md-3 businessInfoRow">
        <img src="../img/logo22.png">
        <h2>移动访问</h2>
        <h3>使用您的手机web或微信方便地解锁和下发密码。</h3>
      </div>
      <div class="col-xs-12 col-md-3 businessInfoRow">
        <img src="../img/logo3.png">
        <h2>密钥管理</h2>
        <h3>立即授予对个人或组的自定义访问权限。</h3>
      </div>
      <div class="col-xs-12 col-md-3 businessInfoRow">
        <img src="../img/logo5.png">
        <h2>远程共享</h2>
        <h3>快速共享来自第三方访问，智能锁可以提高安全性和简化业务管理。</h3>
      </div>
    </nav>
  </div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {}
        }
    }
</script>
<style scoped>
*{
  margin:0;
  padding:0;
}
@media screen and (max-width:760px) {
.navbar, .navbar-expand-lg, .navbar-dark, .bg-dark{
  background: transparent!important;
}

}
.centerback{
  background: url(../img/infoSecBackground.png);
  margin-top:-60px;
}
@media only screen and (min-width: 1100px){
  .businessInfoSec img {
    display: block;
    float: left;
    height: 150px;
    padding-right: 10px;
  }
  .businessInfoSec{
    padding: 120px 0 100px 0;
  }
  .businessInfoRow{
    padding:0 20px;
  }
    .businessInfoSec .businessInfoRow h2 {
    text-align: left;
    color: #FFF;
    font-size: 1.75em;
    margin-bottom: -10px;
    font-family: Roboto, sans-serif;
    line-height: 40px;
}
    .businessInfoSec .businessInfoRow h3 {
    text-align: left;
    color: #FFF;
    margin-top: 20px;
    line-height: 0px;
    padding-top: 10px;
    font-size: 1em;
    line-height:1.4;
    padding: 2px;
    font: inherit;
    vertical-align: baseline;
}
}
img{
    vertical-align: middle;
}
</style>