<template lang="pug">
    div.bg-gray-100.rounded.py-3.px-4.mb-3
        h1.flex.justify-centerblock.uppercase.tracking-wide.text-gray-700.text-xs.font-bold.mb-2 contact me
        form.max-w-3xl(name='contact', method='post', v-on:submit.prevent='handleSubmit', data-netlify='true', data-netlify-honeypot='bot-field')
            input(type='hidden', name='form-name', value='contact')
            label(hidden)
                input(name='bot-field')
            .flex.flex-wrap.-mx-3.mb-6
                .w-full.px-3.mb-6(class='md:w-1/2 md:mb-0')
                    label.block.uppercase.tracking-wide.text-gray-700.text-xs.font-bold.mb-2(for='name')
                        | name
                    input#name.appearance-none.block.w-full.bg-gray-200.text-gray-700.border.border-gray-200.rounded.py-3.px-4.mb-3.leading-tight(class='focus:outline-none focus:bg-white focus:border-gray-500', type='text', placeholder='Bjarne Stroustrup', v-model='formData.name')
                    p.text-gray-600.text-xs.italic Creator of C++
                .w-full.px-3(class='md:w-1/2')
                    label.block.uppercase.tracking-wide.text-gray-700.text-xs.font-bold.mb-2(for='email')
                        | email
                    input#email.appearance-none.block.w-full.bg-gray-200.text-gray-700.border.border-gray-200.rounded.py-3.px-4.mb-3.leading-tight(class='focus:outline-none focus:bg-white focus:border-gray-500', type='email', placeholder='bjarne@stroustrup.com', v-model='formData.email')
                    p.text-gray-600.text-xs.italic That's his real email
            .flex.flex-wrap.-mx-3.mb-6
                .w-full.px-3
                    label.block.uppercase.tracking-wide.text-gray-700.text-xs.font-bold.mb-2(for='grid-password')
                        | message
                    textarea#grid-password.appearance-none.block.w-full.bg-gray-200.text-gray-700.border.border-gray-200.rounded.py-3.px-4.mb-3.leading-tight.h-32(class='focus:outline-none focus:bg-white focus:border-gray-500', type='password', :placeholder='randomJoke',  v-model='formData.message')
                    p.text-gray-600.text-xs.italic I love a good programmer joke
            button.appearance-none.block.w-full.bg-gray-200.text-gray-700.border.border-gray-200.rounded.py-3.px-4.mb-3.leading-tight(type="submit") Submit
</template>

<script>
  export default {
    data() {
      return {
        formData: {},
        randomJoke: 'Some random programmer joke...'
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
        .catch(error => alert(error))
      }
    },
    async mounted () {
      let randomJoke = await this.$axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
      this.randomJoke = randomJoke.data[0].setup + '\n' + randomJoke.data[0].punchline
    }
  }
</script>