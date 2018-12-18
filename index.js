#!/usr/bin/env node
// @see https://dev.to/sandeepkamboj12/parse-json-string-without-jsonparse-and-eval-471g
const fs = require('fs')

let toJson = letsHopeItsJson =>
  (new Function( "return " + letsHopeItsJson) )()

process.stdin
  .on('data', e => {
    const str = e.toString().trim()
    const obj = toJson(str)
    const newObj = {}

    Object
      .keys(obj)
      .sort()
      .forEach(key =>
        newObj[key] = obj[key])

    console.log(newObj)
  })
  .pipe(fs.createWriteStream('/dev/null'))
