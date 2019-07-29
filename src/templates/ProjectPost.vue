<template lang="pug">
    layout.max-w-3xl.mx-auto
        h1 {{ $page.project.title }}
        .content(v-html='$page.project.content')
</template>

<page-query>
    query Project ($id: String!) {
        project: projectPost (id: $id) {
            title
            content
        }
    }
</page-query>

<script>
  export default {
    metaInfo () {
      return {
        title: this.$page.project.title
      }
    },
    mounted () {
      this.$cookie.set('activeIndex', '/projects')
    }
  }
</script>

<style scoped>
    .content >>> img {
        margin: auto;
    }
</style>
