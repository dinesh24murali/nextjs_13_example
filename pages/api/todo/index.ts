// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    title: string
    body: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[] | Data>
) {

    if (req.method === 'POST') {
        const data = JSON.parse(req.body);
        // Process a POST request
        res.status(200).json({
            title: data.title,
            body: data.body,
        })
    } else {
        // Handle any other HTTP method
        const temp: Data[] = [
            { title: 'Todo1', body: 'Todo body 1' },
            { title: 'Todo2', body: 'Todo body 2' }
        ];
        res.status(200).json(temp)
    }
}
