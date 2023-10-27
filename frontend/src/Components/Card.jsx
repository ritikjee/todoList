import { deleteTask, doneTask, editTask, undoneTask } from "../Controller/controller"
import { useState } from "react";

function Card({ title, description, completed, id }) {
  const [data1, setData] = useState({
    title: title,
    description: description,
  });

  const handleChange = (e) => {
    console.log(data1)
    setData({ ...data1, [e.target.name]: e.target.value });
}
  const handleSubmit = (e) => {
    e.preventDefault();
    let body={
        data:{
            title: data1.title,
            Description: data1.description,
        }
    }
    console.log(body);
    editTask(body,id)
   
}

  const [edit, setEdit] = useState(false);
  return (
    <>
      <div className={!completed ? "card card-side mx-5 sm:mx-10 bg-warning shadow-xl my-10" : "card card-side mx-5 sm:mx-10 bg-accent shadow-xl my-10"}>
        {!edit ?
          <div className="card-body">
            {completed ?
              <div className='text-white font-bold'>
                Completed
              </div> :
              <div className='text-white font-bold'>
                Pending
              </div>
            }
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-start">
              <button className="btn btn-primary" onClick={() => {
                setEdit(true);
              }}>Edit</button>
              {!completed ? <button className='btn btn-accent' onClick={
                () => {
                  doneTask(id)
                }

              }>Done</button> : <button className='btn btn-warning' onClick={
                () => {
                  undoneTask(id)
                }
              }>Undone</button>}
              <button className='btn btn-error' onClick={() => {
                deleteTask(id)
              }}>Delete</button>
            </div>
          </div> :
          <>
            <div className="flex flex-col p-5 w-96">
            <div className="form-control w-full max-w-xs">
            <label className="label">
            <span className="label-text">What is your new title?</span>
            </label>
              <input type="text" name="title" value={data1.title} placeholder="title" className="input input-bordered input-md w-full max-w-xs mb-2" onChange={handleChange}/>
              </div>

              <div className="form-control w-full max-w-xs">
            <label className="label">
            <span className="label-text">What is your new description?</span>
            </label>
            <input type="text" name="description" value={data1.description} placeholder="description" className="input input-bordered input-lg w-full max-w-xs" onChange={handleChange}/>
              </div>
              <div className="my-7 flex gap-3">
                <button className="btn btn-error" onClick={()=>{
                  setEdit(false);
                }}>Cancel</button>
                <button className="btn btn-primary" onClick={handleSubmit}>Edit</button>
              </div>

            </div>



          </>
        }
      </div>
    </>
  )
}

export default Card