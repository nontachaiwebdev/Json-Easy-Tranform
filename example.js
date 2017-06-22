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


const format = {
  Title: {
    field: 'title||description',
    defaultValue: 'Default' 
  },
  Link: { field: 'extra.link.linka' },
  Hello: { field: 'blog.a||blog' },
  name: { field: 'list1' },
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
