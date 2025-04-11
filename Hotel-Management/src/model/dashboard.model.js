const userDataBase= require('./createuser.mongo');



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
    
    userName,
}
