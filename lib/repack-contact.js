'use strict'

function repackContact (data) {
  if (!data) {
    throw new Error('Missing required input: data object')
  }
  var template = require('./data/template.json')

  Object.keys(template).forEach(function (key) {
    template[key] = data[key] || ''
  })

  return JSON.parse(JSON.stringify(template))
}

module.exports = repackContact
