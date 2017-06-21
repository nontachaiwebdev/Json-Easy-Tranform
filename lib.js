const jsonTranform = function jsonTranform(data, format) {
  return data.map((obj, index) => {
    const data = Object.keys(format).reduce((result, field, index) => {
      const pathIndex = format[field].split('.')
      const value = pathIndex.reduce((obj, key) => {
	return obj[key]
      },obj)
      const json =  { [field] : value}
      return Object.assign(result, json)
    },{})
    return data 
  }) 
}

module.exports = jsonTranform
