const jsonTranform = require('./lib')
const data = [
  {
    title : "title1",
    description: "description1",
    blog: "This is a blog.",
    date: "11/4/2013",
    extra : {
	link : {
	  linka : 'http://google.com'
	}
    },
    list1:[
	{
	    name:"mike"
	}
    ],
    list2:[
	{
	    item: "thing"
	}
    ],
    clearMe: "text"
  },
  {
    title : "title1",
    description: "description1",
    blog: "This is a blog.",
    date: "11/4/2013",
    extra : {
	link : {
	  linka : 'http://google.com'
	}
    },
    list1:[
	{
	    name:"mike"
	}
    ],
    list2:[
	{
	    item: "thing"
	}
    ],
    clearMe: "text"
  }

]


const testData = {
  name: 'nontachai',
  age:{
    value: '23'
  }
}

const testFormat = {
  firstname: 'name',
  something: 'age.value'
}

const format = {
  Title: {
    field: 'title||description',
    defaultValue: 'Default' 
  },
  Link: { field: 'extra.link.linka' },
  Hello: { field: 'blog.a||blog' },
  name: 'list3||date',
  clear: { 
    field: 'xxx',
    defaultValue: [10,90]
  },
  test: { 
    field: 'sd.aasas.asasas',
    defaultValue: 'default'
  }
}


console.log(jsonTranform(data, format))
console.log(jsonTranform(testData, testFormat))

