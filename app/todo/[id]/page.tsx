
const getTodo = async (id: string) => {

    try {

        const res = await fetch(`http://localhost:3000/api/todo/${id}`,
            {
                next: { revalidate: 10 }
            });
        const data = (await res).json();
        return data;
    } catch (error) {
        return {};
    }
}

export default async function Todo({ params }: {
    params: { id: string };
}) {

    let data: any = await getTodo(params.id);

    return <div className="todo-container">
        <div className="todo-list">
            <div
                className="todo-item">
                <div className="todo-title">{data.title}:</div>
                <div className="todo-description">{data.description}</div>
            </div>
        </div>
    </div>
}
