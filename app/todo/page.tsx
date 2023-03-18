import Link from "next/link"

export const dynamic = true,
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'force-no-store',
    runtime = 'nodejs',
    preferredRegion = 'auto';

const getTodos = async () => {

    try {

        const res = await fetch('http://localhost:3000/api/todo',
            { cache: 'no-store' });
        const data = (await res).json();
        return data;
    } catch (error) {
        return [];
    }
}

export default async function Todo() {

    let data: any = await getTodos();

    return <div className="todo-container">
        <div className="todo-list">
            {data.map((item: any, index: number) => <div
                key={index}
                className="todo-item">
                <Link href={`/todo/${item.id}`} className="todo-title">{item.title}:</Link>
                <div className="todo-description">{item.description}</div>
            </div>)}
        </div>
    </div>
}
