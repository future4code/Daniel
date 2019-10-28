function CreateTask(taskName){
    return {
        type: 'CREATE_TASK',
        payload: {
            name: taskName
        }
    };
}

function CompleteTask(taskID){
    return {
        type: 'COMPLETE_TASK',
        payload: {
            id: taskID
        }
    };
}

function RemoveTask(taskID){
    return {
        type: 'DELETE_TASK',
        payload: {
            id: taskID
        }
    };
}