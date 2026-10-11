const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("WhoTalk backend is running!");
});

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    service: "WhoTalk",
    status: "healthy"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`WhoTalk backend listening on port ${PORT}`);
});
