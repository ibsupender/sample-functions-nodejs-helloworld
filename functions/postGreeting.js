export default async (req, context) => {
  const body = await req.json();
  const name = body.name || "Guest";

  return new Response(JSON.stringify({ message: `Hello, ${name}!` }), {
    headers: { "Content-Type": "application/json" },
  });
};