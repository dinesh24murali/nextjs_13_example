const getTodo = async () => {

    try {

        const res = await fetch(
            'http://localhost:3000/api/todo/12',
            { next: { revalidate: 10 } }
        );
        const data = (await res).json();
        return data;
    } catch (error) {
        return {}
    }
}

export default async function Todo() {

    let data: any = {};

    const temp = await getTodo();

    if (temp) {
        data = temp;
    }

    return <div>
        <div
            style={{ display: 'flex', flexDirection: 'column' }}>
            <div>{data.title}</div>
            <div>{data.body}</div>
        </div>
    </div>
}
