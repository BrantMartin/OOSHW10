const Employee = require("../Library/Employee");

test("Check Employee name", function(){
    var testObject = new Employee("Bryan")
    expect(testObject.name).toBe('Bryan')
})

test("Check Employee ID", function(){
    var testObject = new Employee("Bryan",123)
    expect(testObject.id).toBe(123)
})
