import { Todo } from "../models/todos.model.js";
export const addTodo =  async (request, response) => {
    try {
        if(!request.body) {
            return response.status(400).send({error: 'Request body missing'}) 
          }
          console.log(request.body.title);
        if(!request.body.title || !request.body.checked){
            return response.status(400).send({
                message: "Send all required fields: title, checked"
            })
        }
        const newTodo = {
            title: request.body.title,
            checked: request.body.checked
        }

        const book = await Todo.create(newTodo)
        return response.status(201).send(book)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
}