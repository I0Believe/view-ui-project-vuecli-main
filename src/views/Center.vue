<template>
  <div class="layout">
    <Header/>
    <Layout>
      <Sider hide-trigger :style="{ background: '#fff' }">
        <Menu
            @on-select="changeSidebar"
            :active-name="sidebarItem"
            theme="light"
            width="auto"
            :open-names="['Center']"
        >
          <Submenu name="Center">
            <template #title>
              <Icon type="ios-navigate"></Icon>
              页面中心
            </template>
            <MenuItem name="a">a页面</MenuItem>
            <MenuItem name="b">b页面</MenuItem>
            <MenuItem name="c">c页面</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout :style="{ padding: '24px' }">
        <slot>
          <router-view/>
        </slot>
      </Layout>
    </Layout>
    <Footer/>
  </div>
</template>

<script>
import {
  Footer, Header,
  Icon, Layout, Menu, MenuItem, Sider, Submenu
} from 'view-ui-plus'

export default {
  name: 'Center',
  components: {
    Header,
    Footer,
    Icon,
    Submenu,
    Sider,
    Layout,
    Menu,
    MenuItem
  },
  data() {
    return {
      sidebarItem: ''
    }
  },
  mounted() {
    this.sidebarItem = this.$route.name
  },
  methods: {
    changeSidebar(name) {
      this.sidebarItem = name
      this.$router.push({
        name,
      })
    },
  }
}
</script>

<style scoped>

</style>
