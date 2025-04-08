const diseaseCreateddb=require('./achecker.disease');
const mongoose = require('mongoose');


async function createdis(req){

        const disdata=req.body;
        const disvitials = disdata.vitals;
        const disname =disdata.name;
        const askques=disdata.ask;
        const dislookseenfeel=disdata.llm;
        let classificatio = disdata.classification;
        

        const diseasemain = new diseaseCreateddb({
            name:disname,
            viatls:disvitials,
            ask:askques,
            lookseenfeel:dislookseenfeel,
            classification:classificatio,
         });
         console.log("chill2");
        await diseasemain.save();
        console.log("chill3");
        // console.log(diseaemain);
        return ;
        }

module.exports = {
    createdis,
};  



