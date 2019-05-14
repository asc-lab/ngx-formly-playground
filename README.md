# Angular Formly Playground

Formly Playgoround is a project with list of [Angular Formly](https://github.com/ngx-formly/ngx-formly)  exercises.
Every next exercise add new feature to the previous one.

## Business background

The purpose of the project is build applications form using [Angular Formly](https://github.com/ngx-formly/ngx-formly), which could support requests to Concierge.

Why [Angular Formly](https://github.com/ngx-formly/ngx-formly). From the fist moment it's sure that the form will contain many options and questions. On the main page Formly you can read "The `formly-form` Component and the `FormlyConfig` service are very powerful and bring unmatched maintainability to your applications forms", so why not check if it's true.

## Before exercise one
Application setup 

Task list:
- generate application with [Angular CLI](https://github.com/angular/angular-cli) 
- install [Ngx Formly](https://ngx-formly.github.io/ngx-formly/guide/getting-started)
- use one of UI library in our project, in this project Material2 was used
- to app.module.ts import the FormlyModule and UI (pre-defined types/templates)
- check if app works - run `ng serve` dev server and navigate to `http://localhost:4200/`

In this project
- `home component` was create as navigation page to each exercise
- `angular-material.imports.ts` module was added to collect all [Angular Material](https://material.angular.io/) imports in one shared module
- to import all exercises components with a single statement `index.ts` file was created
- in `app.component.html` file, fixed app-header was added

## Exercise One
Request to Concierge should be divided into sections:
- Order Identification
- Shoppings
- Additional Comments
- Statements

Component [Card](https://material.angular.io/components/card/overview) should be used as section layout.

Task list
- generate component `exercies-one`
- read documentation [custom-formly-wrapper](https://ngx-formly.github.io/ngx-formly/guide/custom-formly-wrapper)
- in `shared/custom-wrappers` folder create `card-wrapper`
- in `app.module.ts` register new custom wrapper
- in component `exercies-one` create "Order Identification" Card using `card-wrapper`
- check if app works

In this project
- in file `app-routing.module.ts` route to component was added
- to import all custom wrappers with a single statement `index.ts` file was created

Below screen of component after adding some custom style. 

<p align="center">
    <img alt="Exercise-one-screen" src="https://raw.githubusercontent.com/asc-lab/ngx-formly-playground/master/readme-images/ex-one%200.png"/>
</p>


## Exercise Two

## Exercise Three

## Exercise Four

## Exercise Five

## Exercise Six

## Seven

## Libraries

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.
- [Angular Material](https://material.angular.io/)
- [Angular Formly](https://github.com/ngx-formly/ngx-formly) & [Angular Material Formly Module](https://ngx-formly.github.io/ngx-formly/ui/material)
- [Angular Flex-Layout](https://github.com/angular/flex-layout)
- [ngx-translate](https://github.com/ngx-translate/core)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
