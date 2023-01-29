const express = require("express");

// Constants
// const PORT = 8080;
// const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Running on http://3000`);
});
