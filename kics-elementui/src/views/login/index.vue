<template>
  <div class="user-layout-container">
    <div class="user-layout-content">
      <div class="user-layout-top">
        <div class="user-layout-header">
            <img alt="logo" class="user-layout-logo" src="../../assets/antpro-logo.svg" />
            <span class="user-layout-title">智能会议系统</span>
        </div>
        <div class="user-layout-desc">Kedacom Intelligent Conference System 是智能会议系统管理平台</div>
      </div>
    </div>
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

    .user-layout-top {
      text-align: center;

      .user-layout-header {
        height: 44px;
        line-height: 44px;

        img {
          border-style: none;
        }
        .user-layout-logo {
          height: 44px;
          margin-right: 16px;
          vertical-align: top;
        }

        .user-layout-title {
          position: relative;
          top: 2px;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 600;
          font-size: 33px;
          font-family: Avenir, helvetica neue, Arial, Helvetica, sans-serif;
        }
      }

      .user-layout-desc {
        margin-top: 12px;
        margin-bottom: 40px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
    }
  }
}
</style>
