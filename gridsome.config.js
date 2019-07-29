const whitelister = require('purgecss-whitelister')

module.exports = {
  siteName: 'mezerotm',
  siteUrl: 'https://mezerotm.com',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },

  plugins: [
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'BlogPost',
        feedOptions: {
          title: 'Just In Time Blog',
          feed_url: 'https://mezerotm.com/.rss',
          site_url: 'https://mezerotm.com'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://mezerotm.com/' + node.path
        }),
        output: {
          dir: './static',
          name: '.rss'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        config: {
          '/blog': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/news': {
            changefreq: 'weekly',
            priority: 0.5
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'netlify/blog/**/*.md',
        typeName: 'BlogPost',
        route: '/blog/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'netlify/projects/**/*.md',
        typeName: 'ProjectPost',
        route: '/projects/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'netlify/news/**/*.md',
        typeName: 'NewsPost',
        route: '/news/:slug'
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-135963207-1'
      }
    },
    {
      use: 'gridsome-plugin-pug'
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        shouldPurge: false,
        purgeConfig: {
          // whitelist: [
          //
          // ]
        }
      }
    }
  ]
}