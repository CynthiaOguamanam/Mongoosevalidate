const express = require ("express")
const router = express.Router()

const {userHandler, GetAllUser, DeleteOneStudent} = require ('../Handler/Handler')

router 
    .route('/student')
    .post(userHandler)
    .get(GetAllUser)

router
    .route('/student/:id')
    .delete(DeleteOneStudent)

module.exports = router;
