<template lang="pug">
    el-container
        el-header(v-if='$mq !== "sm"' height='unset')
            navbar
        el-main(:class='$mq === "sm" ? "mb-8" : ""')
            slot
        el-footer.fixed.inset-x-0.bottom-0(v-if='$mq === "sm"')
            mobile-navbar
</template>

<script>
    import Navbar from '~/components/Navbar'
    import MobileNavbar from '~/components/MobileNavbar'

  export default {
    components: {
      Navbar,
      MobileNavbar
    }
  }
</script>