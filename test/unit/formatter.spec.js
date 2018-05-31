require('babel-register')

const {
  assert,
  expect,
} = require('chai')

const {
  fixZero,
  money,
  withPrefix,
  time,
  hideStr,
  separate,
} = require('../../utils/formatter')

describe('fixZero', () => {
  it('should add 0 as prefix if the number is less than 10, ignore the negative numbers', () => {
    expect(fixZero(1)).equal('01', 'woops!')
    expect(fixZero(12)).equal('12', 'woops!')
    expect(fixZero(123)).equal('123', 'woops!')
    expect(fixZero(-5)).equal('-5', 'woops!')
  })
})

describe('time', () => {
  it('should return corret data', () => {
    assert.deepEqual(time(100), {
      sec: '40',
      min: '01',
      hour: '00',
      day: '00',
    })
    assert.deepEqual(time(3601), {
      sec: '01',
      min: '00',
      hour: '01',
      day: '00',
    })
    assert.deepEqual(time((3600 * 24) + 10), {
      sec: '10',
      min: '00',
      hour: '00',
      day: '01',
    })
  })
})

describe('money', () => {
  it('should return the money with ¥ as it\'s prefix', () => {
    assert.equal(money(10), '¥10.00')
    assert.equal(money(9.2871), '¥9.29')
    assert.equal(money(123123.2), '¥123,123.20')
    assert.equal(money('09.2871'), '¥9.29')
    assert.equal(money('-09.2871'), '¥-9.29')
  })

  it('can return the money without ¥', () => {
    assert.equal(money(10, true), '10.00')
    assert.equal(money(9.2841, true), '9.28')
  })
})


describe('withPrefix', () => {
  it('should return the number with sign symbol', () => {
    assert.equal(withPrefix(20), '+20')
    assert.equal(withPrefix(-20), '-20')
  })
})

describe('hide string', () => {
  it('should return string like ************1111', () => {
    let str = '8921348198263418'
    assert.equal('************3418', hideStr(str, -4))
    assert.equal('****348198263418', hideStr(str, 4))
  })
})

describe('separate string', () => {
  it('should return 8921 3481 9826 3418', () => {
    let str = '8921348198263418'
    assert.equal('8921 3481 9826 3418', separate(str, 4))
  })
})

