import React, { useState } from "react";

export default function ToDoList({ tasks, dispatch }) {
    // useState allows to add state to the component 
    // State is used to keep track of the currently editing task and its text
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEdit = (task) => {
        setEditingTaskId(task.id);
        setEditText(task.text); // Initialize the edit input with the current text
    };

    const handleSave = (task) => {
        dispatch({
            type: 'SAVE_TODO',
            task: { ...task, text: editText } //saves the updated text
        });
        setEditingTaskId(null); //removes the edit mode after saving
    };

    const handleDelete = (task) => {
        dispatch({
            type: 'DELETE_TODO', taskId: task.id
        })
    };

    return (
        <>
            {tasks.map(task =>
                <li key={task.id}>
                    {/* checkbox, mark as to do*/}
                    <input onChange={() =>
                        dispatch({
                            type: 'MARK_TODO', task: { ...task, completed: !task.completed }
                        })
                    }
                        type="checkbox" checked={task.completed} />
                    {/* showing list and handle save */}
                    {editingTaskId === task.id ? (
                        <>
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                style={{ marginLeft: 8 }}
                            />
                            <button
                                style={{ marginLeft: 8 }}
                                onClick={() => handleSave(task)}
                            >
                                Save
                            </button>
                        </>
                    ) : (
                        <>
                            {/* show edit button */}

                            <span style={{ marginLeft: 8 }}>{task.text}</span>
                            <button
                                style={{ marginLeft: 8 }}
                                onClick={() => handleEdit(task)}
                            >
                                Edit
                            </button>
                        </>
                    )}

                    {/* delete button */}

                    <button style={{ marginLeft: 8 }}
                        onClick={() => handleDelete(task)
                        }>
                        Delete
                    </button>

                </li>
            )


            }
        </>
    )
}