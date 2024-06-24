export default function ToDoList({tasks}) {
    return (
        <>
            {tasks.map(task => 
                <li key={task.id}>
                    {task.text}
                </li>
            )

            }
        </>
    )
}