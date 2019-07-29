<template lang="pug">
    layout.max-w-3xl.mx-auto
        ul
            li.border.border-gray-200.bg-gray-100.rounded.py-3.px-4.mb-3.b-2(v-for='post in $page.posts.edges' :key='post.node.id')
                g-link(:to='/blog/ + post.node.fileInfo.name')
                    .flex.justify-between.mb-3
                        h1.uppercase.font-bold {{ post.node.title }}
                        p {{ post.node.date | longDate }}
                    ul.flex.justify-start(:class='$mq === "sm" ? "flex-col" : ""')
                        li.uppercase.text-sm.inline-block.bg-gray-200.rounded.px-2(v-for='tag in post.node.tags' :key='tag' :class='$mq === "sm" ? "mb-2" : "mr-2"') {{ tag }}
</template>

<page-query>
    query BlogPosts {
        posts: allBlogPost {
            edges {
                node {
                    id
                    date
                    title
                    tags
                    fileInfo {
                        name
                    }
                }
            }
        }
    }
</page-query>

<script>
    export default {
      filters: {
        longDate (date) {
          return new Date(date).toLocaleDateString()
        }
      },
      mounted () {
        this.$cookie.set('activeIndex', '/blog')
      }
    }
</script>