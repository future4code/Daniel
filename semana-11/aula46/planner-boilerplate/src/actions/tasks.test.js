import { setTaskAction, baseURL, fetchTasksAction, postTaskAction } from './tasks';
import axios from "axios";

const mockTasks =
    [
        {
            day: "Segunda",
            text: "Lavar a louça"
        }
    ];

let mockDispatch;

beforeEach(() => {
    mockDispatch = jest.fn();
});

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

        const expectedAction = {
            type: "SET_TASKS",
            payload: {
                tasks: mockTasks
            }
        };

        await fetchTasksAction()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
    });
});

describe("postTaskAction", () => {
    test("post new task", async () => {
        axios.post = jest.fn(() => ({
            status: 200
        }));


        const { text, day } = mockTasks[0]

        await postTaskAction(text, day)(mockDispatch);

        expect(axios.post).toHaveBeenCalledWith(baseURL, mockTasks[0]);
        expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
})
