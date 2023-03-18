export async function GET(request: Request) {
  return new Response(JSON.stringify([
    { title: 'Todo1', body: 'Todo body 1', id: 1 },
    { title: 'Todo2', body: 'Todo body 2', id: 2 }
  ]))
}

export async function POST(request: Request) {
  const temp = await request.json();
  console.log({
    body: temp
  })
  return new Response('Hello Post, Next.js!')
}
