const jsonTranform = function jsonTranform(data, format) {
  return data.map((obj, index) => {
    const data = Object.keys(format).reduce((result, field, index) => {
      const orPath = (format[field].field).split('||').reverse()
      const orPathResult = orPath.reduce((value, field) => {
        const pathIndex = field.split('.')
        const returnValue = pathIndex.reduce((obj, key) => {
	  return obj[key]
        },obj)
	return returnValue ? returnValue : value
      }, undefined)     
      const finalValue = orPathResult ? orPathResult : format[field].defaultValue
      const json =  { [field] : finalValue}
      return Object.assign(result, json)
    },{})
    return data
  }) 
}

module.exports = jsonTranform
