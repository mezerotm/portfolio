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
        h2.font-bold.text-3xl Contact Me
        form(name='contact' method='post' v-on:submit.prevent='handleSubmit' action='/success/' data-netlify='true' data-netlify-honeypot='bot-field')
            input(type='hidden' name='form-name' value='contact')
            p(hidden='')
                label
                    | Don&rsquo;t fill this out:
                    input(name='bot-field')
            .sender-info
                div
                    label.label(for='name') Your name
                    input(type='text' name='name' v-model='formData.name')
                div
                    label(for='email') Your email
                    input(type='email' name='email' v-model='formData.email')
            .message-wrapper
                label(for='message') Message
                textarea(name='message' v-model='formData.message')
            button(type='submit') Submit form

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
      data() {
        return {
          formData: {},
        }
      },
      methods: {
        encode(data) {
          return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
        },
        handleSubmit(e) {
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode({
              'form-name': e.target.getAttribute('name'),
              ...this.formData,
            }),
          })
          .then(() => this.$router.push('/success'))
          .catch(error => alert(error))
        }
      }
    }
</script>