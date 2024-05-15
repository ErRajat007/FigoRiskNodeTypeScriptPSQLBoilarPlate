<<<<<<< HEAD
# Node Boiler Plate

## Check List
- [x] Typescript
- [x] Expressjs
- [x] [Helmet](https://github.com/helmetjs/helmet) nodejs package for security HTTP response headers
- [x] Swagger Spec
- [x] Testing using Chaijs, mocha, sinonjs
- [x] Code coverage
- [x] Eslint, Prettier
- [x] Commit and push hooks
- [x] Sequelize database setup with SSL in production
- [x] Dockerfile
- [x] Azure CI pipeline
- [x] Health check route
- [x] Return git commit id in HTTP response header
- [x] logs with transaction id
- [x] kubernetes deployment config files
- [x] Validation of request body using [Zod](https://zod.dev/)
- [x] Updated README file for the project
- [x] Logs with transaction id
- [x] VsCode debugger configuration
- [ ] Integrate [Azure application insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/nodejs)
- [ ] [Gitops ready for AKS](https://learn.microsoft.com/en-us/azure/azure-arc/kubernetes/tutorial-use-gitops-flux2?tabs=azure-cli)

## Assign for intern
- Testing
  - what is Testing
- dockerfile
  - what is Dockerfile


# Node.js Boilerplate

This Node.js boilerplate provides a starting point for building backend applications with Express, TypeScript, and other popular tools and libraries.
## Folder Structure

node-boilerplate/  
├── src/  
│   ├── controllers/  
│   ├── database/  
│   │   ├── config/  
│   │   ├── migrations/  
│   │   ├── models/  
│   │   └── seeders/  
│   ├── middlewares/  
│   ├── routes/  
│   ├── services/  
│   ├── utils/  
│   └── index.ts  
├── tests/  
│   ├── controllers/  
│   ├── middlewares/  
│   ├── models/  
│   ├── routes/  
│   ├── services/  
│   └── utils/  
├── .env.example  
├── .eslintignore  
├── .eslintrc.json  
├── .gitignore  
├── .nvmrc  
├── .prettierignore  
├── .prettierrc.json  
├── Dockerfile  
├── azure-pipelines.yml  
├── package-lock.json  
├── package.json  
└── tsconfig.json  

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file using the `.env.example` file as a reference
4. Run `npm start` to start the application

## Example URL

You can access the example route at `http://localhost:3000/example` and the health-check route at `http://localhost:3000/health`.

## Commands

- `npm start`: Start the application in development mode with hot-reloading
- `npm run build`: Build the application for production
- `npm run serve`: Start the application in production mode
- `npm run lint`: Lint the code using ESLint
- `npm run lint:fix`: Fix lint issues using ESLint
- `npm run test`: Run tests using Mocha

## Contributing

Before pushing your code or making a pull request, make sure to run `npm run lint:fix` and `npm run test` to ensure the code adheres to the project's standards and passes all tests.

## SSL Connection for Production Database

Make sure to configure your Sequelize connection settings in `src/database/config` to use SSL for connecting to the production database.

## Husky

This project uses Husky to run `lint:fix` before every commit and `npm run test` before every code-push. Make sure to set it up as per the Husky documentation.


## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js v16 or later
- npm (included with Node.js)
- Docker (optional)

## Getting Started

1. Clone this repository:
  -

2. Change to the project directory:
  -

3. Install dependencies:
  - npm install

4. Start the development server:
  - npm run dev

## Building and Running in Production

1. Build the project:
  - npm run build

2. Start the production server:
  npm start

## Running Tests

To run tests, use the following command:
`- npm test

## Using Docker (optional)

1. Build the Docker image:
  - docker build -t node-boilerplate .

2. Run the Docker container:
  - docker run -p 3000:3000 node-boilerplate

## Customizing the Boilerplate

This boilerplate includes example files for controllers, middlewares, models, routes, and services. You can use these files as templates for your own application components. Replace or update the example files as needed to fit your project requirements.

## Shortcut keys for debugging in VS Code.
 - Continue (F5)  
 - Step Over (F10)  
 - Step Into (F11)  
 - Step Out (Shift+F11)  
 - Restart (Ctrl+Shift+F5)  
 - Stop (Shift + F5)  

## License

[MIT](LICENSE)
=======
# Figorisk_Backend



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.hiteshi.com/admin/projects/figorisk/figorisk_backend.git
git branch -M master
git push -uf origin master
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.hiteshi.com/figorisk/figorisk_backend/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
>>>>>>> 67c2391fc85c2e8dddb1a20abe9995e1a9bffef3
