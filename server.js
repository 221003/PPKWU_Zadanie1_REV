var express = require("express");


var app = express();

app.get("/reverse/:text", (req, res) => {
    console.log(req.params.text);
})

app.listen(3000, () => {
 console.log("Server running");
});