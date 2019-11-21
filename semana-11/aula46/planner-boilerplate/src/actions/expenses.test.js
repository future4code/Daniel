import { setTaskAction, baseURL, fetchTasksAction } from './expenses';
import axios from "axios";

const mockTasks =
    [
        {
            id: "jGH9xnVXQMeU3tZOQ2Gy",
            day: "Segunda",
            text: "Lavar a louça"
        }
    ]

describe("setTaskAction", () => {
    test("return a correct object", () => {
        const testAction = {
            type: "SET_TASKS",
            payload: {
                tasks: mockTasks
            }
        }
        const result = setTaskAction(mockTasks);
        expect(result).toMatchObject(testAction);
    });
});

describe("fetchTasksAction", () => {
    test("fecth and dispatch with proper action", async () => {
        axios.get = jest.fn(() => ({
            data: mockTasks
        }))

        const mockDispatch = jest.fn();

        const expectedAction = {
            type: "SET_TASKS",
            payload: {
                tasks: mockTasks
            }
        };

        await fetchTasksAction()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
    })
})