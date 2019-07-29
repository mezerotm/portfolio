<template lang="pug">
    layout.max-w-3xl.mx-auto
        .mt-6
            h1 {{ $page.post.title }}
            .content(v-html='$page.post.content')
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
  export default {
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
