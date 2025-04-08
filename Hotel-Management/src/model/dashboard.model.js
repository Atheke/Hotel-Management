const userDataBase= require('./createuser.mongo');
async function allergies(req) {
try{
   const user = req.session.userId;
   const data = await userDataBase.findOne({
        email:user,
   });
   const answer = data.dashboard.allergers;
   console.log(answer);
   return answer;
}catch(err){
   console.error(err);
}
}
// async function appointment(req) {

//     const user = req.body.email;
//     const data= await userDataBase.findOne({
//          email:user,
//     });
//     const answer = data.dashboard.allergies;
//     return answer;
//  }
 async function medication(req) {
   try{
    const user = req.session.userId;
    const data= await userDataBase.findOne({
         email:user,
    });
    const answer = data.dashboard.currentMedication;
    return answer;
   }catch(err){
      console.error(err);
   }

 }

 
 async function history(req) {
   try{
    const user = req.session.userId;
    const data= await userDataBase.findOne({
         email:user,
    });
    const answer = data.dashboard.patientHistory;
    return answer;
   }catch(err){
      console.error(err);
   }
 }



 async function info(req) {
   try{

    const user = req.session.userId;
    const data= await userDataBase.findOne({
         email:user,
    });
    const answer = data.dashboard.healthInfo;
    return answer;
   }catch(err){
      console.error(err);
   }
 }
//  async function symptoms(req) {

//     const user = req.body.email;
//     const data= await userDataBase.findOne({
//          email:user,
//     });
//     const answer = data.dashboard.allergies;
//     return answer;
//  }
async function userName(req) {
   try{

   const user = req.session.userId;
   const data= await userDataBase.findOne({
        email:user,
   });
   const answer = data.fullname;
   console.log(answer);
   return answer;
   }catch(err){
   console.error(err);
}
}


module.exports ={
    allergies,
    // appointment,
    medication,
    history,
    info,
    // symtoms,
    userName,
}
