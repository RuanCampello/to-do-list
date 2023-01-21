const express = require('express');
const router = express.Router();
const tasksController = require('./controllers/tasksController');
const taskMiddlewares = require('./middlewares/taskMiddlewares');

router.get('/tasks', tasksController.getAll);
router.post('/tasks', taskMiddlewares.validateFieldTitle, tasksController.addTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', 
	taskMiddlewares.validateFieldTitle, 
	taskMiddlewares.validateFieldStatus, 
	tasksController.updateTask);

module.exports = router;