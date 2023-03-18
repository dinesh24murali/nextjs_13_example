'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation';

export default function CreateTodo() {

    const [title, setTitle] = useState<string>();
    const [body, setBody] = useState<string>();
    const router = useRouter();

    const onSave = async () => {

        await fetch('http://localhost:3000/api/todo',
            {
                method: 'post',
                body: JSON.stringify({
                    title,
                    body,
                })
            })
        router.refresh()
    }

    return <div>
        <div style={{ padding: '10px' }}>
            <input value={title} type="text" name="" onChange={({ target }) => setTitle(target.value)} />
        </div>
        <div style={{ padding: '10px' }}>
            <input value={body} type="text" name="" onChange={({ target }) => setBody(target.value)} />
        </div>
        <div style={{ padding: '10px' }}>
            <button onClick={onSave}>Save</button>
        </div>
    </div>
}
