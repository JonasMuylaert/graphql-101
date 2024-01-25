import express from "express"; // yarn add express

// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "healthy",
  });
});

app.listen({ port: 4000 });
console.log("Listening to port 4000");
