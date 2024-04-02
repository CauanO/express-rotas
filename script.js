const express = require("express")
const app = express()


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html/inicio.html")
});
app.get("/sobre", function(req, res) {
    res.sendFile(__dirname + "/html/sobre.html")
});
app.get("/contato", function(req, res) {
    res.sendFile(__dirname + "/html/contato.html")
});


app.listen(8081, function() {
    console.log("Servidor funcionando na url http://localhost:8081")
})