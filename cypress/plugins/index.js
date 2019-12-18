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

const fs = require('fs-extra')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber()),
  on('task', {
     failed: require('cypress-failed-log/src/failed')(),
   }),
  on('task', require('@cypress/code-coverage/task'))
     //Browser launch

  function processConfigName(on, config) {

    const file = config.env.name || "default"
    return getConfigFile(file).then(function (file) {
      //return file object
      return file;
    })
  }

  function getConfigFile(file) {
    const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
    return fs.readJson(pathToConfigFile)
  }

  //Return the configuration file details
  return processConfigName(on, config);
}