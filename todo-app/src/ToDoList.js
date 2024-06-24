export default function ToDoList({tasks}) {
    return (
        <>
            {tasks.map(task => 
                <li key={task.id}>
                    <input type="checkbox" checked={task.completed}/>
                    {task.text}

                    <button>
                        Delete
                    </button>
                </li>
            )
            

            }
        </>
    )
}