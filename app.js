const express = require("express");
const app = express();
const PORT = 5005
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.send("Hello World")
});


app.listen(PORT, function () {
    console.log("Server started on port " + PORT)
});