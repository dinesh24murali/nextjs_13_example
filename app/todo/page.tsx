import CreateTodo from "./CreateTodo";

export const dynamic = true,
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'force-no-store',
    runtime = 'nodejs',
    preferredRegion = 'auto';

const getTodos = async () => {

    try {

        const res = await fetch(
            'http://localhost:3000/api/hello',
            { cache: 'no-store' });
        const data = (await res).json();
            console.log({
                data
            })
        return data;
    } catch (error) {
        return [];
    }
}

export default async function Todos() {

    let data: any = [];

    const temp = await getTodos();

    if (Array.isArray(temp)) {
        data = temp;
    }

    return <div style={{ padding: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {data.map((item: any, index: number) => <div
                key={index}
                style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ padding: '10px' }}>{item.title}</div>
                <div style={{ padding: '10px' }}>{item.body}</div>
            </div>)}
        </div>
        <CreateTodo />
    </div>
}
