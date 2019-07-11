<template lang="pug">
    Layout
        .flex.items-center.justify-between.pl-32.pr-32
            div
                h1.font-thin.text-13xl.text-center.leading-tight.select-none Carlos Rincon
            g-image.pointer-events-none.select-none(src="~/assets/images/portrait.png" fit="inside")
</template>

<script>
    export default {
      metaInfo: {
        bodyAttrs: {
          class: 'single-page light-theme bg-primary text-second-primary'
        }
      }
    }
</script>