<template>
    <Layout>
        <g-image class="w-40 h-40 rounded-full" src="~/assets/images/avatar.jpg"/>
        <ul>
            <li v-for="project in $page.projects.edges" :key="project.id">
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
            </li>
        </ul>
    </Layout>
</template>

<page-query>
    query Projects {
        projects: allProject {
            edges {
                node {
                    title
                    technology_fields
                    short_description
                    technology_stacks
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