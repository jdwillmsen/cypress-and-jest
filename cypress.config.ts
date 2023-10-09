import { defineConfig } from 'cypress'
import registerCodeCoverageTasks from "@cypress/code-coverage/task";
import coverageWebpack from "./cypress/coverage.webpack";

export default defineConfig({

  projectId: "fmsxnp",
  
  e2e: {
    'baseUrl': 'http://localhost:4200',
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);
      return config;
    },
  },
  
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      webpackConfig: coverageWebpack
    },
    specPattern: '**/*.cy.ts',
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);
      return config;
    }
  }
})