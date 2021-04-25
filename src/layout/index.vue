<template>
  <div class="">
    <!-- 侧边栏 -->
    <div></div>
    <!-- 右侧内容 -->
    <div>
      <nav-bar />

      <app-main />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppMain from './components/appMain.vue'
import NavBar from './components/navBar.vue'
</script>
<style lang="scss" scoped>
@import url('styles/mixin.scss');

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
