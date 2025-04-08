const {
    allergies,
    // appointment,
    medication,
    history,
    info,
    // symtoms,
    userName,
}= require('../model/dashboard.model');

const {
    deleteit,
    updatethedata,
}= require('../service/addordelete');


async function getAllergies(req,res){
    // i can put a login checker here to know that the user is logged in
    try{
    console.log('it workinh');
    const data= await allergies(req);
    return res.status(200).json(data);
}catch(err){
    return res.status(404);
 }
}

// async function getAppointment(req,res){
//     const data=appointment();
//     return res.status(200).json(data);
// }

async function getMedication(req,res){
    try{
    const data=await medication(req);
    return res.status(200).json(data);
}catch(err){
    return res.status(404);
 }
}

async function GetAllHistory(req,res){
    try{
    const data= await history(req);
    return res.status(200).json(data);
}catch(err){
    return res.status(404);
 }
}

async function GetAllinfo(req,res){
    try{
    const data=await info(req);
    return res.status(200).json(data);
}catch(err){
    return res.status(404);
 }

}
// async function GetAllsymptoms(req,res){
//     const data=symtoms(req);
//     return res.status(201).json(data);
// }
async function username(req,res){
    try{
    const data=await userName(req);
    console.log("ther user name data ",data);
    return res.status(200).json(data);
}catch(err){
    return res.status(404);
 }
}
async function updateitm(req,res){
    try{
    const endpoint='currentMedication';
    await updatethedata(req,endpoint);
    return res.status(201).json('updadtordeletsucess');
}catch(err){
    return res.status(404);
 }
}
async function deleteitm(req,res){
    try{
    const endpoint='currentMedication';
    await deleteit(req,endpoint);
    return res.status(201).json('updadtordeletsucess');
}catch(err){
    return res.status(404);
 }
}
async function updateita(req,res){
    try{
    const endpoint='allergers';
    await updatethedata(req,endpoint);
    return res.status(201).json('updadtordeletsucess');
    }catch(err){
        return res.status(404);
     }
}
async function deleteita(req,res){
    const endpoint='allergers';
    await deleteit (req,endpoint);
    return res.status(201).json('updadtordeletsucess');
}
async function updateitp(req,res){
    try{
    const endpoint='patientHistory';
    await updatethedata(req,endpoint);
    return res.status(201).json('updadtordeletsucess');
    }
    catch(err){
        return res.status(404);
     }
}
async function deleteitp(req,res){
    try{
    const endpoint='patientHistory';
    await deleteit(req,endpoint);
    return res.status(201).json('updadtordeletsucess');
}catch(err){
    return res.status(404);
 }
}
module.exports ={
    getAllergies,
    // getAppointment,
    getMedication,
    GetAllHistory,
    GetAllinfo,
    // GetAllsymptoms,
    username,
     updateitm,
     deleteitm,
     updateita,
     deleteita,
     updateitp,
     deleteitp,
};
