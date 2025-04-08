const express = require('express');
const path = require('path');
const app = express();
const {
    created,
    getdisease,
} = require('./admin.contorller');



const adminRouter=express.Router();

adminRouter.post('/adddis',created);
adminRouter.post('/getdis',getdisease);

module.exports = {
    adminRouter,
};


