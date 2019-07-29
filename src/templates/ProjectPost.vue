<template lang="pug">
    layout.max-w-3xl.mx-auto
        h1.font-bold.uppercase.text-xl {{ $page.project.title }}
        vue-markdown {{ $page.project.long_description }}
</template>

<page-query>
    query Project ($id: String!) {
        project: projectPost (id: $id) {
            title
            long_description
        }
    }
</page-query>

<script>
    import VueMarkdown from 'vue-markdown'
  export default {
      components: {
        VueMarkdown
      },
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
