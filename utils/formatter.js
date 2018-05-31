export function money(num, withoutUnit) {
  let amount = +num
  if (typeof amount === 'number') {
    amount = +amount.toFixed(2)
    let ret = amount.toLocaleString()
    let arr = ret.split('.')
    if (arr[1]) {
      arr[1] = `${arr[1]}00`.slice(0, 2)
      ret = arr.join('.')
    } else {
      ret += '.00'
    }
    return `${withoutUnit ? '' : '¥'}${ret}`
  } else {
    return '---'
  }
}

export function checkNum(number, len) {
  let num = +number
  if (isNaN(num)) { return false }
  // if (Math.floor(num) === num) { return true }
  // return (num.toString().split('.')[1].length) <= len

  if (number.split('.').length > 1) {
    if (Math.floor(num) === num) {
      return number.split('.')[1].length <= len
    } else {
      return (number.split('.')[1].length) <= len
    }
  } else {
    return true
  }
}

export function fixZero(n) {
  let len = n.toString().length
  return (`00${n}`).slice(len > 2 ? -len : -2)
}

export function withPrefix(num) {
  return num > 0 ? `+${num}` : num
}

export function time(seconds) {
  let sec = fixZero(seconds % 60)
  let min = fixZero(Math.floor(seconds / 60) % 60)
  let hour = fixZero(Math.floor(seconds / 60 / 60) % 24)
  let day = fixZero(Math.floor(seconds / 60 / 60 / 24) >>> 0)
  return {
    sec,
    min,
    hour,
    day,
  }
}

export function timeFormatter(date) {
  var y = date.getFullYear()
  var M = date.getMonth() + 1
  var d = date.getDate()
  var h = date.getHours()
  var m = date.getMinutes()
  var s = date.getSeconds()
  var formatnowdate = `${y}-${M}-${d} ${h}:${m}:${s}`
  return formatnowdate
}

export function weekTime(date) {
  let beforeDayDate = ''
  let time = []
  for (var i = 7; i > 0;) {
    let d = (i - 1) * 24 * 3600 * 1000
    beforeDayDate = new Date(date - d)
    for (var j = 0; j < 24;) {
      j = j + 1
      let M = beforeDayDate.getMonth() + 1
      let d = beforeDayDate.getDate()
      time.push(`${M}/${d}`)
    }
    i = i - 1
  }
  return time
}

export function timeFormatConversion(str) {
  return str.replace(/-/g, '/')
}

export function addData(chartsTime, chartsData) {
  let beforeLength = chartsTime.length - chartsData.length
  for (let i = 0; i < beforeLength;) {
    i = i + 1
    chartsData.unshift(chartsData[0])
  }
  return chartsData
}

export function chartDataMes(data) {
  var obj = {
    min: data[0],
    max: data[0],
    len: 0,
  }
  for (var i = 0; i < data.length;) {
    i += 1
    if (obj.max < data[i]) {
      obj.max = data[i]
    }
    if (obj.min > data[i]) {
      obj.min = data[i]
    }
  }
  if (obj.max > 9999) {
    obj.len = -4
    return obj
  }
  if (obj.max > 999) {
    obj.len = 1
    return obj
  }
  if (obj.max > 99) {
    obj.len = 3
    return obj
  } else {
    obj.len = 4
    return obj
  }
}

export function floor(number, decimal_limit = 2) {

  if (!number) return ''

  number = +number
  decimal_limit = +decimal_limit

  if (isNaN(number) || isNaN(decimal_limit)) return ''

  let t = 10 ** Math.floor(decimal_limit)

  return Math.floor(number * t) / t
}

export function hideStr(str, position, sign = '*') {
  let chars = str.split('')
  let length = Math.abs(position)
  if (position > 0) {
    return chars.reduce((ret, char, index) => {
      if (index < length) {
        ret += sign
      } else {
        ret += char
      }
      return ret
    }, '')
  } else {
    return chars.reduceRight((ret, char, index) => {
      if (index < chars.length - length) {
        ret = `${sign}${ret}`
      } else {
        ret = `${char}${ret}`
      }
      return ret
    }, '')
  }
}

export function separate(str, blockLength, separator = ' ') {
  if (blockLength < 1) {
    return str
  }
  let chars = str.split('')
  return chars.reduce((ret, char, index) => {
    ret += char
    if ((index + 1) % blockLength === 0 && index !== str.length - 1) {
      ret += separator
    }
    return ret
  }, '')
}

export function duplicateArr(arr) {
  let temp = [].concat(arr)
  temp.unshift(arr[arr.length - 1])
  return temp.concat(arr[0])
}

export function numTrunArr(starNum) {
  let arr = []
  for (var i = 0; i < starNum;) {
    i += 1
    arr.push(i)
  }
  return arr
}
