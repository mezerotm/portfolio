<template>
    <Layout>
        <div class="mt-6">
            <h1>{{ $page.post.title }}</h1>
            <div class="content" v-html="$page.post.content"></div>
            <vue-disqus shortname="mezerotm" :identifier="$page.post.title"></vue-disqus>
        </div>
    </Layout>
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
    }
  }
</script>

<style scoped>
    .content >>> img {
        margin: auto;
    }
</style>
