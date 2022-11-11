const Model = require ('../Model/Model')
const validateUs = require('../validateNew')

const userHandler = async (req, res) => {
    try{
        //////extract the error from the module validateUs in case a field is not filled it tracks it...
        //call the instatnce tied to the method validating the body... 
        const {error} = validateUs.validateStudent(req.body)
        //////else
        // const {error} = validateUs(req.body)
        if(error){
            res.status(409).json({
                status: 'failed',
                message: error.details[0].message
            })
        }
        const newUser = await Model.create({
            name: req.body.name,
            course: req.body.course,
            institution: req.body.institution,
            married: req.body.married
        })
        res.status(200).json({
            status: 'successful',
            data: newUser
        })
    } catch(error){
        res.status(500).json({
            status: 'failed to create',
            message: error.message
        })
    }
}

    const GetAllUser = async (req, res) => {
        try{
            const AllUser = await Model.find()

            res.status(200).json({
                status: 'success',
                data: AllUser
            })

        } catch(error){
            res.status(500).json({
                status: 'failed',
                message: error.message
            })
        }
    }

    const DeleteOneStudent = async (req, res) => {
        try{
            const userId = req.params.id;
            const DelStud = await Model.findByIdAndDelete(userId)

            res.status(201).json({
                status: 'deleted successfully',
                data: DelStud
            })
        } catch(error){
            res.status(404).json({
                status: 'failed to delete',
                message: error.message
            })
        }
    }


module.exports = {
    userHandler,
    GetAllUser,
    DeleteOneStudent
}