# Json-Easy-Tranform
A cool way to transform your raw json data to every format waht you want ?

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
  name: 'name',
  home1: 'home.home1'
  age: 'age'
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
