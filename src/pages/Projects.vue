<template>
    <Layout>
        <g-image class="w-40 h-40 rounded-full" src="~/assets/images/avatar.jpg"/>
        <ul>
            <li class="border-2" v-for="project in $page.projects.edges" :key="project.node.id">
                <g-link :to="/projects/ + project.node.fileInfo.name">
                    <h1> {{ project.node.title}} </h1>
                    <ul>
                        <li class="inline" v-for="technology in project.node.technology_fields" :key="technology">
                            {{ technology }}
                        </li>
                    </ul>
                    <h2> {{ project.node.short_description }} </h2>
                    <ul>
                        <li class="inline" v-for="technology in project.node.technology_stacks" :key="technology">
                            {{ technology }}
                        </li>
                    </ul>
                </g-link>
            </li>
        </ul>
    </Layout>
</template>

<page-query>
    query Projects {
        projects: allProjectPost {
            edges {
                node {
                    id
                    title
                    technology_fields
                    short_description
                    technology_stacks
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
    name: 'portfolio'
  }
</script>