
export async function GET(request: Request) {
    return new Response(JSON.stringify({ id: 3, title: 'Todo', description: 'Todo description' }))
}
