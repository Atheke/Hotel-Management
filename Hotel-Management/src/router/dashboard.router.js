const express = require('express');
const path = require('path');
const app = express();



const {
    getAllergies,
    // getAppointment,
     getMedication,
     GetAllHistory,
     GetAllinfo,
     username,
     updateitm,
     deleteitm,
     updateita,
     deleteita,
     updateitp,
     deleteitp,

}= require('./dashboard.contorller');

app.use(express.static(path.join(__dirname,'..','public','dashboard')));

const dashboardRouter=express.Router();

dashboardRouter.get(('/'),(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','dashboard','dashboard.html'));
  });



 dashboardRouter.get('/username', username);
 





module.exports ={
    dashboardRouter,
};
