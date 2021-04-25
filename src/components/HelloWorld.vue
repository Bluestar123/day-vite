<template>
  <button @click="increase">count is ：{{ count }}</button>
  <button @click="linkAbout">about link</button>
  <p>{{ name }}</p>
  <el-row>
    <el-button type="primary">el-button</el-button>
  </el-row>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
export default defineComponent({
  name: 'HelloWorld',

  setup: () => {
    const store = useStore()
    const router = useRouter()
    const count = computed(() => store.state.count)

    const increase = () => {
      store.commit('increment')
    }

    const linkAbout = () => {
      router.push('/about')
    }
    const name = computed(() => store.state.userModule.name)
    setTimeout(() => {
      store.commit('userModule/getUserName', '123')
    }, 2000)
    return {
      count,
      increase,
      linkAbout,
      name
    }
  }
})
</script>

<style scoped lang="scss">
a {
  color: #42b983;
  i {
    font-size: 10px;
  }
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
