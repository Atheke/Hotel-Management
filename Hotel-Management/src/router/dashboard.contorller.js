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




module.exports ={
    username,
     
};
