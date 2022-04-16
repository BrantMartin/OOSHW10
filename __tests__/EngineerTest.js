const Engineer = require("../Library/Engineer.js");

test("Check Engineer name", function(){
    var testObject = new Engineer("Bryan")
    expect(testObject.name).toBe('Bryan')
})

test("Check Employee ID", function(){
    var testObject = new Engineer("Bryan",123)
    expect(testObject.id).toBe(123)
})

test("Check Employee Email", function(){
    var testObject = new Engineer("Bryan",123 ,'junk@junk.com')
    expect(testObject.email).toBe('junk@junk.com')
})

test("Check Employee GitHub", function(){
    var testObject = new Engineer("Bryan",123 ,'junk@junk.com' ,'FakeHub')
    expect(testObject.github).toBe('FakeHub')
})

test("Check getName", function(){
    var testObject = new Engineer("Bryan")
    expect(testObject.getName()).toBe('Bryan')
})

test("Check getId", function(){
    var testObject = new Engineer("Bryan",123)
    expect(testObject.getId()).toBe(123)
})

test("Check getEmail", function(){
    var testObject = new Engineer("Bryan",123 ,'junk@junk.com')
    expect(testObject.getEmail()).toBe('junk@junk.com')
})

test("Check getGithub", function(){
    var testObject = new Engineer("Bryan",123 ,'junk@junk.com' ,'FakeHub')
    expect(testObject.getGithub()).toBe('FakeHub')
})

test("Check getRole", function(){
    var testObject = new Engineer("Bryan",123 ,'junk@junk.com' ,'FakeHub')
    expect(testObject.getRole()).toBe('engineer')
})