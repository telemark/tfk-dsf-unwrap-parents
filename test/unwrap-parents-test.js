'use strict'

var tap = require('tap')
var unwrapParents = require('../index')

tap.throws(
  function () {
    unwrapParents()
  },
  {message: 'Missing required input: dsf object'},
  'Throws if contact object not supplied'
)

tap.throws(
  function () {
    var malformed = require('./data/malformed.json')
    unwrapParents(malformed)
  },
  {message: 'Malformed dsf object'},
  'Throws if contact object is malformed'
)

tap.test('It returns expected result', function (test) {
  var dsf = require('./data/dsf.json')
  var expected = require('./data/unwrapped-parents.json')
  var result = unwrapParents(dsf)
  tap.equal(JSON.stringify(result), JSON.stringify(expected), 'Parents unwrapped OK')
  test.done()
})
