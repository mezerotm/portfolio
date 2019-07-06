// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: 'mezerotm',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
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
          feed_url: 'https://mezerotm.com/rss.xml',
          site_url: 'https://mezerotm.com'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://mezerotm.com/blog/' + node.slug
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'netlify/posts/**/*.md',
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
      use: 'gridsome-plugin-tailwindcss'
    }
  ]
}