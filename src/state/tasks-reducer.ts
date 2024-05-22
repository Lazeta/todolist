import { v1 } from "uuid"
import { FilterValuesType, TasksStateType } from "../App"

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    taskId: string
    todolistId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK',
    title: string
    todolistId: string
}
export type ChangeTaskStatusActionsType = {
    type: 'CHANGE-TASK-STATUS',
    taskId: string
    isDone: boolean
    todolistId: string
}

type ActionsType = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusActionsType;

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            const stateCopy = {...state}
            const tasks = state[action.todolistId];
            const filteredTasks = tasks.filter(t => t.id !== action.taskId)
            stateCopy[action.todolistId] = filteredTasks;
            return stateCopy 
        }
        case 'ADD-TASK': {
            const stateCopy = {...state}
            const tasks = stateCopy[action.todolistId]
            const newTask = { id: v1(), title: action.title, isDone: false}
            const newTasks = [newTask, ...tasks]
            stateCopy[action.todolistId] = newTasks;
            return stateCopy
        }

        default:
            throw new Error("I don't understand this action type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK', todolistId, taskId }
}

export const addTaskAC = (title: string, todolistId: string ): AddTaskActionType => {
    return { type: 'ADD-TASK', title: title, todolistId }
}

export const changeTaskStatus = (taskId: string, todolistId: string, isDone: boolean): ChangeTaskStatusActionsType => {
    return { type: 'CHANGE-TASK-STATUS', isDone, taskId, todolistId }
}


// export const action3AC = (id: string, title: string): Action3Type => {
//     return { type: "3", title: title, id: id }
// }

// export const action4AC = (id: string, filter: FilterValuesType): Action4Type => {
//     return { type: "4", filter: filter, id: id }
// }