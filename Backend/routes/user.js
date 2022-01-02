const express = require("express");
const bcrypt = require("bcrypt");
const user = require("../models/User");
const jwt = require("jsonwebtoken");
const router = express.Router();
const key = "hask98#eu1uie872j@kd";

router.post("/register", async (req, resp) => {
    try {
        var data = await user.findOne({ email: req.body.email });

        if (data) {
            resp.status(404).send({ error: "User already exist" });
        }

        const salt = bcrypt.genSaltSync(10);
        const encPass = bcrypt.hashSync(req.body.password, salt);
        data = {
            email: req.body.email,
            name: req.body.name,
            password: encPass,
            gender: req.body.gender,
            mobileNo: req.body.mobileNo,
            college: req.body.college,
        };
        var newUser = new user(data);

        data = {
            email: req.body.email,
        };
        await newUser.save();
        const token = jwt.sign(data, key);

        resp.send({ success: "Registration Successfull", jwtTokken: token });
    } catch (error) {
        console.log(error)
        resp.status(500).send({ error });
    }
});

router.post("/login", async (req, resp) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let doc = await user.findOne({ email: email });
        console.log(doc);
        if (!doc) {
            resp.status(400).json({ error: "email not registered." });
            return;
        }
        if (!bcrypt.compareSync(password, doc.password)) {
            resp.status(400).json({ error: "Incorrect password." });
            return;
        }
        const userId = {
            email: email,
        };
        const token = jwt.sign(userId, key);
        resp.status(200).json({
            success: "Successfully logged in.",
            jwtTokken: token,
        });
    } catch (error) {
        console.log(error);
        resp.status(500).send({ error });
    }
});

module.exports = router;
