var express = require("express"),
    router = express.Router(),
    users = require("../Models/user")

router.post("/new", function(res, req) {
    users.create("Mecellone", "docker", function(err, doc) {
        console.log(doc)
    })
})

//Per farla funzionare ho inserito un documento nel databse e ho preso il suo id, ovviamente per poterla rendere utile dovremmo cercare un modo di identidicare l'oggetto,
//e credo che si facia nel front end
router.get("/search", function(res, req) {
    users.getById("7eefa40a3b33cbfc888ab25370013d89", function(err, doc) {
        console.log(doc)
    })
})

module.exports = router