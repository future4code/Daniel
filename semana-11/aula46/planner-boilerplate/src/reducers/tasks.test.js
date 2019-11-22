import { tasks } from "./tasks"
import { setTaskAction } from "../actions/tasks"

const mockTask = {
    id: "xyz",
    text: "Morgana tá muito levada hoje",
    day: "Quinta-feira"
}

describe("Tasks Reducer",()=>{
    test("receive a action and return a proper state",()=>{
        const mockTaskList = [mockTask]
        const testAction = setTaskAction(mockTaskList);
        const result = tasks(null,testAction);
        expect(result.allTasks).toHaveLength(1);
        expect(result.allTasks[0]).toBe(mockTask)
    });
});