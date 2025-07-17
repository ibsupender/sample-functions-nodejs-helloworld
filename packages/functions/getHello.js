export default async (req, context) => {
  return new Response(JSON.stringify({ message: "Hello from GET!" }), {
    headers: { "Content-Type": "application/json" },
  });
};