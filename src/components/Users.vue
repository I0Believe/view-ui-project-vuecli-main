<template>
  <div class="users">
    <h1>{{ text }}</h1>
    <ul>
      <li v-for="(user,index) in users" :key="index" @click="user.show=!user.show">
        <h2>{{user.name}}</h2>
        <h3 v-show="user.show">{{user.position}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      text: 'hello world',
      users: [
        { name: 'Henry', position: 'web开发', show: false },
        { name: 'Muchen', position: 'web开发', show: false },
        { name: 'Muxue', position: 'web开发', show: false },
        { name: 'Lucy', position: 'web开发', show: false },
        { name: 'Henry', position: 'web开发', show: false },
        { name: 'Muchen', position: 'web开发', show: false },
        { name: 'Muxue', position: 'web开发', show: false },
        { name: 'Lucy', position: 'web开发', show: false },
        { name: 'Henry', position: 'web开发', show: false }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  color: orange;
}

.users {
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.users ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}

.users ul li {
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid grey;
  margin: 10px;
}

h1{
  text-align: center;
}
</style>
