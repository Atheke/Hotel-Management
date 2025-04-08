const userDb= require('../model/createuser.mongo');


async function checkUser(req){
   // console.log(req);
    const user = {
        email:req.body.email,
        password:req.body.password,
        // loginStatus:req.loginStatus,
    }
    console.log(user);


    const t=await userDb.findOne({
            email:user.email,
    })
    console.log(t);
    if(t!=null) {
        if(t.password===user.password)
        return user.email;
    }
    else {
         return false;
    }
}    


module.exports = {
    checkUser,
};