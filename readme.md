## NodeJS Introduction

Toby Dussek - Framework Training

November 9-11 2026

* 9:30 start
* 11:00 coffee until 11:16
* 12:30 lunch until 1:30
* 3:00 Tea
* 4:30 end

#### Monday
* welcome and tech-check
* overview of the course, exercises etc.
* visual studio code: pick a folder, and open it with vsc
* introducing NodeJS
* course repo (all my code will be here)
  - https://github.com/onionmccabbage/NodeJS_Nov2026
* servers and files (microservices)
- the Node REPL
  - type node in a terminal to start the REPL (end with ctrl-c twice)
  - tab-tab for code help
* cli
* review exercise (then show-and-tell)
* Make a package.json:
  - nmp init -y makes a default package.json
  - npm init talks us through
* Modules: commonJS (require)  and ESM (import)
* .js, .mjs etc also package.json

#### Tuesday
* quick summary of where we're at
* the fetch API (and latest developments within Node)
* async-await and promises
  - https://rxjsmarbles.dev show examples of combining streams
  - `streams are arrays over time`
* modules, package.json and npm
* sync and async
* ways to import and export: import nnn, or import {nnn}
* architecture best/common practices
* debugging and Chrome dev tools
* review exercise (inc debug)
* fetch: the latest...
* EventEmitter
* dev/prod and tool-chains
* write scripts in package.json to "debug": "node --inspect-brk calc.js"
* unit testing  
  https://vitest.dev/guide/ also https://jestjs.io/docs/getting-started
  https://raygun.com/blog/javascript-unit-testing-frameworks/#vitest
* test-driven development and robust coding
* ES features: classes, rest, fn etc.
* Typescript is important...
  - npm install -g tsc // the typescript compiler
  - npm install -g ts-node // to 'run' ts files (actually runs the js file)
  - also see tsconfig.json
  - https://typescriptlang.org
* Naming assets (files. folder, variables, functions)
  - letters, numbers, underscore
  - dont start with a digit

#### Wednesday
* the event loop (also remember sync operations which will block)
* Node events
* Web and webpack (briefly)
* Observables see https://rxjs.dev and https://rxmarbles.com/
* responding to events and handling errors
* features:
  - see https://caniuse.com/ and https://compat-table.github.io/compat-table/es6/
* node version manager and nvmrc (also .nvmrc)
* the build command
* Express.js for convenient server-side features
* Express architecture: server, index, middleware
* buffers and streams
* review exercise (inc. optional testing)

end of course feedback