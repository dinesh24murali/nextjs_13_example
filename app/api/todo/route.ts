export async function GET(request: Request) {
  return new Response(JSON.stringify([
    {
      id: 1,
      title: 'Todo1',
      description: 'Todo 1 description'
    },
    {
      id: 2,
      title: 'Todo2',
      description: 'Todo 2 description'
    },
  ]))
}

export async function POST(request: Request) {
  const temp = await request.json();
  return new Response(JSON.stringify(temp))
}
