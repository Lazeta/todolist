import { TasksStateType, TodolistType } from "../App"
import { addTodolistAC, todolistsReducer } from "./todolists-reducer";
import { tasksReducer } from "./tasks-reducer";

test('its should be equals', () => {
    const startTasksState: TasksStateType = {};
    const startTodolistState: Array<TodolistType> = [];

    const action = addTodolistAC('new todolist')

    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistState = todolistsReducer(startTodolistState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFormTodolists = endTodolistState[0].id

    expect(idFromTasks).toBe(action.todolistId);
    expect(idFormTodolists).toBe(action.todolistId);
})