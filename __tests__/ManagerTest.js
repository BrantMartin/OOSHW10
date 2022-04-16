const Manager = require("../Library/Manager.js");

test("Check Manager name", function(){
    var testObject = new Manager("Bryan")
    expect(testObject.name).toBe('Bryan')
})

test("Check Manager ID", function(){
    var testObject = new Manager("Bryan",123)
    expect(testObject.id).toBe(123)
})

test("Check Manager Email", function(){
    var testObject = new Manager("Bryan",123 ,'junk@junk.com')
    expect(testObject.email).toBe('junk@junk.com')
})

test("Check Manager office number", function(){
    var testObject = new Manager("Bryan",123 ,'junk@junk.com' ,300)
    expect(testObject.officeNumber).toBe(300)
})

test("Check getName", function(){
    var testObject = new Manager("Bryan")
    expect(testObject.getName()).toBe('Bryan')
})

test("Check getId", function(){
    var testObject = new Manager("Bryan",123)
    expect(testObject.getId()).toBe(123)
})

test("Check getEmail", function(){
    var testObject = new Manager("Bryan",123 ,'junk@junk.com')
    expect(testObject.getEmail()).toBe('junk@junk.com')
})

test("Check getOfficeNumber", function(){
    var testObject = new Manager("Bryan",123 ,'junk@junk.com' ,300)
    expect(testObject.getOfficeNumber()).toBe(300)
})

test("Check getRole", function(){
    var testObject = new Manager("Bryan",123 ,'junk@junk.com' ,'FakeHub')
    expect(testObject.getRole()).toBe('manager')
})