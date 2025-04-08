const userCreatedb= require('./createuser.mongo');
const {checkUser} = require('../service/authentication');



async function createUser(req){
    try{
    const user=req.body; 
    const userData = Object.assign(user,{
        dashboard:{
            allergers:['pollen','dog','study'],
            appointment:["no data"],
            currentMedication:["no data"],
            healthInfo:["no data"],
            patientHistory:["no data"],
            symptoms:["no data"],
        },
        loginStatus: false// onw of the problem is how to populate this info of the user 
    });
    
    const permissions = await checkUser(req);
    //console.log(userData);
    


    if(!permissions){
    await userCreatedb.updateOne({
        email: userData.email,
    },userData,{
        upsert: true,
    });

    console.log(userData);

    return true;
}
else{
    return false;
}
}
catch(err){
    console.error('could not insert the user data');
}

}

module.exports ={ 
    createUser,
 };
