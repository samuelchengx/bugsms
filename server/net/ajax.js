import fetch from 'isomorphic-fetch'
import config from '../../config/env'
import {
  concatUrl,
} from '../../utils/urlHelper'

const baseDataPath = `${config.apiServer}/http`

const execFetch = (method, _url, data, headers) => {
  let isGet = method === 'GET'
  let url = isGet
    ? concatUrl(`${baseDataPath}${_url}`, data) : `${baseDataPath}${_url}`

  console.log(`
        [isGet:${isGet}] [url:${url}]
        [data:${JSON.stringify(data)}]
        [headers:${JSON.stringify(headers)}]
  `)

  return fetch(url, {
    method,
    headers: Object.assign({
      'Content-Type': 'application/json',
    }, headers),
    body: isGet ? undefined : JSON.stringify(data),
  })
    .then(res => res.json())
    .then((res) => {
      console.log(`
        [response:${JSON.stringify(res)}]
      `)
      if (res.code !== 0) {
        throw new Error(res.msg)
      }
      return res.data
    })
    .catch((err) => {
      console.error(`
--------Error while fetch--------
        [url:${url}]
        [err:${JSON.stringify(err.message)}]
      `)
      return err
    })
}

export const post = (url, data, headers) => execFetch('POST', url, data, headers)
export const get = (url, data, headers) => execFetch('GET', url, data, headers)
export default null
