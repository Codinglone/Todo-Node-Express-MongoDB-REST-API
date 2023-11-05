import { Todo } from "../models/todos.model.js";

export const deleteTodoController = async (request, response) => {
    try {
        if(!request.body.title || !request.body.checked){
            return response.status(400).send({
                message: "Send all required fields: title, checked"
            })
        }
        const { id } = request.params
        const result = await Todo.findByIdAndDelete(id)
        if(!result){
            response.status(404).json({ message: "Book not found!" })
        }

        return response.status(200).send({ message: "Book deleted successfully" })
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message })
    }
}