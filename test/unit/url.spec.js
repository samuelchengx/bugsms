// to enable es6 syntax in client source
require('babel-register')

const {
  assert,
} = require('chai')

const {
  concatUrl,
  getParams,
} = require('../../utils/urlHelper')

// concatUrl 函数的测试
describe('concatUrl', () => {
  let host = 'http://localhost'

  it(`should remix ${host} with { name: 1 } to ${host}?name=1`, () => {
    assert.equal(
      concatUrl(host, { name: 1 }),
      `${host}?name=1`,
    )
  })

  it(`should remix ${host}?name=1 with { name: 2 } to ${host}?name=2`, () => {
    assert.equal(
      concatUrl(`${host}?name=1`, { name: 2 }),
      `${host}?name=2`,
    )
  })

  it(`should remix ${host}?name=1 with { name: 2, age:3 } to ${host}?name=2&age=3`, () => {
    assert.equal(
      concatUrl(`${host}?name=1`, { name: 2, age: 3 }),
      `${host}?name=2&age=3`,
    )
  })
})

describe('getParams', () => {
  let host = 'http://localhost'

  it('should get params from the uri queries', () => {
    assert.deepEqual(
      getParams(`${host}?name=marsoln&age=29`), {
        action: host,
        hash: null,
        params: {
          name: 'marsoln',
          age: '29',
        },
      },
    )

    assert.deepEqual(
      getParams(`${host}#route/index`), {
        action: host,
        hash: ['#route/index'],
        params: {},
      },
    )

  })
})
