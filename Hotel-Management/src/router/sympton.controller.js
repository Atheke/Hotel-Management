const {
    checker,
  
}= require('../model/symtom.model.2');

function queryQustion(req,res){
    let fullSym;let allDes={};let moresym;
     let newsym = req.body.symptoms;
     
     let sev=Number(newsym[1])+Number(newsym[0]);
     sev=sev/2;
     console.log(sev);
    console.log(newsym);
    // let patientsym=req.session.store;
   // console.log(req.session.store);g
    // if(patientsym){
    //     fullSym = [...patientsym,...newsym];
    // }
        fullSym=newsym;
        let gig=[];
        
        for (var i = 2; i < newsym.length ; i++) {
            gig.push(fullSym[i]);
        }
        
    fullSym=gig;
    console.log(gig);

    // req.session.store=fullSym;

    if(fullSym[fullSym.length-1]=='none'){
        allDes=checker(fullSym,sev);
        return res.status(200).json(allDes);
    }

    else{
        let t = checker(fullSym,sev);

        if(typeof t==='object'){
            allDes=t;
            console.log('hey buddy');
            return res.status(200).json(allDes);
        }
        else{
            moresym = t;
        }
    }
    // if(moresym.length==1){
    //     return  res.status(200).json(moresym);
    // }if only one symtom desase is inside my filter

    // moresym=Array.from(moresym);
    console.log(moresym);
    return res.status(200).json(moresym);
    
}
module.exports = {
    queryQustion,
};