var express = require("express");


var app = express();

function reverseText(text) {
    return text.split("").reverse().join("");
}

app.get("/reverse/:text", (req, res) => {
    const { text } = req.params;

    let result = reverseText(text);

    res.json(result);
})

app.listen(3000, () => {
 console.log("Server running");
});