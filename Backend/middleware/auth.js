// todo: complete the authorisation function
const auth = async (req,res,next)=>{
    try{
        req.userId = "61ce8ea85e1aa245eb272811";
        next();
    }catch(error){
        res.status(401).json({'error':'Unauthorized access'})
    }
}
module.exports=auth;