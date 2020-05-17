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
      <div class="user-login-style-main">
        <div class="user-login-container">
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            class="login-form"
            autocomplete="on"
            label-position="left"
          >
            <div class="title-container">
              <h3 class="title">Login Form</h3>
            </div>

            <!-- <el-form-item prop="username">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="Username"
              name="username"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
          </el-form-item>

          <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
            <el-form-item prop="password">
              <span class="svg-container">
                <svg-icon icon-class="password" />
              </span>
              <el-input
                :key="passwordType"
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                placeholder="Password"
                name="password"
                tabindex="2"
                autocomplete="on"
                @keyup.native="checkCapslock"
                @blur="capsTooltip = false"
                @keyup.enter.native="handleLogin"
              />
              <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-form-item>
          </el-tooltip>

          <el-button
            :loading="loading"
            type="primary"
            style="width:100%;margin-bottom:30px;"
            @click.native.prevent="handleLogin"
            >Login</el-button>-->
          </el-form>
        </div>
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

    .user-login-style-main {
      width: 368px;
      margin: 0 auto;

      .user-login-container {
        min-height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
