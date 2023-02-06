import CreateTodo from "./CreateTodo";
import PocketBase from 'pocketbase';

export const dynamic = true,
    dynamicParams = true,
    revalidate = 0,
    fetchCache = false,
    runtime = 'nodejs',
    preferredRegion = 'auto';

const pb = new PocketBase('http://127.0.0.1:8090');

const getTodos = async () => {

    // const res = await fetch(
    //     `http://localhost:3000/api/todo`,
    //     { cache: 'no-store' });
    // const data = (await res).json();
    await pb.admins.authWithPassword('samfuller3477@yopmail.com', 'smallerThan12@');
    const resultList = await pb.collection('todo').getList(1, 50);

    console.log({
        data: resultList.items
    })
    return resultList.items;
}

export default async function Todos() {

    let data: any = [];

    const gt = await getTodos();

    if (gt) {
        data = gt;
    }

    return <div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {data.map((item: any, index: number) => <div
                key={index}
                style={{ display: 'flex', flexDirection: 'row' }}>
                <div>{item.title}</div>
                <div>{item.body}</div>
            </div>)}
        </div>
        <CreateTodo />
    </div>
}
