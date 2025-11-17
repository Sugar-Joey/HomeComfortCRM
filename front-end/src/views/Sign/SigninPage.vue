<template>
  <div class="login-page">
    <!-- Header -->
    <header class="header">
      <!-- 左侧 logo -->
      <div class="fixed-menu" @click="goHome">
        <svg-icon name="logo" width="42px" color="#fff" />
        <div class="logo-text">
          <div class="top-text">
            <span class="home">Home</span>
            <span class="comfort">Comfort</span>
          </div>
          <div class="bottom-text">
            <span class="crm">CRM</span>
            <span class="system">SYSTEM</span>
          </div>
        </div>
      </div>

      <!-- 右侧链接 -->
      <div class="header-links">
        <span>Help</span>
        <span>Terms</span>
        <span>Privacy</span>
      </div>
    </header>

    <!-- 内容区域 -->
    <div class="content">
      <!-- 左侧标语 -->
      <div class="left-side">
        <h1 class="slogan">智享家居舒适，一键掌控无忧</h1>
        <p class="description">
          Home Comfort CRM
          专为家居舒适服务领域打造，覆盖设备全生命周期管理与客户精细化运营闭环。整合实时监控、故障预警、服务调度等核心功能，适配暖通、智能家居等多场景，依托数据能力提升服务响应
          30% 以上，搭建全渠道交互入口，助力企业降本增效，为用户提供省心安心的舒适体验。
        </p>
      </div>

      <!-- 右侧登录框 -->
      <div class="login-box">
        <!-- Logo -->
        <div class="login-logo">
          <svg-icon name="logo" width="42px" color="#000" />
          <div class="logo-text">
            <div class="top-text">
              <span class="home">Home</span>
              <span class="comfort">Comfort</span>
            </div>
            <div class="bottom-text">
              <span class="crm">CRM</span>
              <span class="system">SYSTEM</span>
            </div>
          </div>
        </div>

        <!-- 标题和描述 -->
        <h2 class="login-title">Sign in to HC-CRM</h2>
        <p class="login-desc">using your HC-CRM account</p>

        <!-- 输入框 -->
        <div class="input-group">
          <input type="text" placeholder="Username" />
          <p class="input-error">Sorry, we don’t recognize this email.</p>
        </div>

        <!-- 按钮 Next -->
        <button class="btn-next">Next</button>

        <!-- Stay signed in -->
        <div class="checkbox-group">
          <input type="checkbox" id="staySigned" />
          <label for="staySigned">Stay signed in</label>
        </div>

        <!-- 按钮 Create an account -->
        <button class="btn-create">Create an account</button>

        <div class="or-text">or</div>

        <!-- 按钮 Sign in with Google -->
        <button class="btn-google" @click="googleLogin">Sign in with Google</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const goHome = () => {
  console.log('Go Home')
}
const googleLogin = () => {
  window.location.href = 'http://localhost:8080/oauth2/authorization/google'
}
</script>

<style lang="scss" scoped>
.login-page {
  // font-family: 'Inter', sans-serif;
  color: #000;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    height: 60px;
    background-color: #141414;
    height: 60px;

    .fixed-menu {
      display: flex;
      align-items: center;
      height: 60px;
      cursor: pointer;
      .logo-text {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        .top-text {
          display: flex;
          gap: 5px;
          .home {
            color: #fff;
            font-size: 18px;
          }
          .comfort {
            color: #ff8a00;
            font-size: 18px;
          }
        }
        .bottom-text {
          display: flex;
          gap: 3px;
          margin-top: 2px;
          .crm,
          .system {
            color: #979797;
            font-size: 12px;
          }
        }
      }
    }

    .header-links {
      display: flex;
      gap: 30px;
      width: 200px;
      font-size: 16px;
      font-weight: 400;
      color: #ff8a00;
    }
  }

  .content {
    display: flex;
    flex: 1;
    padding: 60px 80px; // 避开 header
    justify-content: space-between;

    .left-side {
      max-width: 61%;
      margin-top: 100px;
      .slogan {
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 66px;
        color: #fff;
      }
      .description {
        font-weight: 400;
        font-size: 24px;
        color: #fff;
        line-height: 1.5;
      }
    }

    .login-box {
      width: 350px;
      height: 580px;
      background-color: #fff;
      border-radius: 30px;
      padding: 30px 40px;
      box-shadow: 0 0 100px 3px rgba(255, 255, 255, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;

      .login-logo {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .logo-text {
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          .top-text {
            display: flex;
            gap: 5px;
            .home {
              color: #000;
              font-size: 18px;
            }
            .comfort {
              color: #ff8a00;
              font-size: 18px;
            }
          }
          .bottom-text {
            display: flex;
            gap: 3px;
            .crm,
            .system {
              color: #979797;
              font-size: 12px;
            }
          }
        }
      }

      .login-title {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 8px;
      }

      .login-desc {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 24px;
      }

      .input-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 12px;
        input {
          border: none;
          border-bottom: 1px solid #b9bdc5;
          padding: 10px 0;
          font-size: 16px;
          color: #000;
          &::placeholder {
            color: #b9bdc5;
            font-weight: 400;
          }
        }
        .input-error {
          color: #d30d2e;
          font-size: 12px;
          margin-top: 4px;
        }
      }

      .btn-next {
        width: 300px;
        height: 48px;
        border-radius: 24px;
        border: 1px solid #b0b9c1;
        background-color: #ff8a00;
        color: #fff;
        font-size: 16px;
        margin-bottom: 16px;
        cursor: pointer;
      }

      .checkbox-group {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        input[type='checkbox'] {
          width: 20px;
          height: 20px;
          border: 1px solid #b0b9c1;
          margin-right: 8px;
        }
        label {
          font-size: 16px;
          font-weight: 400;
        }
      }

      .btn-create {
        width: 300px;
        height: 48px;
        border-radius: 24px;
        border: 1px solid #ff8a00;
        background-color: #fff;
        color: #ff8a00;
        font-size: 16px;
        margin-bottom: 16px;
        cursor: pointer;
      }

      .or-text {
        font-size: 16px;
        margin-bottom: 16px;
      }

      .btn-google {
        width: 300px;
        height: 48px;
        border-radius: 24px;
        border: 1px solid #b0b9c1;
        background-color: #fff;
        color: #000;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}
</style>
