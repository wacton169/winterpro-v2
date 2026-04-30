export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("NEW LEAD:", data);

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response("Error", { status: 500 });
  }
}