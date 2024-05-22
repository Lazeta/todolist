import { v1 } from "uuid"
import { FilterValuesType, TasksStateType } from "../App"

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    taskId: string
    todolistId: string
}
export type Action2Type = {
    // taskId: string
    type: '2',
    title: string
}

type ActionsType = RemoveTaskActionType | Action2Type;

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            const stateCopy = {...state}
            const tasks = state[action.todolistId];
            const filteredTasks = tasks.filter(t => t.id !== action.taskId)
            stateCopy[action.todolistId] = filteredTasks;
            return stateCopy 
        }
        case '2': {
            return {...state}
        }

        default:
            throw new Error("I don't understand this action type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK', todolistId, taskId }
}

export const addTaskAC = (title: string, todolistId: string ): Action2Type => {
    return { type: '2', title: title }
}

// export const action1AC = (todolistId: string): ActionsType => {
//     return { type: '1', id: todolistId }
// }


// export const action3AC = (id: string, title: string): Action3Type => {
//     return { type: "3", title: title, id: id }
// }

// export const action4AC = (id: string, filter: FilterValuesType): Action4Type => {
//     return { type: "4", filter: filter, id: id }
// }