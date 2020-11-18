<template>
  <a-layout>
    <a-layout-header></a-layout-header>
    <a-layout-content>
      <a-row>
        <a-col :span="6" :offset="9">
          <a-form :rules="rules" :model="form" ref="loginForm">
            <a-row class="login-title">
              <a-col :span="24">
                <h2><img src="../assets/logo.png" alt="" />Manage System</h2>
                <span>Ant Design 是西湖区最具影响力的 Web 设计规范</span>
              </a-col>
            </a-row>

            <a-row class="login-form">
              <a-col :span="24">
                <a-tabs :tabBarStyle="{ textAlign: 'center' }">
                  <a-tab-pane key="1" tab="账号密码登陆">
                    <a-form-item
                      :wrapperCol="{ span: 20, offset: 2 }"
                      name="username"
                    >
                      <a-input
                        size="large"
                        type="username"
                        placeholder="请输入用户名"
                        v-model:value="form.username"
                      >
                        <template #prefix
                          ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
                        /></template>
                      </a-input>
                    </a-form-item>
                    <a-form-item
                      :wrapperCol="{ span: 20, offset: 2 }"
                      name="password"
                    >
                      <a-input-password
                        size="large"
                        type="password"
                        placeholder="密码"
                        v-model:value="form.password"
                      >
                        <template #prefix
                          ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
                        /></template>
                      </a-input-password>
                    </a-form-item>
                  </a-tab-pane>
                  <!-- 手机号登陆 -->
                  <a-tab-pane key="2" tab="手机号登陆" force-render>
                    <a-form-item :wrapperCol="{ span: 20, offset: 2 }">
                      <a-input
                        size="large"
                        type="phone"
                        placeholder="请输入手机号"
                      >
                        <template #prefix
                          ><MobileOutlined style="color: rgba(0, 0, 0, 0.25)"
                        /></template>
                      </a-input>
                    </a-form-item>
                    <!-- 验证码 -->
                    <a-row :gutter="16">
                      <a-col class="gutter-row" :span="16">
                        <a-form-item :wrapperCol="{ span: 20, offset: 3 }">
                          <a-input
                            size="large"
                            type="phone"
                            placeholder="验证码"
                          >
                            <template #prefix
                              ><MailOutlined style="color: rgba(0, 0, 0, 0.25)"
                            /></template>
                          </a-input> </a-form-item
                      ></a-col>
                      <a-col class="gutter-row" :span="8">
                        <a-form-item :wrapperCol="{ span: 18 }">
                          <a-input
                            size="large"
                            type="phone"
                            placeholder="获取验证码"
                          >
                          </a-input> </a-form-item
                      ></a-col>
                    </a-row>
                  </a-tab-pane>
                </a-tabs>
              </a-col>
            </a-row>

            <a-row class="login-forget">
              <a-col :span="20" :offset="2">
                <a-form-item :wrapperCol="{ span: 24 }">
                  <a-checkbox> 自动登陆 </a-checkbox>
                  <router-link style="float: right" to="#"
                    >忘记密码</router-link
                  ></a-form-item
                >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="20" :offset="2">
                <a-form-item :wrapperCol="{ span: 24 }">
                  <a-button
                    @click="handleSubmit"
                    block
                    type="primary"
                    size="large"
                    >确定</a-button
                  ></a-form-item
                >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="20" :offset="2">
                <span>其他登陆方式</span>
                <AlipayCircleOutlined class="item-icon" />
                <TaobaoCircleOutlined class="item-icon" />
                <WeiboCircleOutlined class="item-icon" />

                <router-link style="float: right" to="#">注册账户</router-link>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer></a-layout-footer>
  </a-layout>
</template>

<script>
import {
  UserOutlined,
  LockOutlined,
  MobileOutlined,
  MailOutlined,
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined
} from "@ant-design/icons-vue";
export default {
  data() {
    return {
      form: { username: "", password: "" },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 16, message: "长度在4-16个之间", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在6-18个之间", trigger: "blur" }
        ]
      }
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
    MobileOutlined,
    MailOutlined,
    AlipayCircleOutlined,
    TaobaoCircleOutlined,
    WeiboCircleOutlined
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm
        .validate()
        .then(() => {
          console.log("values", this.form);
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  }
};
</script>

<style scoped>
.ant-layout {
  height: 100%;
  background-image: url(../assets/image/bg.svg);
}

.ant-layout-header {
  background-color: transparent;
}
.login-title {
  text-align: center;
}
.login-title h2 {
  position: relative;
  top: 2px;
  font-size: 33px;
  color: rgba(0, 0, 0, 0.85);
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  font-weight: 600;
}

.login-title img {
  height: 44px;
}
.login-title span {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  margin-top: 12px;
}
.item-icon {
  font-size: 24px;
  color: rgba(0, 0, 0, 0.2);
  position: relative;
  top: 4px;
  margin: 0 5px;
}

.item-icon:hover {
  color: #1890ff;
}
</style>
