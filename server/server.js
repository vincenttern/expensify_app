const path = require("path");
const express = require("express");
const app = express(); // new instance of express
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

// Tell public directory to serve all of our static assets
app.use(express.static(publicPath));

// If users requested isn't in public folder get them back to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// Start on port 3000
app.listen(port, () => {
  console.log("Server is up!");
});
