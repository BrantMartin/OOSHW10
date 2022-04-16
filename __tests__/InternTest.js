const Intern = require("../Library/Intern.js");

test("Check Intern name", function(){
    var testObject = new Intern("Bryan")
    expect(testObject.name).toBe('Bryan')
})

test("Check Intern ID", function(){
    var testObject = new Intern("Bryan",123)
    expect(testObject.id).toBe(123)
})

test("Check Intern Email", function(){
    var testObject = new Intern("Bryan",123 ,'junk@junk.com')
    expect(testObject.email).toBe('junk@junk.com')
})

test("Check Intern school name", function(){
    var testObject = new Intern("Bryan",123 ,'junk@junk.com' ,'UCLA')
    expect(testObject.schoolName).toBe('UCLA')
})

test("Check getName", function(){
    var testObject = new Intern("Bryan")
    expect(testObject.getName()).toBe('Bryan')
})

test("Check getId", function(){
    var testObject = new Intern("Bryan",123)
    expect(testObject.getId()).toBe(123)
})

test("Check getEmail", function(){
    var testObject = new Intern("Bryan",123 ,'junk@junk.com')
    expect(testObject.getEmail()).toBe('junk@junk.com')
})

test("Check getSchoolName", function(){
    var testObject = new Intern("Bryan",123 ,'junk@junk.com' ,'UCLA')
    expect(testObject.getSchoolName()).toBe('UCLA')
})

test("Check getRole", function(){
    var testObject = new Intern("Bryan",123 ,'junk@junk.com' ,'FakeHub')
    expect(testObject.getRole()).toBe('intern')
})