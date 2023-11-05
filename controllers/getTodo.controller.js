import { Todo } from "../models/todos.model.js";

export const getTodos = async (request, response) => {
    try {
        if(!request.body.title || !request.body.checked){
            return response.status(400).send({
                message: "Send all required fields: title, checked"
            })
        }
        const result = await Todo.find()
        response.status(200).json({
            data: result
        })
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message })
    }
}