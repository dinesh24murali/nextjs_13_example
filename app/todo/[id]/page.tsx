import testing from "../(helper)/utils";

const getTodo = async () => {

    const res = await fetch(
        `http://localhost:3000/api/todo/12`,
        { next: { revalidate: 10 } }
        );
    const data = (await res).json();
    return data;
}

export default async function Todo() {

    let data: any = {};

    const ht = testing();

    const gt = await getTodo();

    if (gt) {
        data = gt;
    }

    return <div>
        <h2>{ht}</h2>
        <div
            style={{ display: 'flex', flexDirection: 'column' }}>
            <div>{data.title}</div>
            <div>{data.body}</div>
        </div>
    </div>
}
