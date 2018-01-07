## LaFerrari
### Angular 5+ Admin Template

This is a template to facilitate rapid application development based on the Angular CLI and John Papas styleguide. Using this template you will be able to rapidly deploy an application with the most common angular modules already configured as well as extensive linting rules to cover HTML, CSS, and TS to ensure a high level of code quality and consistency.

### Linting

I am a big proponent of linting your application to ensure both quality and consistancy. To this end I have included extensive rules for linting HTML, CSS and TS. You may find these rules to be too restrictive for your preference. If that is the case I highly recommend you disable the offending rule rather than disabling linting entirely.

To fully take advantage of these rules you will want to install linting extensions into your IDE as well as configure pre-commit hooks to check your code for linting errors prior to making any commits. This will noticably slow down your commits but the value this adds is worth the trade off.

Recommened Extensions for Microsoft Visual Studio Code
* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
* [StyleLint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
* [MarkdownLint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

Recommended `.git/hooks/pre-commit`
```bash
npm run lint
```

## Change Log

###  V 0.1.0

* Initalizes Angular using Sass
* Configures directories based on John Papas Styleguide
* Adds Angular Material
* Adds Angular Animations
* Adds Reactive Forms Module
* Configures TSLint rules (WIP)
* Configures Stylelint rules (WIP)
* Configures Markdownlint rules (WIP)
