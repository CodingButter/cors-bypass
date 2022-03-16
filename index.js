import fetch from "node-fetch";
import express from "express";
var app = express();

app.get("/", function (req, res) {
  const { url } = req.query;
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      res.json(data);
    });
});

var server = app.listen(8000, function () {
  var host = "localhost";
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
