const userDataBase= require('../model/createuser.mongo');


async function updatethedata(req,endpoint){
    let updatedata = req.body.pass;
    let user = req.session.userId;
    console.log(req.body.pass);
    if(updatedata){
    console.log(user);
    let pastdata = await userDataBase.findOne({
        email:user,
    })
    console.log(pastdata);
    console.log(endpoint);
    console.log(pastdata.dashboard[endpoint]);

    let array = pastdata.dashboard[endpoint];
    for(t in array){
        if(array[t]===updatedata){
            return;
        }
    }
    array.push(updatedata);
    pastdata.dashboard[endpoint] = array;
    updateit(pastdata,user);
}
    
}

async function deleteit(req,endpoint){
   
    let deletdata= req.body.pass;

    console.log(req.body.pass);

   if(deletdata){
    let user = req.session.userId;
    console.log(user);

    let pastdata = await userDataBase.findOne({
        email:user,
    });
    console.log("jerr",pastdata);
    let array = pastdata.dashboard[endpoint];
    let newarray=[];
    console.log(deletdata);
    for(t in array){
        console.log(array[t]);
        if(array[t]!==deletdata){
            newarray.push(array[t]);
        }
    }
    console.log(newarray);

    pastdata.dashboard[endpoint]=newarray;
    console.log(pastdata);
    updateit(pastdata,user)
}
}

async function updateit(pastdata,user){
    await userDataBase.updateOne({
        email:user   
    },pastdata,{
        upsert:true,
    }); 
    
   const t= await userDataBase.findOne({
        email:user,
   });
    console.log(t);

}


module.exports={
    deleteit,
    updatethedata,
};