const Employee = require("../Library/Employee");

test("Check Employee name", function(){
    var testObject = new Employee("Bryan")
    expect(testObject.name).toBe('Bryan')
})

test("Check Employee ID", function(){
    var testObject = new Employee("Bryan",123)
    expect(testObject.id).toBe(123)
})

test("Check Employee email", function(){
    var testObject = new Employee("Bryan",123 ,'junk@junk.com')
    expect(testObject.email).toBe('junk@junk.com')
})

test("Check getName", function(){
    var testObject = new Employee("Bryan")
    expect(testObject.getName()).toBe('Bryan')
})

test("Check Employee ID", function(){
    var testObject = new Employee("Bryan",123)
    expect(testObject.getId()).toBe(123)
})

test("Check Employee email", function(){
    var testObject = new Employee("Bryan",123 ,'junk@junk.com')
    expect(testObject.getEmail()).toBe('junk@junk.com')
})