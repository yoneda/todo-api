const express = require("express");
const cookieParser = require("cookie-parser");
const asyncHandler = require("express-async-handler");

const server = express();
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// api を定義
server.get("/api/helth", (req, res) => {
  res.send({ val: "ok" });
});

const port = process.env.PORT;
server.listen(port || 3000, (err) => {
  if (err) throw err;
  console.log(`ready on localhost:${port}`);
});