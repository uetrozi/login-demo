// index.js
import express from "express";
import path from "path";
import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Reads the PORT value from the environment variable `PORT`.
// If not found, uses the default value of 3000.
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/echo/:message", (req, res) => {
  const message = req.params.message;

  if (message === "secret") {
    res.send("The answer is .... 42!");
  } else {
    res.send(`${message}`);
  }
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/login.html"));
});

app.post("/login", function (req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    response.json({ success: false });
  } else if (email === "user@email.com" && password === "very-secret") {
    response.json({ success: true });
  } else {
    response.json({ success: false });
  }
});

app.get("/my-account", (request, response) => {
  response.send("<h1>My Account</h1>");
});

app.get("/error", (request, response) => {
  response.send("<h1>Something went wrong with your request</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
