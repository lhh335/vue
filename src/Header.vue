<template>
  <el-header class="header">
    <div class="header-left">
      <img
        src="http://mea.meitudata.com/6dcb962c0dd2961a121b31503344a1c3-4270.png"
        alt
        class="logo"
      />
      <em class="logo-point">·</em>
      <span class="logo-text">广告投放平台</span>
    </div>
    <div class="header-right">
      <img class="notice" src='' alt=''/>
      <div class="user"></div>
      <div class="account"></div>
      <div class="logout"></div>
    </div>
  </el-header>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {

  }
};
</script>

<style>
.header {
  width: 100%;
  height: 60px;
  background: #fff;
  color: #fff;
  font-size: 14px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  padding: 0 22px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
}

.header-right {
  display: flex;
  align-items: center;
}

.logo {
  width: 88px;
}

.logo-point {
  width: 22px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  color: #666;
  font-weight: bold;
  font-size: 20px;
}

.logo-text {
  font-size: 14px;
  color: #666;
  font-weight: bold;
}

.notice {

}
</style>