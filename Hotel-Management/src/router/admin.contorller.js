const {createdis} = require('../model/createdisease'); 
const {allthebest}=require('../model/admin.model');
let t =1;
let na='fuck';

async function created(req,res){
    // i can put a login checker here to know that the user is logged in
    try{
    console.log('it workinh th admin');
    const data= await createdis(req);
    // const t =req.body;
    // console.log(req.body);
    // console.log(t.classification);
    
    return res.status(200).json("sucesss");
}catch(err){
    return res.status(404);
 }
}

async function getdisease(req,res){
let nam;
    if(t==2){
        nam = req.body.symptoms[0];
         console.log(nam,"jofj");
         na=nam;
    };
    if(t==3){
        nam=na;
        console.log(na);
    };
    console.log('the get of dises is working');
    let data = await allthebest(req,t,nam);
    console.log(data);
    // req.session.n = nam;
    t++;
    if(t>3){
        t=1;
        na='fuck';
    }
    return res.status(200).json(data);
}

module.exports = {
    created,
    getdisease,
};