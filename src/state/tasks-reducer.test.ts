import { TasksStateType } from "../App"
import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer } from "./tasks-reducer"
import { addTodolistAC } from "./todolists-reducer"

test('correct task should be deleted from correct array', () => {
    const startState: TasksStateType = {
        todolistId1: [
            { id: '1', title: "HTML", isDone: false },
            { id: '2', title: "CSS", isDone: true },
            { id: '3', title: "SASS", isDone: false },
            { id: '4', title: "JS", isDone: true },
            { id: '5', title: "React", isDone: false },
        ],
        todolistId2: [
            { id: '1', title: "Redax", isDone: false },
            { id: '2', title: "MobX", isDone: true },
            { id: '3', title: "BEM", isDone: false },
            { id: '4', title: "Vite", isDone: true },
            { id: '5', title: "SSH", isDone: false },
            { id: '6', title: "RMR", isDone: false },
            { id: '7', title: "Pattern", isDone: false },
        ]
    }

    const action = removeTaskAC("2", "todolistId2")
    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(5)
    expect(endState["todolistId2"].length).toBe(6)
    expect(endState["todolistId2"].every(t => t.id !== "2")).toBeTruthy()
    expect(endState["todolistId2"][0].id).toBe("1")
    expect(endState["todolistId2"][1].id).toBe("3")
})

test('correct task should be deleted from correct array', () => {
    const startState: TasksStateType = {
        todolistId1: [
            { id: '1', title: "HTML", isDone: false },
            { id: '2', title: "CSS", isDone: true },
            { id: '3', title: "SASS", isDone: false },
            { id: '4', title: "JS", isDone: true },
            { id: '5', title: "React", isDone: false },
        ],
        todolistId2: [
            { id: '1', title: "Redax", isDone: false },
            { id: '2', title: "MobX", isDone: true },
            { id: '3', title: "BEM", isDone: false },
            { id: '4', title: "Vite", isDone: true },
            { id: '5', title: "SSH", isDone: false },
            { id: '6', title: "RMR", isDone: false },
            { id: '7', title: "Pattern", isDone: false },
        ]
    }

    const action = addTaskAC("juce", "todolistId2")
    const endState = tasksReducer(startState, action)

    expect(endState["todolistId2"][0].id).toBeDefined()
    expect(endState["todolistId2"][0].title).toBe("juce")
    expect(endState["todolistId2"][0].isDone).toBe(false)
})

test('status of specified task should be changed', () => {
    const startState: TasksStateType = {
        todolistId1: [
            { id: '1', title: "HTML", isDone: false },
            { id: '2', title: "CSS", isDone: true },
            { id: '3', title: "SASS", isDone: false },
            { id: '4', title: "JS", isDone: true },
            { id: '5', title: "React", isDone: false },
        ],
        todolistId2: [
            { id: '1', title: "Redax", isDone: false },
            { id: '2', title: "MobX", isDone: true },
            { id: '3', title: "BEM", isDone: false },
            { id: '4', title: "Vite", isDone: true },
            { id: '5', title: "SSH", isDone: false },
            { id: '6', title: "RMR", isDone: false },
            { id: '7', title: "Pattern", isDone: false },
        ]
    }

    const action = changeTaskStatusAC("2", "todolistId2", false);
    const endState = tasksReducer(startState, action)

    expect(endState['todolistId2'][1].isDone).toBeFalsy();
    expect(endState['todolistId1'][1].isDone).toBeTruthy();
})

test('title of specified task should be changed', () => {
    const startState: TasksStateType = {
        todolistId1: [
            { id: '1', title: "HTML", isDone: false },
            { id: '2', title: "CSS", isDone: true },
            { id: '3', title: "SASS", isDone: false },
            { id: '4', title: "JS", isDone: true },
            { id: '5', title: "React", isDone: false },
        ],
        todolistId2: [
            { id: '1', title: "Redax", isDone: false },
            { id: '2', title: "MobX", isDone: true },
            { id: '3', title: "BEM", isDone: false },
            { id: '4', title: "Vite", isDone: true },
            { id: '5', title: "SSH", isDone: false },
            { id: '6', title: "RMR", isDone: false },
            { id: '7', title: "Pattern", isDone: false },
        ]
    }

    const action = changeTaskTitleAC("2", "MobX", "todolistId2");
    const endState = tasksReducer(startState, action)

    expect(endState['todolistId2'][1].title).toBe("MobX");
    expect(endState['todolistId1'][1].title).toBe("CSS");
})

test('new property with new array should be added when new todolist is added', () => {
    const startState: TasksStateType = {
        todolistId1: [
            { id: '1', title: "HTML", isDone: false },
            { id: '2', title: "CSS", isDone: true },
            { id: '3', title: "SASS", isDone: false },
            { id: '4', title: "JS", isDone: true },
            { id: '5', title: "React", isDone: false },
        ],
        todolistId2: [
            { id: '1', title: "Redax", isDone: false },
            { id: '2', title: "MobX", isDone: true },
            { id: '3', title: "BEM", isDone: false },
            { id: '4', title: "Vite", isDone: true },
            { id: '5', title: "SSH", isDone: false },
            { id: '6', title: "RMR", isDone: false },
            { id: '7', title: "Pattern", isDone: false },
        ]
    }

    const action = addTodolistAC("title no matter");
    const endState = tasksReducer(startState, action)

    const keys = Object.keys(endState)
    const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2")
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3)
    expect(endState[newKey]).toEqual([])
})