import {useState} from 'react'
import { addTask } from '../Controller/controller';

function AddTask() {
    const [task, setTask] = useState({
        task: "",
        Description: "",
    })

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let item = task
        let body={
            data:{
                title: item.task,
                Description: item.Description,
                completed: false
            }
        }
        console.log(body);
        addTask(body);
        console.log(body);
        setTask({
            task: "",
            Description: "",
        });
    }

    return (
        <div className='card card-side mx-5 sm:mx-10  shadow-xl my-10 p-7 flex-col'>
            <label className="label">
                <span className="label-text">Enter your task</span>
            </label>
            <input type="text" onChange={handleChange}  name='task' value={task.task} placeholder="Type here" className="input w-full input-lg " />
            <label className="label">
                <span className="label-text">Enter your description</span>
            </label>
            <input type="text" onChange={handleChange} name='Description' value={task.Description} placeholder="Type here" className="input w-full input-lg" />
            <div className='flex justify-center py-10'>
                <button className='btn btn-primary' onClick={handleSubmit}>Add Task</button>
            </div>

        </div>
    )
}

export default AddTask