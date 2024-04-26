# Summary
This mobile-first portfolio website gives users an overview of my projects, studies, and internships.

# Technology Stack
The technologies used in this project are:

* Frontend: [HTML](https://www.w3.org/TR/html52/), [SCSS](https://sass-lang.com/), [TypeScript](https://www.typescriptlang.org/)
* Frontend framework: [Angular CLI](https://github.com/angular/angular-cli)
* UI component library: [Angular Material](https://material.angular.io/)
* Version control system: [Git](https://git-scm.com/)
* Git repository hosting: [Github](http://github.com/)
* Data source for showcasing my GitHub profile: [GitHub REST API v4](https://developer.github.com/v4/)

# File Structure
The code for this web application was developed, versioned, and managed using Git. A GitHub repository was used for storing the application code online. This is a quick overview of the files:

* dist: the compiled code/libraries meant for production
* node_modules: libraries and dependencies for packages, used by Node package manager
* src: files to build and develop the project (original source files), before being compiled into fewer files to dist/ directory
  * components: e. g. login and search
  * assets: e.g. logo, avatar picture
  * environments: environment for production
  * models: interfaces for the user, repository, and login-credentials
  * services: for making GitHub REST API calls and exams (hide and show certain elements)
  * pages: includes all of the application HTML pages
  * stylesheets: styling of the application
  * main.ts: bootstraps the application (it loads everything and controls the startup of the application)
  * index.thml: starting point of the application (JavaScript code for inserting reusable components, login functionality, Express)
* .gitignore: text file that tells Git which files or folders to ignore in a project
* angular.json: provides workspace-wide and project-specific configuration defaults for build and development tools provided by the Angular CLI
* package.json: provides metadata of the project as well as handles the dependency management with Node package manager

# Deployment
The website can be deployed as follows:
1. Add ghpages dependencies: ng add angular-cli-ghpages
2. Install needed dependencies if an error appears
3. Build & deploy the application: ng deploy --cname=johannesstroebele.com

# Contact
Please contact me if you have any questions or recommendations for improvement: stroebele.j@gmail.com
