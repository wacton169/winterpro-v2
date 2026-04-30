export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log("NEW LEAD:", data);

    return Response.json({ success: true });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}
``