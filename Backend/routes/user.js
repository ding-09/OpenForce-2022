const express = require("express");
const user = require("../models/User");
const specialAccess = require("../models/specialAccess");
const router = express.Router();

router.get("/",async  (req, resp) => {
    try {
        var skip = req.query.page * 100;
        if (!skip) skip = 0;
        var data = await user.find().sort({"points":-1}).skip(skip).limit(100);
        resp.send({ success: "Fetch Successfull", data: data });
    } catch (error) {
        console.log(error);
        resp.status(500).send({ error });
    }
});

router.post("/", async (req, resp) => {
    try {
        var data = await user.findOne({ user: req.body.user });
        if (data) {
            resp.status(400).send({ error: "User already exist" });
            return;
        }

        if(req.body.referral){
            data = await user.findOne({ user: req.body.referral });
            if(!data){
                resp.status(404).send({ error: "Referral ID not found" });
                return;
            }else{
                data.points+=1;
                await user.findOneAndUpdate({user:req.body.referral}, data);
            }
        }

        data = {
            name: req.body.name,
            user: req.body.user,
        };

        data = new user(data);
        await data.save();


        resp.send({ success: "Registration Successfull" });
    } catch (error) {
        console.log(error);
        resp.status(500).send({ error });
    }
});

router.put("/", async (req, resp) => {
    try {
        var data = await specialAccess.findOne({ id: req.body.accessID });
        if (!data) {
            resp.status(401).send({
                error: "Unauthoried to change the points",
            });
            return;
        }
        data = await user.findOne({ user: req.body.user });
        if (!data) {
            resp.status(404).send({ error: "User not found" });
            return;
        }

        data.points += req.body.points;

        await user.findByIdAndUpdate(data._id, data);
        resp.status(200).send({ status: "Updated points successfully" });
    } catch (error) {
        console.log(error);
        resp.status(500).send({ error });
    }
});

module.exports = router;
