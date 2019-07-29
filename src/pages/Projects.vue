<template lang="pug">
    layout
        ul.mt-6
            li.border-2(v-for='project in $page.projects.edges' :key='project.node.id')
                g-link(:to='/projects/ + project.node.fileInfo.name')
                    h1  {{ project.node.title}}
                    ul
                        li.inline(v-for='technology in project.node.technology_fields' :key='technology')
                            | {{ technology }}
                    h2  {{ project.node.short_description }}
                    ul
                        li.inline(v-for='technology in project.node.technology_stacks' :key='technology')
                            | {{ technology }}
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
      mounted () {
        this.$cookie.set('activeIndex', '/projects')
      }
    }
</script>