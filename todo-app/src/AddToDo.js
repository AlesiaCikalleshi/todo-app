export default function AddToDo({dispatch}) {

    const addData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        dispatch({
            type: 'ADD_TODO',
            text: (formData.get('text'))
        });
        e.target.reset();

    }

    const removeAll = () =>{

        dispatch({
            type: 'DELETE_ALL',
        })

    }


    return (
        <>
        <form onSubmit={addData}>
            <input name="text" type="text" />
            <button onSubmit={addData} style={{margin: 10}}>
                Add To Do
            </button>
            <button onClick={removeAll} style={{margin: 10}}>
                Remove all
            </button>
        </form>
        </>
    )
}