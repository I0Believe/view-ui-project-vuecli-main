<template>
  <div>132</div>
</template>

<script>
// 引入分类api
import { reqCategoryList } from 'src/api'

export default {
  name: 'CallAPI',
  data() {
    return {
      typeNavList: []
    }
  },
  // 在接受Promise类型的对象时，需要搭配（async，await）获取成功的动态
  async mounted() {
    const res = await reqCategoryList()
    this.typeNavList = res.data
    // 调用vuex中的方法获取数据
    // this.$store.dispatch('home/actionsTypeNavList');
  }
}
</script>

<style scoped>

</style>
