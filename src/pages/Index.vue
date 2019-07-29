<template lang="pug">
    Layout.max-w-3xl.mx-auto
        g-image.mx-auto.h-32.w-32.rounded-full.bg-gray-100.m-4(src="~/assets/images/portrait.png")
        p.text-center.mx-auto.m-8
            | With over four years of full-stack web development experience for Car Super Services, I offer the
            | technical expertise you are seeking for your web application position. Since earning my degree in
            | an associate of applied science in computer programming at Gwinnett technical college, I have led web
            | development project for clients in diverse industries including technology, manufacturing, logistics,
            | stock market, retail, and e-commerce services. Known for a passion and persistence to solve difficult
            | solutions in elegant manners. Solutions using web technology's to solve problems using web
            | applications, systems application, and mobile applications.
            | As a web developer focused on technical solutions, I manage all aspects of web development
            | from the application design process, requirement definitions, launch, maintenance, and user support.
            | I enjoy backend roles but can easily fill a front-end position and communicate technical requirements
            | effectively.
        contact-form
</template>

<script>
    import ContactForm from '~/components/ContactForm'
    export default {
      components: {
        ContactForm
      },
      mounted () {
        this.$cookie.set('activeIndex', '/')
      }
    }
</script>