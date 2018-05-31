import fetch from 'isomorphic-fetch'

const execFetch = (method, _url, data) => fetch(_url, {
  method,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': '',
  },
  body: JSON.stringify(data),
})
    .then(res => res.json())
    .then((res) => {
      if (res.code === 0) {
        return res.data
      }
      if (res.code === 800002) {
        // token 过期了
        if (window.wx && window.location.reload) {
          window.location.reload()
        } else {
          throw new Error(res.msg)
        }
      } else {
        throw new Error(res.msg)
      }
    })

export default{
  execFetch,
}
