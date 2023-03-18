
export async function GET(request: Request) {
    return new Response(JSON.stringify({ title: 'Todo', body: 'Todo body' }))
}
