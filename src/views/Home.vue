<template>
  <Header/>
  <Demo/>
  <Footer/>
</template>

<script>
import { Footer, Header } from 'view-ui-plus'
import Demo from '@/components/Demo.vue'

export default {
  name: 'HomeView',
  components: {
    Demo,
    Header,
    Footer
  }
}
</script>
