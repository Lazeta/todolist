import { v1 } from "uuid"
import { TasksStateType } from "../App"
import { addTaskAC, removeTaskAC, tasksReducer } from "./tasks-reducer"

test('correct task should be deleted from correct array', () => {
    const startState: TasksStateType = {
        todolistId1: [
            { id: v1(), title: "HTML", isDone: true },
            { id: v1(), title: "CSS", isDone: true },
            { id: v1(), title: "SASS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "React", isDone: false },
        ],
        todolistId2: [
            { id: v1(), title: "Redax", isDone: false },
            { id: v1(), title: "MobX", isDone: false },
            { id: v1(), title: "BEM", isDone: true },
            { id: v1(), title: "Vite", isDone: true },
            { id: v1(), title: "SSH", isDone: false },
            { id: v1(), title: "RMR", isDone: false },
            { id: v1(), title: "Pattern", isDone: false },
        ]
    }

    const action = removeTaskAC("2", "todolistId")
    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3)
    expect(endState["todolistId2"].length).toBe(2)
    expect(endState["todolistId2"].every(t => t.id != "2")).toBeTruthy()
    expect(endState["todolistId2"][0].id).toBe("1")
    expect(endState["todolistId2"][1].id).toBe("3")
})

test('correct task should be deleted from correct array', () => {
    const startState: TasksStateType = {
        todolistId1: [
            { id: v1(), title: "HTML", isDone: true },
            { id: v1(), title: "CSS", isDone: true },
            { id: v1(), title: "SASS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "React", isDone: false },
        ],
        todolistId2: [
            { id: v1(), title: "Redax", isDone: false },
            { id: v1(), title: "MobX", isDone: false },
            { id: v1(), title: "BEM", isDone: true },
            { id: v1(), title: "Vite", isDone: true },
            { id: v1(), title: "SSH", isDone: false },
            { id: v1(), title: "RMR", isDone: false },
            { id: v1(), title: "Pattern", isDone: false },
        ]
    }

    const action = addTaskAC("juce", "todolistId2")
    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3)
    expect(endState["todolistId2"].length).toBe(4)
    expect(endState["todolistId2"][0].id).toBeDefined()
    expect(endState["todolistId2"][0].title).toBe("juce")
    expect(endState["todolistId2"][0].isDone).toBe(false)
})