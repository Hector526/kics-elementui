<template>
  <div class="user-layout-container">
    <div class="user-layout-content"></div>
    <login-footer></login-footer>
  </div>
</template>

<script>
import loginFooter from "./components/loginFooter";
export default {
  name: "login",
  components: {
    loginFooter
  }
};
</script>

<style lang="less" scoped>
.user-layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  min-width: 768px;
  background: #f0f2f5;
  background-image: url("../../assets/background.svg");
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;

  .user-layout-content {
    padding: 72px 0 24px;
    flex: 1 1;
  }
}
</style>
