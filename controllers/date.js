
var express = require("express")
var router = express.Router()
var date = require("../models/date")

router.get("/", function(req, res) {
    var tmp = req.path.split("/")               //è piu comodo scrivere la data in formato <Mese>/<Giorno>
    var date = tmp[2] + tmp[3]
    date.search(date, function(err, doc){
        if (err == -1) {
            //chiamata all'api che ci fornisce il documento
            //chiamata allo scrittore tramite rabbitMQ
            //Scrittura sul drive del file
        }
        else if (err == null) {
            //Scrittura sul drive del file, gia presente nel database
        }
    })
})
