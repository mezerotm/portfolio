<template lang="pug">
    layout.max-w-3xl.mx-auto
        h1 {{ $page.post.title }}
        vue-markdown {{ $page.post.content }}
        vue-disqus(shortname='mezerotm', :identifier='$page.post.title')
</template>

<page-query>
    query BlogPost ($id: String!) {
        post: blogPost (id: $id) {
            title
            content
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
        title: this.$page.post.title
      }
    },
    mounted () {
      this.$cookie.set('activeIndex', '/blog')
    }
  }
</script>

<style scoped>
    .content >>> img {
        margin: auto;
    }
</style>
