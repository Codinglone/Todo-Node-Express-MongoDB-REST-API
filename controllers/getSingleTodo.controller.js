import { Todo } from "../models/todos.model.js"

export const getSingleTodo = async (request, response) => {
    try {
        if(!request.body.title || !request.body.checked) {
            return response.status(400).send({
                message: "Send all required fields"
            })
        }
        const { id } = request.params
        const result = await Todo.findById(id)
        if(!result) {
           return response.status(404).json({ message: "Todo not found!" })
        }

        return response.status(200).json({
            data: result
        })
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message })
    }
}