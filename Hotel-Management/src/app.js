const path = require('path');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const cookie_session = require('cookie-session');

const {adminRouter} = require('./router/admin.router');

const {createUser} = require('./model/createuser');

const {checkUser} = require('./service/authentication');


const {dashboardRouter} = require('./router/dashboard.router');


const app = express();


app.use(cookie_session({
  name: 'session',
  keys: ['fuckyou'],
  maxAge: 60*60*1000
}));


function authenticate(req, res, next) {
  if (req.session && req.session.userId) {
    console.log(req.session.userId);
    return next();
}
return res.send('not authenticated');
}



app.use(bodyParser.json());
app.use(morgan('combined'));// give the logs;
app.use(express.json());// parse the req.body to json
app.use(express.static(path.join(__dirname,'public','signin')));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json()); // to parse JSON body




//app.use()

app.use('/admin',adminRouter);

app.post('/login',async(req,res)=>{
  const statu = await checkUser(req);
  console.log(req.body.email);
  console.log(statu);
  if(statu){
    req.session.userId=req.body.email;
    return res.redirect(301,'/dashboard');
  }
  
  if(!statu){
    return res.status(401).json({message:'that the the longin falide user doesnot exit'});
  }
});



app.post('/create',async(req,res)=>{

  const answer= await createUser(req);
  

  if(answer){
    res.status(200).json({no:'200'});
  }
  else{
    res.status(404).json({message:'that the longin falide'});
  }
});





app.use('/dashboard',authenticate,dashboardRouter);


app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','signin'));
});

app.get('/logout',authenticate,(req,res)=>{
    req.session = null;
    return res.send('logout sucessfully');
});




module.exports = app;

