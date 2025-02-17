<script setup>
import { reactive, ref, computed } from "vue";

</script>

<template>
  <div class="fixed-bottom-bar whiteBackground fixedBottombar">
    <div class="wrapper">
      <div class="logo-bottom">
        <img style="width: 100%;" src="./favicon-128.png" alt="Viblo" />
      </div>
      <div class="content flex-column">
        <div>
          <span style="font-size: 20px;">
            Hãy đăng ký một tài khoản Viblo để nhận được nhiều bài viết thú vị
            hơn.
          </span>
        </div>
        <div class="button">
          <button class="login-button">Đăng nhập</button>
          <a
            href="https://accounts.viblo.asia/register"
            class="register-button"
          >
            Đăng kí
          </a>
        </div>
      </div>
      <div class="icon-close" style="cursor: pointer">
        <!-- <i class="fas fa-x"></i> -->
        <font-awesome-icon icon="fa-solid fa-x" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fixed-bottom-bar {
  position: fixed;
  height: 140px;
  width: 120%;
  bottom: 0;
  left: 0px;
  z-index: 80;
  background-color: #39609e;
  padding: 0.5rem 0;
  box-shadow: 0 -1px 5px 1px rgba(0, 0, 0, 0.15);
}
.whiteBackground {
  background-color: #fff;
  bottom: 0;
}
.fixedBottombar {
  margin-bottom: 0;
}
.fixed-bottom-bar .wrapper {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0px;
  /* margin: 0 auto; */
  height: 100%;
}
.fixed-bottom-bar .wrapper .logo-bottom {
  width: 100px;
  height: 95px;
  margin-left: 180px;
}

.flex-column {
  flex-direction: column;
  gap: 16px;
}

.content {
  font-size: 20px;
  /* margin-right: 35px; */
}

.button {
  display: flex;
  justify-content: space-around;
}

.login-button {
  background-color: #1877f2;
  background: #fff;
  color: #000;
  border: none;
  padding: 0 40px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 17px;
}

.whiteBackground .login-button {
  background-color: #1877f2;
  font-weight: 600;
  font-size: 17px;
  border: #fff;
  color: #fff;
}

.register-button {
  text-align: center;
  max-width: 200px;
  color: #fff;
  background-color: #42b72a;
  font-weight: 600;
  font-size: 17px !important;
}

.register-button {
  padding: 0.5rem 3rem;
  border-radius: 7px;
  font-size: 20px;
}

.icon-close {
  height: 72%;
  margin-left: 85px;
  position: relative;
  z-index: 100;
}


</style>