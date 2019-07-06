<template>
  <Layout>  
    <ul>
      <li v-for="post in $page.posts.edges" :key="post.id">
        <p> {{ post.node.date }} </p>
        <h1> {{ post.node.title}} </h1>
        <ul>
          <li class="inline" v-for="tag in post.node.tags" :key="tag">
            {{ tag }}
          </li>
        </ul>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Posts {
    posts: allPost {
      edges {
        node {
          title
          tags
        }
      }
    }
  }
</page-query>