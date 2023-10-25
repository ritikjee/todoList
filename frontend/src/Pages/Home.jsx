import { useState,useEffect } from "react"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Loading from "../Components/Loading"
import Card from "../Components/Card"
import AddTask from "../Components/AddTask"

function Home() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try{
      const res = await fetch("http://localhost:1337/api/tasks")
      const data = await res.json()
      setTasks(data.data)
      console.log(data.data)
      }
      catch(err){
        console.log(err)
      }

      setLoading(false)

    }

    fetchData();
  }, [])

  return (
    <>
    {loading ? <Loading/> : <div className="flex flex-col justify-between h-screen">
    <Navbar />
    <main className="container mx-auto px-3 pb-12">
      <h1 className="text-3xl font-bold my-4">Tasks</h1>
      <ul>
        {tasks.map((task) => (
         <Card key={task.id} title={task.attributes.title} description={task.attributes.description} id={task.id} completed={task.attributes.completed}/>
        ))}
      </ul>
    </main>
    <AddTask/>
    <Footer/>
    </div>}
    </>
  )
}

export default Home