## LaFerrari
### Angular 5+ Admin Template

This is a template to facilitate rapid application development based on the Angular CLI and John Papas styleguide. Using this template you will be able to rapidly deploy an application with the most common angular modules already configured as well as extensive linting rules to cover HTML, CSS, and TS to ensure a high level of code quality and consistency.

### Linting

I am a big proponent of linting your application to ensure both quality and consistancy. To this end I have included extensive rules for linting HTML, CSS and TS. You may find these rules to be too restrictive for your preference; If that is the case I highly recommend you disable the offending rule(s) rather than disable linting entirely.

To fully take advantage of these rules you will want to install linting extensions into your IDE. This will allow you to recieve real time notifications in the IDE when you violate a rule rather than requiring you to manually run the linters.

Recommened Extensions for Microsoft Visual Studio Code

- [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- [StyleLint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
  - To enable stylelint in VSCode do the following:
    - Click `File` > `Preferences` > `Settings`
    - Add the following key value pairs inside the brackets `{ ... }`:
      ```json
      "stylelint.enable": true,
      "css.validate": false,
      "scss.validate": false
      ```
- [MarkdownLint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

However even with real time notifications you will still miss mistakes from time to time. To ensure no code that breaks a linting rule can make it into your GIT repository I also strongly recommend configuring pre-commit hooks to check your code for linting errors prior to making any commits. This will noticably slow down your commits but the value this adds is worth the trade off.

Recommended `.git/hooks/pre-commit` contents

```bash
#!/bin/sh
set -e

npm run lint
```

## Change Log

### V 0.1.0

- Initalizes Angular using Sass
- Configures directories based on John Papas Styleguide
- Adds Angular Material
- Adds Angular Animations
- Adds Reactive Forms Module
- Configures TSLint rules (WIP)
- Configures Stylelint rules (WIP)
- Configures Markdownlint rules (WIP)
