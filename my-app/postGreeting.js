/**
 * Sample POST API
 */
exports.main = async (args) => {
  const name = args.name || "Guest";
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, ${name} from POST API!` }),
  };
};