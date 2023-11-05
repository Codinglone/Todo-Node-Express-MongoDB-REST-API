import express from "express"
import { welcomeController } from "../controllers/welcome.controller.js";
import { addTodo } from "../controllers/addTodo.controller.js";
import { updateTodoController } from "../controllers/updateTodo.controller.js"; 
import { deleteTodoController } from "../controllers/deleteTodo.controller.js";
import { getTodos } from "../controllers/getTodo.controller.js";
import { getSingleTodo } from "../controllers/getSingleTodo.controller.js";
export const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next()
})

router.get('/', getTodos)
router.get('/:id', getSingleTodo)
router.post('/', addTodo)

router.put('/:id', updateTodoController)
router.delete('/:id', deleteTodoController)