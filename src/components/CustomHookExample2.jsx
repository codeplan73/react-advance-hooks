import useLocalStorage from './../hooks/useLocalStorage'

const CustomHookExample2 = () => {
  const [task, setTask] = useLocalStorage('task', '')
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const onSubmit = (e) => {
    e.preventDefault()

    const taskObj = {
        task,
        completed: false,
        date: new Date().toDateString()
    }

    setTasks([...tasks, taskObj])
  }

  return (
      <>
    <form className="w-50" onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-lable">Task</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          id=""
        />
      </div>
      <button className="btn btn-info">Add Task</button>
    </form>
    <hr />
    {tasks.map(task => (
        <div key={task}>
            <ul>
                <li>{task.date}</li>
                <li>{task.task}</li>
                <hr />
            </ul>
        </div>
    ))}

    </>
  )
}

export default CustomHookExample2
