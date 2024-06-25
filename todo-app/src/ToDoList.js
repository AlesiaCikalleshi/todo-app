export default function ToDoList({tasks, dispatch}) {
    return (
        <>
            {tasks.map(task => 
                <li key={task.id}>
                    <input onChange={ () =>
                        dispatch({
                            type:'MARK_TODO', task: {...task, completed: !task.completed}
                        })
                    }
                     type="checkbox" checked={task.completed}/>
                    {task.text}

                    <button style={{marginLeft: 8}}
                    onClick={ () => 
                        dispatch({
                            type:'UPDATE_TODO',
                            task: {...task, text: task.text}
                        })
                    }>
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