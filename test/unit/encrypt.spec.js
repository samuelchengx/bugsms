require('babel-register')
let hex_sha1 = require('../../utils/encrypt').hex_sha1
let {
  assert,
} = require('chai')

describe('encrypt string', () => {
  let key = 'haha'
  let result = '637d1f5c6e6d1be22ed907eb3d223d858ca396d8'
  it(`should encrypt "${key}" with hex_sha1 to get "${result}"`, () => {
    assert.equal(hex_sha1(key), result)
  })
})
