# Kong Manager with Cypress

This project uses POM （Page Object Model）,test cases are in cypress/e2e, and POM  class are in cypress/pages.

## Project Structure
```plaintext
├── github/                  # GitHub workflow yml file
├── cypress/                 # Cypress tests
│   ├── downloads/           # downloaded files
│   ├── e2e/                 # e2e test cases
│   └── fixtures/            # test data
│   └── pages/               # POM, page files, most of the testing functions are defined here
│   └── screenshots/         # screenshotOnRunFailure
│   └── support/             # global configuration
│   └── videos/              # video about running test cases
├── reports/                 # junit xml reports
├── .gitignore               
├── .prettierignore          
├── .prettierrc              
├── cypress.config.ts        # Cypress configuration
├── docker-compose.yml       
├── package-lock.json
├── package.json             
└── tsconfig.json            
```
## Folder structure - pages
Once there are too many elements, it is necessary to consider placing them in another file，right now I put them all in page files.
```plaintext
├── cypress/                 
│   ├── pages/           
│       ├── gateway-services-page    
│           ├── gateway-service-create.page.ts    #page to create service by typing name and url .etc 
│           ├── gateway-service-detail.page.ts    #page for service detail
│           ├── gateway-services.page.ts          #page that shows all created services
│       ├── routes-page
│           ├── route-create.page.ts              #page to create route by typing name and protocol .etc 
│           ├── route-detail.page.ts              #page for route detail
│           ├── routes.page.ts                    #page that shows all created routes
│       ├── workspace.page.ts                     #once visiting http://localhost:8002 will go to this page

```

## Environment requirements

- Node.js (v18 or higher,Tested with v22.17.1)
- npm (v9 or higher,Tested with 10.9.2)
- Docker
  
## Quick Start

- Install dependencies:
  ```sh
  npm install
  ```

- Run all E2E tests with reports:
  ```sh
  npm run test
  ```

  - Run all E2E tests in Chrome with UI:
  ```sh
  npm run cy:chrome
  ```

  Author:Jason Yu <jasonyu1@163.com>
