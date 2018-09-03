const moment = require('moment')

const a = function(state, payload) {
  return [...state, payload]
}
const b = a([{ a: 1 }, { a: 2 }], { a: 2 })
for (const key in b[0]) {
  console.log(key)
}

const d = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(d)
