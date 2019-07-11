<template lang="pug">
    layout
        ul.mt-6
            li.border-2(v-for='post in $page.posts.edges' :key='post.node.id')
                g-link(:to='/blog/ + post.node.fileInfo.name')
                    p  {{ post.node.date }}
                    h1  {{ post.node.title}}
                    h2  {{ post.node.excerpt }}
                    p {{ post.node.timeToRead }} minutes to read
                    ul
                        li.inline(v-for='tag in post.node.tags' :key='tag')
                            | {{ tag }}
</template>

<page-query>
    query BlogPosts {
        posts: allBlogPost {
            edges {
                node {
                    id
                    title
                    excerpt
                    tags
                    timeToRead
                    fileInfo {
                        name
                    }
                }
            }
        }
    }
</page-query>