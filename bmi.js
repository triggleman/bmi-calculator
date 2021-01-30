const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmi", function(req, res) {
    res.sendFile(__dirname + "/index.html");   
});

app.post("/bmi", (req, res) => {
    console.log(req.body);
    var weight = req.body.weight;
    var height = req.body.height;

    var result = (height*height) / weight;

    res.send("Your BMI is " + Math.round(result * 100) / 100);

});

app.listen(8080, () => {
    console.log("listening on port 8080");
});