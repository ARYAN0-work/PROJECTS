const express = require('express');
const {getAlltasks,getTask,createTask,deleteTask,updateTask} = require('../controllers/controller')
const router = express.Router()

router.route('/').get(getAlltasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router
