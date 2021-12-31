const express = require("express");
const issues = require("../models/issues");
const organization = require("../models/organization");
const router = express.Router();

router.get("/", async (req, resp) => {
    try {
        let doc = await organization.find({});
        resp.status(200).json({
            success: "Successfully fetched all org",
            data: doc,
        });
    } catch (error) {
        resp.status(500).json({ error });
    }
});

router.get("/:id", async (req, resp) => {
    try {
        let doc = await organization.findById(req.params.id);
        resp.status(200).json({
            success: "Successfully fetched all org",
            data: doc,
        });
    } catch (error) {
        resp.status(500).json({ error });
    }
});

router.post("/", async (req, resp) => {
    try {
        var earlier = await organization.find({ name: req.body.name });
        if (earlier.length != 0) {
            console.log(earlier);
            resp.status(400).send({ error: "Already Exist" });
            return;
        }
        var data = {
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
        };
        if (req.body.logo) data.logo = req.body.logo;
        var org = new organization(data);
        await org.save();

        data = {
            orgId: org.id,
        };

        var issue = new issues(data);
        issue.save();
        resp.send({ status: "Added Successfully" });
    } catch (error) {
        console.log(error);
        resp.status(500).send({ error });
    }
});

router.get("/issue/:id", async (req, resp) => {
    try {
        var data = await issues.findOne({ orgId: req.params.id });
        resp.send({ data });
    } catch (error) {
        console.log(error);
        resp.status(500).send({ error });
    }
});

router.put("/issue/:id", async (req, resp) => {
    try {
        var data = await issues.findOne({ orgId: req.params.id });
        var newIssue = {
            title: req.body.title,
            desc: req.body.desc,
            level: req.body.level,
            status: "Open",
            repo: req.body.repo,
            tags: [],
        };
        newIssue = JSON.stringify(newIssue);
        data.issue.push(newIssue);
        await issues.findByIdAndUpdate(data.id, data);
        resp.send({ status: "Issue added successfully" });
    } catch (error) {
        console.log(error);
        resp.status(500).send({ error });
    }
});

router.put("/:id/panel", async (req, resp) => {
    try {
        var oldData = await organization.findById(req.params.id);
        var data = {
            name: req.body.name,
            skills: req.body.skills,
            linked: req.body.linked,
            photo : req.body.photo,
            email : req.body.email
        };
        oldData.panel.push(data);
        await organization.findByIdAndUpdate(req.params.id, oldData);
        resp.send({"status":"Panel Updated"});
    } catch (error) {
        console.log(error);
        resp.status(500).send({ error });
    }
});

router.put("/:id/panel/time", async (req, resp) => {
    try {
        var oldData = await organization.findById(req.params.id);
        console.log(oldData);
        oldData.time = req.body.time;
        oldData.bookedBy = [];
        console.log(oldData);
        await organization.findByIdAndUpdate(req.params.id, oldData);
        resp.send({"status":"Successfully Updated"})
    } catch (error) {
        console.log(error);
        resp.status(500).send({ error });
    }
});

router.put("/:id/panel/register", async (req, resp) => {
    try {
        var oldData = await organization.findById(req.params.id);
        if(oldData.bookedBy.indexOf(req.body.username) !== -1){
            resp.status(400).send({"error":"Already Registered"});
            return;
        }
        oldData.bookedBy.push(req.body.username);
        await organization.findByIdAndUpdate(req.params.id, oldData);
        resp.send({"status":"Successfully Updated"})
    } catch (error) {
        console.log(error);
        resp.status(500).send({ error });
    }
});






module.exports = router;
