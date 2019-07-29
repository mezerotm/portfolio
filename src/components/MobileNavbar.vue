<template lang="pug">
    el-menu.flex.justify-center(:default-active='activeIndex', mode='horizontal', @select='handleSelect')
        el-menu-item(index='/')
            i.el-icon-s-home
        el-menu-item(index='/news' disabled)
            i.el-icon-news
        el-menu-item(index='/blog')
            i.el-icon-reading
        el-menu-item(index='/projects')
            i.el-icon-suitcase
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