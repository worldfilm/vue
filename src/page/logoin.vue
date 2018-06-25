<template>
<div class="logoin">
  <div class="login-modal-content-box" >
    <div class="login-modal-form-box">
      <div class="form-box-item-box">
        <div class="logo-box" >
          <img src="http://play.qqmao.cn/m/./caipiaotupian/user.svg" alt="">
        </div>
        <div class="input-box" style="width: 305px;">
          <input type="text" placeholder="请输入用户名" value="" >
          <div class="color-line" style="width: 0px;">
          </div>
        </div>
      </div>
      <div class="form-box-item-box">
        <div class="logo-box" >
          <img src="http://play.qqmao.cn/m/./caipiaotupian/login-pwd-logo.svg" alt="">
        </div>
        <div class="input-box" >
          <input type="password" placeholder="请输入用户密码" value="">
          <img src="http://play.qqmao.cn/m/./caipiaotupian/isShowPwd_logo.svg" class="isShowPwd_logo" alt="">
          <div class="color-line" >
          </div>
        </div>
      </div>
      <div class="form-box-item-box">
        <div class="logo-box" style="width: 70px;">
          <img src="http://play.qqmao.cn/m/./caipiaotupian/test-code.svg" alt="">
        </div>
        <div class="input-box" >
          <input type="text" placeholder="请输入验证码" value="">
          <img class="isShowCode_img" src="data:image/png;" alt="">
          <div class="color-line" >
          </div>
        </div>
      </div>
    </div>
    <div class="large-button-out-box" >
      <div class="large-button-box" >
        <span>登录</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
