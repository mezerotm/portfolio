import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import VueDisqus from 'vue-disqus'
import VueMq from 'vue-mq'
const VueCookie = require('vue-cookie')
import axios from 'axios'
import VueAxios from 'vue-axios'

import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/styles/element/variables.scss'

import '~/assets/styles/prism/duotone-sea.css'
import '~/assets/styles/main.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Element, { locale })
  Vue.use(VueDisqus)
  Vue.use(VueMq)
  Vue.use(VueCookie)
  Vue.use(VueAxios, axios)
  Vue.component('Layout', DefaultLayout)
}
