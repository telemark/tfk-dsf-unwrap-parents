'use strict'

const repackContact = require('./lib/repack-contact')

module.exports = dsf => {
  if (!dsf) {
    throw new Error('Missing required input: dsf object')
  }
  if (!dsf.RESULT) {
    throw new Error('Malformed dsf object')
  }

  const parents = dsf.RESULT.FOR || []
  let foreldre = []

  if (Array.isArray(parents)) {
    foreldre = parents.map(forelder => repackContact(forelder))
  } else {
    foreldre.push(repackContact(parents))
  }

  return foreldre
}
