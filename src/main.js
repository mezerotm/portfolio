import VueDisqus from 'vue-disqus'

import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/css/styles.css'
import '~/assets/css/prism/duotone-sea.css'

export default function (Vue, { router, head, isClient }) {
  Vue.use(VueDisqus)
  Vue.component('Layout', DefaultLayout)
}
