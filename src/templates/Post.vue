<template>
    <Layout>
        <h1>{{ $page.post.title }}</h1>
        <div class="content" v-html="$page.post.content"></div>
    </Layout>
</template>

<page-query>
    query Post ($id: String!) {
        post: post (id: $id) {
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
