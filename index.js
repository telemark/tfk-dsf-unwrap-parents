'use strict'

var repackContact = require('./lib/repack-contact')

function unwrapParents (dsf) {
  if (!dsf) {
    throw new Error('Missing required input: dsf object')
  }
  if (dsf.RESULT && dsf.RESULT.FOR) {
    var parents = []
    dsf.RESULT.FOR.forEach(function (parent) {
      parents.push(repackContact(parent))
    })
    return parents
  } else {
    throw new Error('Malformed dsf object')
  }
}

module.exports = unwrapParents
