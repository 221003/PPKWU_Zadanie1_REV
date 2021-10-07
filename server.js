var express = require("express");


var app = express();

function reverseText(text) {
    return String.split("").reverse().join("");
}

app.get("/reverse/:text", (req, res) => {
    console.log(req.params.text);
})

app.listen(3000, () => {
 console.log("Server running");
});