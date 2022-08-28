<template>
  <Header class="app-header">
    <h1>{{title}}</h1>
  </Header>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      title: 'Vue.js Demo'
    }
  }
}
</script>

<style scoped>
Header{
  background-color: lightgreen;
  padding: 10px;
}

h1{
  color: #222222;
  text-align: center;
}
</style>
