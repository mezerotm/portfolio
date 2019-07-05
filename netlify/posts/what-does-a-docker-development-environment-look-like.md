---
title: What does a docker development environment look like?
excerpt: server clustering with raspberry pi was always on my mind
date: 2018-08-04T04:00:00.000Z
tags:
  - docker
  - nginx
---
![Don't Be Jealous That I Use Docker Containers All The Time](/uploads/dont-be-jealous-that-i-use-docker-containers-all-the-time-4.jpg)

I've been using docker for a long time, I still remember watching my first docker tutorial on my aunts iPhone 3G. I was really young and didn’t understand a thing of what was going on, but I still watched to the end. It was many years later that I got back into docker because the idea of server clustering with raspberry pi was always on my mind. But even from the very beginning, even after watching so many tutorials, and reading so many articles, I kept asking myself the same question. “What does a docker development environment look like?”

Since its inception this was one of the things people boasted most about, saying “The development environment is the exact same as the production ([Travis Reeder](https://medium.com/travis-on-docker/why-and-how-to-use-docker-for-development-a156c1de3b2)).“ Either I had different standards, or they were using the wrong words, because the people who said this never told me the solution. In my mind to have a docker environment meant a couple things.

* Dependencies which are required during development are accounted for within production. “Lets say I am developing a java application and I set up a java container with JDK 8 base image, I still need to install Java 8 JDK on my local development machine, since the IDE which I am going to use is going to look for runtime libraries on the local machine, not the docker container([Hopewell Mutanda](https://stackoverflow.com/questions/46724661/using-an-ide-while-developing-on-a-docker-container)).”
* You're still able to use fancy tools, such as IDE’s, hot reloading, debugging, and local servers in development.

Problem 1: This solution seems simple, use a good package manager / build tool. If you know gradle, maven, NPM, RubyGem, PIP, composer, or CMake; use them.

Problem 2: For a split second I thought that the only way to use my IDE was to have it within the same container that I wrote my code. And I know others had the [same idea](https://github.com/fgrehm/docker-eclipse) to. I thought this was the only way because for a while nobody talked about this feature in docker called [VOLUME](https://docs.docker.com/engine/reference/builder/#volume) or [volumes](https://docs.docker.com/compose/compose-file/#volumes) for composer files. This is closer to the solution, because with volumes you are able to make changes in your local development environment from running build tools, or linters, and any changes made would then be reflected over in your docker container. When using boot2docker, which is a virtual machine running Linux with docker that is being run in VirtualBox in headless mode and you SSH into it. I ran into issues because exposing volumes in a Dockerfile only exposed them within the VirtualBox, and then I have to make the extra effort of doing file sharing with boot2docker and VirtualBox guest additions. This problem has been [solved](https://github.com/boot2docker/boot2docker/pull/534).

Enough talking, let’s look at the code!
I’ve recently learned to use Nginx, so we’re just going to make a very simple HTML file and host it with nginx. I promise that this will work even if you use frameworks, and build tools, and package managers, and wear banana outfits on Halloween.
Create a basic html file

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Just In Time Blog</title>
  </head>
  <body>

    <h1>Hello from docker!</h1>

  </body>
</html>
```

I will not create a Dockerfile for nginx, not only because I can do this in my `docker-compose.yaml` but because a Dockerfile is very limited on things such as volumes, and exposing ports. Exposing ports is considered a suggestion, and volumes cannot be told where to mount.

**docker-compose.yaml**

```yaml
version: '3.0'
services:
  app:
    image: nginx:stable
    ports:
      - '80:80'
    volumes:
      - .:/usr/share/nginx/html
```

And then we run

```bash
$ docker-compose up --build
```

We now have our application up and running on port 80.
any modifications we make to `index.html` will reflect in our docker

[here is a link if you are interested in a more advanced environment](https://success.docker.com/article/dev-pipeline)
