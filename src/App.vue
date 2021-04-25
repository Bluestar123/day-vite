<template>
  <router-view></router-view>
  123
  <h1>{{ state.a }}</h1>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({ a: 51 })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
