const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // meal plans
  server.get("/hotel/:id", (req, res) => {
    const id = req.params.id;
    if (isNaN(parseInt(id))) {
      return app.render(req, res, "/hotel");
    }
    return app.render(
      req,
      res,
      "/hotel",
      Object.assign({}, req.query, { id: req.params.id })
    );
  });
  server.get("/*", (req, res) => {
    handler(req, res);
  });
  server.listen("3000", err => {
    if (err) throw err;
    console.log("Running on http://localhost:3000");
  });
});
