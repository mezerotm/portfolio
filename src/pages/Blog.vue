<template>
    <Layout>
        <ul>
            <li class="border-2" v-for="post in $page.posts.edges" :key="post.node.id">
                <g-link :to="/blog/ + post.node.fileInfo.name">
                    <p> {{ post.node.date }} </p>
                    <h1> {{ post.node.title}} </h1>
                    <h2> {{ post.node.excerpt }} </h2>
                    <p>{{ post.node.timeToRead }} minutes to read</p>
                    <ul>
                        <li class="inline" v-for="tag in post.node.tags" :key="tag">
                            {{ tag }}
                        </li>
                    </ul>
                </g-link>
            </li>
        </ul>
    </Layout>
</template>

<page-query>
    query Posts {
        posts: allPost {
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