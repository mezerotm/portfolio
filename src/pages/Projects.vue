<template lang="pug">
    layout.max-w-3xl.mx-auto
        ul
            li.border.border-gray-200.bg-gray-100.rounded.py-3.px-4.mb-3.b-2(v-for='project in $page.projects.edges' :key='project.node.id')
                g-link(:to='/projects/ + project.node.fileInfo.name')
                    .flex.justify-between.mb-3
                        h2.uppercase.font-bold  {{ project.node.title}}
                        ul
                            li.uppercase.text-sm.inline-block.bg-gray-200.rounded.px-2(v-for='technology in project.node.technology_fields' :key='technology' :class='$mq === "sm" ? "mb-2" : "mr-2"') {{ technology }}
                    .flex.justify-between.mb-3
                        p  {{ project.node.short_description }}
                        ul
                            li.uppercase.text-sm.inline-block.bg-gray-200.rounded.px-2(v-for='technology in project.node.technology_stacks' :key='technology' :class='$mq === "sm" ? "mb-2" : "mr-2"') {{ technology }}
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