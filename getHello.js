/**
 * Sample GET API
 */
exports.main = async (args) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from GET API!" }),
  };
};