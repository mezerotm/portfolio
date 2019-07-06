<template>
    <Layout>
        <h1>{{ $page.project.title }}</h1>
        <div class="content" v-html="$page.project.content"></div>
    </Layout>
</template>

<page-query>
    query Project ($id: String!) {
        project: project (id: $id) {
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
    }
  }
</script>

<style scoped>
    .content >>> img {
        margin: auto;
    }
</style>
