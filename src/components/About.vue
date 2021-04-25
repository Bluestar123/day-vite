<template>
  <div class="">about</div>
  <p>{{ a }}</p>
</template>

<script lang="ts" setup>
import { test } from '@/hooks/test'

let a = test()
fetch('/api/getUserInfo?id=123', {
  method: 'get'
})
  .then((res) => res.json())
  .then((res) => console.log(res))
</script>
<style lang="scss" scoped></style>
