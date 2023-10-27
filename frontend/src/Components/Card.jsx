import { deleteTask, doneTask, undoneTask } from "../Controller/controller"



function Card({ title, description, completed, id }) {
  return (
    <>
      <div className={!completed ? "card card-side mx-5 sm:mx-10 bg-warning shadow-xl my-10" : "card card-side mx-5 sm:mx-10 bg-accent shadow-xl my-10"}>
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
            {/* <button className="btn btn-primary">Edit</button> */}
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
        </div>
      </div>
    </>
  )
}

export default Card