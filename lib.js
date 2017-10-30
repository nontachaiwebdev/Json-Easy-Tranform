const _ = require('lodash')

const jsonTranform = function jsonTranform(data, format) {
  const tranformFunc = tranform(format)
  return data.constructor === Array ? tranformFunc(data) : tranformFunc(new Array(data))[0] 
}

const tranform = function (format) {
  return function(data) {
    return data.map(function (obj, index) {
      const data = Object.keys(format).reduce(function (result, field, index) {
        const arg = (typeof format[field] === 'object') ? format[field].field : format[field]
        const orPath = arg.split('||').reverse()
        const orPathResult = orPath.reduce(function (value, field) {
	  const getValue = _.get(obj, field)
	  return getValue ? getValue : value
        }, undefined)     
        const finalValue = orPathResult ? orPathResult : format[field].defaultValue
        var json =  {}
	json[field] = finalValue
        return Object.assign(result, json)
      },{})
      return data
    })
  }
}

module.exports = jsonTranform
