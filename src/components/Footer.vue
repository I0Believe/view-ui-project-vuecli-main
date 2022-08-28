<template>
  <footer class="app-footer">
    <p>{{copyright}}</p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data() {
    return {
      copyright: 'copyright 2022-08-28 vue demo'
    }
  }
}
</script>

<style scoped>
footer{
  background-color: lightgreen;
  padding: 10px;
}

p{
  color: grey;
  text-align: center;
}
</style>
