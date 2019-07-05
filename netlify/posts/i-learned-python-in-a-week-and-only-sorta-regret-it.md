---
title: I Learned Python in a week and only sorta regret it
excerpt: >-
  The first time I learned JavaScript it took two weeks, then learning git took
  a week and a half and now Python only a week!
date: 2018-12-30T05:00:00.000Z
tags:
  - python
  - devops
  - saltstack
---
This isn't the first time I've tackled big concepts in a short period of time. Although every time I do it, it does get faster. The first time I learned JavaScript it took two weeks, then learning git took a week and a half and now Python only a week! At this rate, I'll learn assembly in 3 days. just kidding, I'm still working on that one. They all do have one thing in common, I learn them during a break of some kind when everyone else should be on vacation.

A little back story to why I even decided to learn Python. I originally didn't wanna learn Python and if I'm being honest with you, I still to this moment question whether I benefit much from learning it (more on this later). If you even so much as skimmed the titles of my previous two posts you will notice that I was focusing a lot of DevOps. Working with microservice frameworks in JavaScript and containerization with docker. I forgot what sparked my curiosity but I really wanted to learn a way to do programmatic server orchestration or as [Wikipedia](https://www.wikiwand.com/en/Infrastructure_as_code) likes to call it Infrastructure as code. I had many choices

- Chef
- Puppet
- Terraform
- SaltStack
- Ansible

I had a few criteria. First of all, I don't wanna learn ruby, period. so no chef or puppet. I needed it to be as simple as writing a single `.yaml` file and being able to control my servers over SSH so that I don't need to install anything on the servers I wanna control. The simple choice came to [SaltStack](https://docs.SaltStack.com/en/latest/) written in Python which allows me the power of a scripting language with the ease of creating a state file and pushing it over SSH. The best part about SaltStack is that you don't need to know Python in order to use it (sorta). You can generally get away with just using `.yaml` files. But in my process of pouring over the documentation, endlessly watching video after video, and reading blog after blog on the subject on SaltStack. I could never really grasp the entirety of SaltStack because it's very core and foundation are based in Python itself, and all documentation and historical references are tied in the language it is written in. This meant that if I wanted to utilize this amazing tool to it's fullest potential and doing more then memorizing commands. I needed to understand the very foundation of SaltStack itself.

This is where Python comes in, and actually, this where a difficult choice was made. Long before I started dabbling with SaltStack I was keen about wanting to learn [Nim](https://Nim-lang.org/). Nim is a systems and applications programming language that is statically typed and compiled to C, C++ or JavaScript. The fact that It compiles to C means it is cross-platform, much in the same way python is cross-platform simply because most major operating systems come with a base install of compilers and interpreters for these languages. To my very core, I LOVE LANGUAGES, I hope to one day write my own language and in my free-free time study language design and write lexers, parsers, interpreters, etc.. So it's only natural that I want to learn a systems programming language besides C or assembly. - But a choice had to made because I'm only given one winter break and one opportunity.

I chose Python, no regrets (sorta).
- Python being an older language had better documentation
- A bigger / Better community
- An extremely extensive standard library and third-party packages
- Is used a lot in security programming (another hobby of mine)
- Is a general purpose programming language!

Compared to Java (The first language I ever learned) sitting down and writing code in a scripting language is just easier. When I'm writing Java I spend more time thinking about design patterns, data structure, project structure, package management (The best thing Java has is [Maven](https://search.maven.org/) Java has been around since before I was born it's still hard as hell for me to figure out where to get packages) I have a first love for Java I really do, and thinking about data structure, project management, and systems architecture  is fun and exciting. But I don't need all that when I'm trying to write a program that tells me if I've been [pwned](https://haveibeenpwned.com/) - Please do not get me started on the legacy hell that is doing web applications in Java or even GUI applications with JavaFX I've done over 5 years of Java programming, I'm done.

Python as of right now is HOT! It's marketable, it's one of the top growing languages and used by beginners and experts alike and praised by many. It's an amazing tool to have in your arsenal of scripting languages, more so if you are a Linux admin like me. I write plenty in Bash but sometimes you need a little more power, and Perl is dead. It's a general purpose language so this means I can use it for anything and everything.

So how does Python benefit me? Well not very much at the moment. I've been using JavaScript for 2 years and although it's a language meant to be used only in the browser with the creation of node.js, If I didn't know any better it's a general-purpose programming language. I've written GUI's using electron, I've created [restful API's](https://github.com/mezerotm/portfolio/tree/master/web/eco) for connecting Arduino's to the internet. I've used [johnny-five](http://johnny-five.io/) to make micro-servers with MKR100's Arduino's, I've made CMS's, Websites, COR proxies, connected several API's to get [reverse IP's addresses](https://github.com/mezerotm/portfolio/tree/master/javascript/hacker-reverse-ip), Created tools for bulk renaming files, etc.. etc.. I honestly don't know where python belongs. I have a friend who likes using it to manage websites on the server side using Flask / Django. But I don't see the benefit of being polymorphic when using JavaScript in the backend is just as nice. Although I understand he uses it because he inherits pandas and other data science tools.

So currently my planes for python include my continued knowledge of SaltStack and I also plan on using python on my IoT for now own by using [micropython](https://micropython.org/), All security projects will be written in python. And I think my websites would benefit from python if I can combine it with Cython or even better by being more polymorphic and combining my backend with Python + Crystal or Nim
