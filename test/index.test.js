const expect = require("chai").expect
const jsonTranform = require('../lib')

const array = [
  {
    title : "title1",
    description: "description1",
    blog: "This is a blog.",
    date: "11/4/2013",
    extra : {
	     link : 'http://google.com'
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
    title : "title2",
    description: "description2",
    blog: "This is a blog.",
    date: "11/4/2013",
    extra : {
	     link : 'http://google.com'
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

const object = {
  title : "title1",
  description: "description1",
  blog: "This is a blog.",
  date: "11/4/2013",
  extra : {
     link : 'http://google.com'
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

describe("Tranform Array Of Objects", function() {
  describe("Basic Format", function() {
    it("Should return correct format object", function() {
      const format = {
        Title: 'title',
        description: 'description'
      }
      const result = jsonTranform(array, format)
      const expected = [
        {
          Title: 'title1',
          description: 'description1' },
        {
          Title: 'title2',
          description: 'description2'
        }
      ]
      expect(result).to.deep.equal(expected)
    })
    it("Should return undefined if not found value", function() {
      const format = {
        Title: 'title',
        description: 'description',
        test: 'test'
      }
      const result = jsonTranform(array, format)
      const expected = [
        {
          Title: 'title1',
          description: 'description1',
          test: undefined
        },
        {
          Title: 'title2',
          description: 'description2',
          test: undefined
        }
      ]
      expect(result).to.deep.equal(expected)
    })
  })
  describe("Nest path Format", function() {
    it("Should return correct format object", function() {
      const format = {
        Title: 'title',
        description: 'description',
        link: 'extra.link'
      }
      const result = jsonTranform(array, format)
      const expected = [
        {
          Title: 'title1',
          description: 'description1',
          link: 'http://google.com'
        },
        {
          Title: 'title2',
          description: 'description2',
          link: 'http://google.com'
        }
      ]
      expect(result).to.deep.equal(expected)
    })
    it("Should return undefined if not found value", function() {
      const format = {
        Title: 'title',
        description: 'description',
        link: 'extra.link',
        test: 'test.test.test'
      }
      const result = jsonTranform(array, format)
      const expected = [
        {
          Title: 'title1',
          description: 'description1',
          link: 'http://google.com',
          test: undefined
        },
        {
          Title: 'title2',
          description: 'description2',
          link: 'http://google.com',
          test: undefined
        }
      ]
      expect(result).to.deep.equal(expected)
    })
  })
})

describe("Tranform Objects", function() {
  describe("Basic Format", function() {
    it("Should return correct format object", function() {
      const format = {
        Title: 'title',
        description: 'description'
      }
      const result = jsonTranform(object, format)
      const expected = {
        Title: 'title1',
        description: 'description1'
      }

      expect(result).to.deep.equal(expected)
    })
    it("Should return undefined if not found value", function() {
      const format = {
        Title: 'title',
        description: 'description',
        test: 'test'
      }
      const result = jsonTranform(object, format)
      const expected = {
        Title: 'title1',
        description: 'description1',
        test: undefined
      }
      expect(result).to.deep.equal(expected)
    })
  })
  describe("Nest path Format", function() {
    it("Should return correct format object", function() {
      const format = {
        Title: 'title',
        description: 'description',
        link: 'extra.link'
      }
      const result = jsonTranform(object, format)
      const expected = {
        Title: 'title1',
        description: 'description1',
        link: 'http://google.com'
      }

      expect(result).to.deep.equal(expected)
    })
    it("Should return undefined if not found value", function() {
      const format = {
        Title: 'title',
        description: 'description',
        test: 'test.test.test'
      }
      const result = jsonTranform(object, format)
      const expected = {
        Title: 'title1',
        description: 'description1',
        test: undefined
      }
      expect(result).to.deep.equal(expected)
    })
  })
})
