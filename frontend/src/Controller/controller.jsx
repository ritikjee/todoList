const addTask = (task) => {
    return async (dispatch) => {
        try {
        const res = await fetch("http://localhost:1337/api/tasks", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });
        const data = await res.json();
        dispatch({
            type: "ADD_TASK",
            payload: data.data,
        });
        } catch (err) {
        console.log(err);
        }
    };
    };

const deleteTask = (id) => {
    return async (dispatch) => {
        try {
        await fetch(`http://localhost:1337/api/tasks/${id}`, {
            method: "DELETE",
        });
        dispatch({
            type: "DELETE_TASK",
            payload: id,
        });
        } catch (err) {
        console.log(err);
        }
    };
    }
const doneTask = (id) => {
    return async (dispatch) => {
        try {
        const res = await fetch(`http://localhost:1337/api/tasks/${id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ completed: true }),
        });
        const data = await res.json();
        dispatch({
            type: "DONE_TASK",
            payload: data.data,
        });
        } catch (err) {
        console.log(err);
        }
    };
    }

    const undoneTask = (id) => {
        return async (dispatch) => {
            try {
            const res = await fetch(`http://localhost:1337/api/tasks/${id}`, {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ completed: false }),
            });
            const data = await res.json();
            dispatch({
                type: "UNDONE_TASK",
                payload: data.data,
            });
            } catch (err) {
            console.log(err);
            }
        };
        }

    
    const editTask = (task) => {
        return async (dispatch) => {
            try {
            const res = await fetch(`http://localhost:1337/api/tasks/${task.id}`, {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(task),
            });
            const data = await res.json();
            dispatch({
                type: "EDIT_TASK",
                payload: data.data,
            });
            } catch (err) {
            console.log(err);
            }
        };
        }

        module.exports = {
            addTask,
            deleteTask,
            doneTask,
            undoneTask,
            editTask
        }