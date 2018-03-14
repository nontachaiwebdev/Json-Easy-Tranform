const _ = require('lodash')

function jsonTranform(data, format) {
  const isDataArray = Array.isArray(data)
  const prepareData = isDataArray ? data : new Array(data)
  const result = prepareData.map(function (obj, index) {
    return Object.keys(format).reduce(function (result, field, index) {
      const arg = (typeof format[field] === 'object') ? format[field].field : format[field]
      const listReverse = arg.split('||').reverse()
      const orPathResult = listReverse.reduce(function (value, field) {
        const getValue = _.get(obj, field)
        return getValue ? getValue : value
      }, undefined)
      const isArray = Array.isArray(orPathResult)
      const { format: nestFormat, defaultValue } = format[field]
      const isRenewFormatData = isArray && nestFormat
      const reNewFormatData = isRenewFormatData ? jsonTranform(orPathResult, nestFormat) : orPathResult
      const finalValue = reNewFormatData ? reNewFormatData : defaultValue
      const json = { [field]: finalValue }
      return Object.assign({}, result, json)
    },{})
  })
  return isDataArray ? result : result[0]
}

module.exports = jsonTranform
