## Install angular-cli
[link] (https://cli.angular.io/).

`> npm install -g angular-cli`

## Create project with angular-cli
`> ng new <project-name>`

`> cd <project-name>`

`> ng serve`

## Install bootstrap
[link] (https://github.com/angular/angular-cli#support-for-offline-applications).

`> npm install bootstrap@next`

modify angular-cli.json file:

Then add the needed script files to apps[0].scripts:

"scripts": [

  "../node_modules/jquery/dist/jquery.js",

  "../node_modules/tether/dist/js/tether.js",

  "../node_modules/bootstrap/dist/js/bootstrap.js"

],

Finally add the Bootstrap CSS to the apps[0].styles array:.

"styles": [

  "../node_modules/bootstrap/dist/css/bootstrap.css",

  "styles.css"

],

## Install ng-bootstrap

[link] (https://ng-bootstrap.github.io/#/getting-started).

`> npm install --save @ng-bootstrap/ng-bootstrap`

## Install font-awesome

[link] (https://www.npmjs.com/package/font-awesome)

`> npm install font-awesome`

Then add the Font awesome CSS to the apps[0].styles array:

"styles": [

  "../node_modules/font-awesome/css/font-awesome.min.css"
  
],

# Webapp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
