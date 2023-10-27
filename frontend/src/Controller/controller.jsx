const addTask = async (task) => {
    try{
        console.log(JSON.stringify(task));
        const res = await fetch("http://localhost:1337/api/tasks", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });
        const data = await res.json();
        console.log(data);
        window.location.reload();
    }
    catch(err){
        console.log(err)}

    
    };

const deleteTask = async (id) => {
   
        try {
        await fetch(`http://localhost:1337/api/tasks/${id}`, {
            method: "DELETE",
        });
        window.location.reload();
       
        } catch (err) {
        console.log(err);
        }
   
    }
const doneTask = async (id) => {
    var body = {
        data: {
            completed: true
        }
    }
    
        try {
        const res = await fetch(`http://localhost:1337/api/tasks/${id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await res.json();

        console.log(data);
        window.location.reload();
       
        } catch (err) {
        console.log(err);
        }
    
    }

    const undoneTask =async (id) => {
        var body = {
            data: {
                completed: false
            }
        }
        
            try {
            const res = await fetch(`http://localhost:1337/api/tasks/${id}`, {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            const data = await res.json();
            window.location.reload();
            
            } catch (err) {
            console.log(err);
            }
    
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