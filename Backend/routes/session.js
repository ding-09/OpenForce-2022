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

router.use(require('../middleware/auth.js'));

router.put('/book',async (req,res)=>{
    try{
        let session = await Session.findById(req.body.sessionId);
        if(session.seatsAvailabe<=0){
            res.status(400).json({'error':'All seats booked.'});
            return;
        }
        session.seatsAvailable--;
        session.rsvps.push(req.userId);
        let user = await User.findById(req.userId);
        if(user.sessionsBooked.indexOf(req.body.sessionId)>=0){
            res.status(400).json({'error':'Already booked by user.'})
            return;
        }
        user.sessionsBooked.push(req.body.sessionId);
        await Session.findByIdAndUpdate(req.body.sessionId,session);
        await User.findByIdAndUpdate(req.userId,user);
        res.status(200).json({'Success':'Succesfully booked session'});
    }catch(e){
        console.log(e);
        res.status(500).json({'error':e});
    }
});

router.post('/',async (req,res)=>{
    try{
        const session = await Session.create({
            'organiser': req.body.organiser,
            'description':req.body.description,
            'image':req.body.image,
            'time':req.body.time,
            'seatsAvailable':req.body.seatsAvailable,
            'rsvps':[]
        })
        res.status(200).json({'sessionId':session._id});
    }catch(e){
        res.status(500).json({'error':e});
    }
})
module.exports = router;