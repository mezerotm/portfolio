---
title: 'Framework Review: Moleculer'
excerpt: >-
  Moleculer is like the Vue.js of microservice frameworks, it has the best of
  everything and is the easiest to get started with.
date: 2018-07-31T04:00:00.000Z
tags: 'node.js, framework, microservices'
---
# Framework Review - Moleculer

When it comes to using [microservices in the world of Node.js](https://github.com/mfornos/awesome-microservices#nodejs), this is my framework of choice. I have played around with many others such as [senaca](https://github.com/senecajs/seneca), [micro](https://github.com/zeit/micro), [express](https://github.com/expressjs/express), and [restify](https://github.com/restify/node-restify). All good frameworks which I have used on several occasions. But moleculer is like the [Vue.js](https://github.com/vuejs/vue) of microservice frameworks, it has the best of everything and is the easiest to get started with.

### Documentation

Moleculer is one of the best-written documentation I have seen in a while. Using Hexo for its static site documentation generator, an amazing tool I plan on looking at in the future. It’s clean easy to navigate and easy to reference. They use my favorite form of documentation which is direct code examples after they introduce something. The documentation feels pretty linear, although I don’t think on purpose. You can read it straight through from top to bottom and understand everything without having to skip over things you didn’t understand only to come back when it was reintroduced.

### Code

I'm going to write two simple microservices that will interact with each other to show the basic concept of how moleculer works.

All you will need to get started is `node`, `npm`, and `moleculer`

I ran

```bash
$ npm init -y
$ npm i moleculer
$ npm i -D moleculer-repl
```

 I omitted some lines to make it simpler to read and now am left with this.

**package.json**

```json
{
  "name": "moleculer_v0.13",
  "scripts": {
    "start": "moleculer-runner services",
    "dev": "moleculer-runner --repl --hot services"
  },
  "dependencies": {
    "moleculer": "^0.13.1"
  },
  "devDependencies": {
    "moleculer-repl": "^0.5.1"
  }
}
```

You will notice I added two lines `start` and `dev` I will go over what they do later, but understand that `moleculer-runner` is amazing for development.

Next, I will create a folder and name it `services`, this is where I will put all my services.

In the `services` folder, we will create a file called `math.service.js`. This isn't just me having fun with names, although this is fun. This is part of the [Services loading logic](http://moleculer.services/docs/0.13/runner.html#Services-loading-logic) conventions, in order for moleculer-runner to pick up our services.

So let's recap before we move along, your project structure should look something like this.

```bash
.
├── node_modules
├── package.json
├── package-lock.json
└── services
    └── math.service.js
```

Does it look like this? Nice!

So we will start working in the `math.service.js` file, and this is where the real fun begins. But real quick, if you skimmed the documentation you may have noticed this

```js
const { ServiceBroker } = require("moleculer");
const broker = new ServiceBroker({
    logLevel: "info"
});

broker.createService({
  // Some service code
})
```

 You also may have noticed all over the place in the documentation they kept just exporting objects. Well here [moleculer-runner](http://moleculer.services/docs/0.13/runner.html) auto-magically detects services inside of our services folder with the glob of `**/*.service.js` this saves us from having to write the broker, and only having to export objects. So that's what we're gonna do

 **math.service.json**

```js
module.exports = {
  name: 'math',
  actions: {
    add: {
      params: {
        a: {
          type: 'number',
          positive: true
        },
        b: 'number'
      },
      handler(ctx) {
        return ctx.params.a + ctx.params.b
      }
    },
    subtract(ctx) {
      return ctx.params.a - ctx.params.b
    }
  }
}
```

 I've sprinkled all the possible ways you could do this, from most complex to least.

 Starting with the least we have `subtract()` This is a function within an object called `actions`, you can consider [actions](http://moleculer.services/docs/0.13/actions.html) as functions we want other services to interact with, or remote functions. The `subtract` function takes a parameter of [context](http://moleculer.services/docs/0.13/actions.html#Contexts) which comes with several cool things, but here we are only after the parameters that will be passed. I think you can tell by looking at the code that all we do is subtract `a` from `b` and return the value, doing no validation whatsoever. Although subtracting strings in JavaScript just gives you `NaN` it's adding where JavaScript has more fun.

 Looking at `add` you will notice that this time we didn't create a function like `subtract()` but instead it's an object and within the object we one more object called `params` and a function called `handler()`. Moleculer in all her wisdom has provided us with the  [fastest-validator](https://github.com/icebob/fastest-validator), that's it's named. Even though they provide benchmarks showing how fast they are, what I think is really great about FV is its natural syntax. Here I'm using it to tell moleculer that I want a parameter called `a` to be of type `number` and that it must be `positive` and that I want one more parameter called `b` to just be a `number`.

 That's pretty cool we just did some easy validation, which is so important when programming ... in general. The `handler()` just adds `a` and `b` and returns the sum.

let's look back at the `package.json` in it we added two extra lines

```js
"start": "moleculer-runner services",
"dev": "moleculer-runner --repl --hot services"
```

`moleculer-runner` by itself just needs to know where we put our services and it will run itself. An important thing to note. This is nowhere close to being production ready for example I haven't talked about the [`moleculer.config.js`](http://moleculer.services/docs/0.12/runner.html#Configuration-file) at all, so have a look at that if you are interested in getting serious.

Looking at the `dev` script you'll see it has two flags, `--repl` and `--hot`. If you've been programming for a while you'll be happy to hear you can run it `--hot`. Which basically means that every time you save your service file, moleculer will restart itself, and all services. `--repl` on the other hand... This is the good stuff. You need to have `moleculer-repl` installed in order for this flag to work. So let's run `npm run dev` and we get this

```bash
INFO  master/BROKER: Moleculer v0.13.1 is starting...
INFO  master/BROKER: Node ID: master
INFO  master/BROKER: Namespace: <not defined>
INFO  master/REGISTRY: Strategy: RoundRobinStrategy
INFO  master/BROKER: Cacher: MemoryCacher
INFO  master/BROKER: Serializer: JSONSerializer
INFO  master/BROKER: Registered 11 internal middleware(s).
INFO  master/REGISTRY: '$node' service is registered.
INFO  master/REGISTRY: 'math' service is registered.
INFO  master/BROKER: ServiceBroker with 2 service(s) is started successfully.
mol $
```

 notice the last line `mol $` this is `--repl` in action. In here [we can do all kinds of cool things](http://moleculer.services/docs/0.12/moleculer-repl.html).

Typing `help actions` will give you more information on what you can do with this command. But as you can see we have created two actions and they are recognized by moleculer. Within the repl, we can call them.

```bash
mol $ call 'math.add' '{ "a": 3, "b": 9 }'
{ options: {},
  actionName: 'math.add',
  jsonParams: '{ "a": 3, "b": 9 }' }
>> Call 'math.add' with params: { a: 3, b: 9 }
>> Execution time: 4ms
>> Response:
12
```

Keep note of the quotes, it takes JSON as it's 3rd parameter and loves complaining otherwise.

So this is it we have created a service, we have called it and we're now in the matrix. Or at the very least within one of the services within the matrix. You might be thinking to yourself, that was pretty easy.. is that it? - YEAH, that's it! sorta.. naturally you might be wondering how services communicate within themselves and how they communicate when they don't exist within the same project. You also might ask how services connect to other parts of your project such as the front end or the database. Those are all very valid questions, and the exact questions I had the entire time while reading the documentation. Well, check out the [moleculer modules](https://moleculer.services/modules.html) to extend your knowledge further and solve all those questions you had.
