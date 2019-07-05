---
title: >-
  Switching my blog over to ghost, and deleting my entire operating system in
  the process.
excerpt: 'null'
date: 2019-07-05T23:33:19.049Z
tags:
  - ghost
  - blog
  - meta
---
It feels like I've been dragged through hell and back, and it's all of my own doing; If you know me you know that there isn't anything more in my life that I love then FREE. I've once said, that the only reason I'm a programmer today is because the barrier of entry to get into electronics is buying the electronics, but the only barrier of entry to computer programming is getting your hands on a computer, then everything else is free.

A little backstory of what even lead to me wanting to change. I was originally using vuepress for my cms, and hosting it on Heroku. Before I chose Vuepress through I did a lot of research on the subject and come across large lists of static site generators: here, here, here - and many more not listed. A lot of these generators either revolve around a language like PHP or a framework like react. so my choices where limited to what I knew at the time, since I didn't want to embark on learning a new language or framework, the choice pretty simple. Something with javascript. I had just recently self declared myself a vue.js / nuxt.js expert and was ready to take on more vue related projects. 

Working on the idea I created and recreated my project several times. First I tried working on it in nuxt.js and quickly realized this was more work then I needed to take on. Then I decided to use vupress to do the heavy lifting for me and found out vuepress really isn't good at writing blogs, it's intention is for documentation. I went back to nuxt.js, unhappy with the progress I was making I would take breaks and in those breaks I would read documentation on vuepress, and watch videos and do research. I found it! a way to make vuepress kinda blog friendly. So I tried it, and it worked. At the time it was good enough for what I needed I would have a folder called posts and in it I would just have files with markdown formatting and put all my blogs in there, good enough. I wrote a blog, build the project and pushed it to Heroku. "Bing Bam Boom!"

Like a lot of my hosted projects, I host using Heroku. They have a pretty simple way to deploy where all I have to do is push my code to a git server and it's up and running. No need to worry about CPU, or memory usage or DNS, it just works. I was fine hosting my blog on Heroku, the only problem is that when I started using my blog as a reference on my resume and it would take Heroku 7 minutes to boot, most people just assumed my blog didn't work, Or was very heavy and slow. This reflected on me poorly, and was not what I wanted. So I had a simple choice. Upgrade my Heroku plan, or get a cheaper hosting provider like Digital Ocean, or host it myself... Hmm.. let's see.. pay $7 /month, or pay $5/month, or pay Nothing. The choice was very clear at the moment. Little did I know that the choice I made was about to be the biggest mistake of my life.
