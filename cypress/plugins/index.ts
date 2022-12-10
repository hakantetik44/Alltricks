/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
import '@shelex/cypress-allure-plugin'
const browserify = require('@cypress/browserify-preprocessor')
const cucumber = require('cypress-cucumber-preprocessor').default
const resolve = require('resolve')

/// <reference types=”@shelex/cypress-allure-plugin” />

// @ts-ignore
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {

    allureWriter(on, config); return config; };
module.exports = (on, config) => {
    const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
    }

    allureWriter(on, config);
    on('file:preprocessor', cucumber(options))
}



module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};