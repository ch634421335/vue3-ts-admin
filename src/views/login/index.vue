<template>
<div class="login app-main">
  <div class="login-bg">
    <div class="content">
      <div class="table"></div>
      <div class="form"></div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
</script>
<style scoped lang="less">
.login{
  position: relative;
  width: 100%;
  height: 100%;
  .login-bg{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin-left: -48%;
      background-image: url('../../assets/image/svg/login-bg.svg');
      background-position: 100%;
      background-repeat: no-repeat;
      background-size: auto 100%;
      content: "";
    }
    .content{
      z-index: 100;
      width: 75%;
      height: 75%;
      border: 2px solid black;
      display: flex;
      .table{
        width: 50%;
        height: 100%;
        background-image: url("../../assets/image/svg/login-box-bg.svg");
        background-size: auto 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
      .form{
        width: 50%;
        height: 100%;
        border: 1px solid red;
      }
    }
  }
}
</style>
