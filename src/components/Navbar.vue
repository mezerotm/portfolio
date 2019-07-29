<template lang="pug">
    el-menu.flex.justify-center(:default-active='activeIndex', mode='horizontal', @select='handleSelect')
        el-menu-item(index='/') home
        el-menu-item(index='/news' disabled) news
        el-menu-item(index='/blog') blog
        el-menu-item(index='/projects') projects
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: ''
      }
    },
    methods: {
      handleSelect (key) {
        this.activeIndex = key
        this.$cookie.set('activeIndex', key)
        this.$router.replace(key)
      }
    },
    mounted () {
      this.activeIndex = this.$cookie.get('activeIndex')
    }
  }
</script>