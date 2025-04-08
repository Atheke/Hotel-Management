const express = require('express');
const path = require('path');
const app = express();

const {queryQustion} = require('./sympton.controller');

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

dashboardRouter.get('/allergies', getAllergies);

// dashboardRouter.get('/appointment', getAppointment);

 dashboardRouter.get('/currentMedication', getMedication);
 dashboardRouter.get('/patientHistory', GetAllHistory);
 dashboardRouter.get('/healthInfo',GetAllinfo);
 dashboardRouter.get('/username', username);
 dashboardRouter.post('/currentMedication/delete', deleteitm);
 dashboardRouter.post('/currentMedication/update', updateitm);
 dashboardRouter.post('/patientHistory/delete', deleteitp);
 dashboardRouter.post('/patientHistory/update', updateitp);
 dashboardRouter.post('/allergies/delete', deleteita);
 dashboardRouter.post('/allergies/update', updateita);




dashboardRouter.post('/symptoms', queryQustion);

module.exports ={
    dashboardRouter,
};
