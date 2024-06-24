export default function ToDoList({tasks, dispatch}) {
    return (
        <>
            {tasks.map(task => 
                <li key={task.id}>
                    <input type="checkbox" checked={task.completed}/>
                    {task.text}

                    <button style={{marginLeft: 8}}>
                        Edit 
                    </button>

                    <button style={{marginLeft: 8}} 
                    onClick={ () => 
                        dispatch({
                            type:'DELETE_TODO', taskId: task.id
                        })
                    }>
                        Delete
                    </button>

                </li>
            )
            

            }
        </>
    )
}