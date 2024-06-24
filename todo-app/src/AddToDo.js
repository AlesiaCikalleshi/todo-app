export default function AddToDo({dispatch}) {

    const addData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        dispatch({
            type: 'ADD_TODO',
            text: (formData.get('text'))
        });

    }

    return (
        <>
        <form onSubmit={addData}>
            <input name="text" type="text" />
        </form>
        </>
    )
}