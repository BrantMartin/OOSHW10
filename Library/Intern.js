const Employee = require("./Employee")
class Intern extends Employee{
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github
    }

    getGithub(){
        return this.github
    }
    getRole(){
        return 'intern'
    }
}

module.exports = Intern