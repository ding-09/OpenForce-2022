const express = require("express");
const fs = require("fs");
const router = express.Router();


router.get("/issue/:id", async (req, resp) => {
    try {
        var data = fs.readFileSync("./Backend/orgdata/"+req.params.id+"/issue.json","utf-8");
        
        resp.send({ data });
    } catch (error) {
        console.log(error);
        resp.status(500).send({ error });
    }
});

router.get("/panel/:id", async (req, resp) => {
    try {
        var data = fs.readFileSync("./Backend/orgdata/"+req.params.id+"/panel.json","utf-8");
        resp.send({ data });
    } catch (error) {
        console.log(error);
        resp.status(500).send({ error });
    }
});






module.exports = router;
