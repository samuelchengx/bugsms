// to enable es6 syntax in client source
require('babel-register')

const {
  assert,
} = require('chai')

const {
  chk_id,
} = require('../../client/common/validator')


describe('id validation', () => {
  it('should worked well', () => {
    let realId = '13042519880325662x'
    let realIdWithUpperCase = '13042519880325662X'
    let falseId = '130425198803256623'
    assert.equal(chk_id(realId), true)
    assert.equal(chk_id(realIdWithUpperCase), true)
    assert.equal(chk_id(falseId), false)
  })
})
