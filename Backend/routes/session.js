const {Router} = require('express');
const router = Router();
const Session = require('../models/Session');
const User = require('../models/User');

router.get('/', async (req, res)=>{
    try{
        const sessions = await Session.find({});
        res.status(200).json({'sessions':sessions});
    }catch(e){
        res.status(500).json({'error':e});
    }
});

// todo: create middleware

router.put('/book',async (req,res)=>{
    try{
        let user = await User.findById(req.userId);
        user.sessionsBooked.push(req.body.sessionId);
        await User.findByIdAndUpdate(req.userId,user);
        res.status(200).json({'Success':'Succesfully booked session'});
    }catch(e){
        res.status(500).json({'error':e});
    }
});

router.post('/',async (req,res)=>{
    try{
        const session = await Session.create({
            'organiser': req.body.organiser,
            'description':req.body.description,
            'image':req.body.image,
            'time':req.body.time
        })
        res.status(200).json({'sessionId':session._id});
    }catch(e){
        res.status(500).json({'error':e});
    }
})
module.exports = router;