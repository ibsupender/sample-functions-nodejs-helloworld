export default async (req, context) => {
  return new Response(JSON.stringify({ message: "Hello from POST!" }), {
    headers: { "Content-Type": "application/json" },
  });
};