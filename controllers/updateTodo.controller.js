import { Todo } from "../models/todos.model.js";

export const updateTodoController = async (request, response) => {
    try {
        if(!request.body.title || !request.body.checked) {
            return response.status(400).send({
                message: "Send all required fields: title, checked"
            })
        }
        const { id } = request.params
        const result = await Todo.findByIdAndUpdate(id, request.body)

        if(!result) {
            return response.status(500).send({ message: "Something went wrong" })
        }
        return response.status(200).send({ message: "Todo Updated successfully!" })
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message})
    }
}