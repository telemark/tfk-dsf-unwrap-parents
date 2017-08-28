'use strict'

module.exports = data => {
  if (!data) {
    throw new Error('Missing required input: data object')
  }
  const template = require('./data/template.json')

  Object.keys(template).forEach(function (key) {
    template[key] = data[key] || ''
  })

  return JSON.parse(JSON.stringify(template))
}
