'use strict'

var tap = require('tap')
var repackContact = require('../lib/repack-contact')

tap.throws(
  function () {
    repackContact()
  },
  {message: 'Missing required input: data object'},
  'Throws if data object not supplied'
)

tap.test('It returns expected result', function (test) {
  var contact = require('./data/dsf.json')
  var expected = require('./data/unwrapped-contact.json')
  var result = repackContact(contact.RESULT.HOV)
  tap.equal(JSON.stringify(result), JSON.stringify(expected), 'Contact repacked OK')
  test.done()
})
