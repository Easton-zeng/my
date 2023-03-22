<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <img src="" alt="">
      <h2 class="title">个人博客系统</h2>
    </div>

    <div class="form">
      <a-tabs>
        <a-tab-pane key="1" tab="登录">
          <div class="item">
            <a-input placeholder="账户">
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input placeholder="密码">
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-button type="primary">登录</a-button>
          </div>
        </a-tab-pane>
        
        <a-tab-pane key="2" tab="注册" >
          <div class="item">
            <a-input placeholder="账户">
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input placeholder="密码">
            <template #prefix>
                <LockOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input placeholder="邀请码">
              <template #prefix>
                <MailOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-button type="primary">注册</a-button>
          </div>
        </a-tab-pane>
      </a-tabs> 
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
  @import './index.scss';
</style>