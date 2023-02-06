'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export default function CreateTodo() {

    const [title, setTitle] = useState<string>();
    const [body, setBody] = useState<string>();
    const router = useRouter();

    const onSave = async () => {

        await pb.admins.authWithPassword('samfuller3477@yopmail.com', 'smallerThan12@');
        
        await pb.collection('todo').create({
            title,
            body,
        });

        // const res = await fetch(`http://localhost:3000/api/todo`,
        //     {
        //         method: 'post',
        //         body: JSON.stringify({
        //             title,
        //             body,
        //         })
        //     })
        // const data = await res.json()
        // console.log({
        //     data
        // })
        router.refresh()

    }

    return <div>
        <div>
            <input value={title} type="text" name="" onChange={({ target }) => setTitle(target.value)} />
        </div>
        <div>
            <input value={body} type="text" name="" onChange={({ target }) => setBody(target.value)} />
        </div>
        <div>
            <button onClick={onSave}>Save</button>
        </div>
    </div>
}
