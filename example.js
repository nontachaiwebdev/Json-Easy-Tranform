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
  }
]


const format = {
  Title: 'title||description',
  Link: 'extra.link.linka',
  Hello: 'blog.a||blog',
  name: 'list1',
  clear: 'xxx'
}

const defaultValue = {
  Title: 'Test'
}

console.log(jsonTranform(data, format, defaultValue))
