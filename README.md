# Json-Easy-Tranform
![alt text](https://travis-ci.org/nontachaiwebdev/Json-Easy-Tranform.svg?branch=master)

A cool way to transform your raw json data to every format waht you want ?

### Install
with npm
```
npm install easy-json-tranform --save
```

### Basic Usage
example json data
```
const data = {
  name:'John',
  age:30,
  city:"New York",
  age: 20,
  home: {
    home1: 'Home1 Address',
    home2: 'Home2 Address'
  }
}
```

set json format
```
const format = {
  name: { field: 'name' },
  home1: { field: 'home.home1' },
  age: { field: 'age' }
 }
```

use easy-json-transform for slove problem
```
const transform = require('easy-json-tranform')
//ES7
import 'transform' from 'easy-json-tranfrom'

const result = transform(data, format)
```

Result is
```
{
  name: 'John',
  home1: 'Home1 Address',
  age: 20
}
```
### Advance Usage

default value in case that field have not found
```
  const format = {
    name: { field: 'name', defaultValue: 'Unknow user' },
    home1: { field: 'home.home1' },
    age: { field: 'age' }
  }
```

assign other field in case that field have not found
```
  const format = {
    name: { field: 'firstName|| lastName' },
    home1: { field: 'home.home1' },
    age: { field: 'age' }
  }
```

in case default value have not you case add other default with OR operation (||)
```
  const format = {
    name: { field: 'firstName|| midname || lastName' },
    home1: { field: 'home.home1' },
    age: { field: 'age' }
  }
```

### Run example
run for show result on console log
```
npm start
```

