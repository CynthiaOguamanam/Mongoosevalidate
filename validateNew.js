//this is done externally in this file for reuseable purpose
//import the validator library
const joi = require('@hapi/joi')

//create your validator function
//in charge of validating input...
const validateStudent = (data) => {
    
const studentConstraint = joi.object({
    //when you have two or more methods in one line is a METHOD CHAIN...
    //e.g your router, ypour , .connect******(url).then***.catch etc
    name: joi.string().required().min(3).max(35),
    course: joi.string().required(),
    institution: joi.string().required(),
    married: joi.boolean().required()
})
return studentConstraint.validate(data)
}

module.exports.validateStudent = validateStudent
