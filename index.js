'use strict'

var repackContact = require('./lib/repack-contact')

function unwrapParents (dsf) {
  if (!dsf) {
    throw new Error('Missing required input: dsf object')
  }
  if (!dsf.RESULT) {
    throw new Error('Malformed dsf object')
  }

  var parents = dsf.RESULT.FOR || []
  var foreldre = []

  if (Array.isArray(parents)) {
    parents.forEach(function (parent) {
      foreldre.push(repackContact(parent))
    })
  } else {
    foreldre.push(repackContact(parents))
  }

  return foreldre
}

module.exports = unwrapParents
