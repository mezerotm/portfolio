<template lang="pug">
    Layout
        h1.mt-6 UNDER CONSTRUCTION.
</template>

<script>
  const Parser = require('rss-parser')
  const parser = new Parser()

  export default {
    async mounted () {
      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

      const nodeFeed = await parser.parseURL(CORS_PROXY + 'https://n-o-d-e.net/rss/rss.xml')
      const hackerFeed = await parser.parseURL(CORS_PROXY + 'https://news.ycombinator.com/rss')

      const rAssemblyLanguage = await parser.parseURL(CORS_PROXY + 'https://www.reddit.com/r/Assembly_language/.rss')
      const rDailyProgrammer = await parser.parseURL(CORS_PROXY + 'https://www.reddit.com/r/dailyprogrammer/.rss')
      const rLinux = await parser.parseURL(CORS_PROXY + 'https://www.reddit.com/r/linux/.rss')
      const rNetSec = await parser.parseURL(CORS_PROXY + 'https://www.reddit.com/r/netsec/.rss')
      const rOperatingSystems = await parser.parseURL(CORS_PROXY + 'https://www.reddit.com/r/Operatingsystems/.rss')
      const rWebDev = await parser.parseURL(CORS_PROXY + 'https://www.reddit.com/r/webdev/.rss')
      const rProgramming = await parser.parseURL(CORS_PROXY + 'https://www.reddit.com/r/programming/.rss')

      const yCodingTech = await parser.parseURL(CORS_PROXY + 'https://www.youtube.com/feeds/videos.xml?channel_id=UCtxCXg-UvSnTKPOzLH4wJaQ')
      const yBenEater = await parser.parseURL(CORS_PROXY + 'https://www.youtube.com/feeds/videos.xml?channel_id=UCS0N5baNlQWJCUrhCEo8WlA')
      const yBisqwit = await parser.parseURL(CORS_PROXY + 'https://www.youtube.com/feeds/videos.xml?channel_id=UCKTehwyGCKF-b2wo0RKwrcg')
      const yIppSec = await parser.parseURL(CORS_PROXY + 'https://www.youtube.com/feeds/videos.xml?channel_id=UCa6eh7gCkpPo5XXUDfygQQA')
      const yJacobSchrum = await parser.parseURL(CORS_PROXY + 'https://www.youtube.com/feeds/videos.xml?channel_id=UCCKhH1p0tj1frvcD70tEyDg')

      console.log(JSON.stringify(hackerFeed))
    },
    mounted () {
      this.$cookie.set('activeIndex', '/news')
    }
  }
</script>