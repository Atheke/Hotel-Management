const path = require('path');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const cookie_session = require('cookie-session');


const {checkUser} = require('./service/authentication');

const {createUser} = require('./model/createuser');



const {dashboardRouter} = require('./router/dashboard.router');


const app = express();
const client = require('../src/service/postgres')


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

app.get('/staff', async (req, res) => {
  try {
    // Run a sample query
    const result = await client.query('SELECT staff_id, full_name, email, phone, position, department, hotel_id FROM staff');

    const staffData = result.rows.map(item => ({
      staff_id: item.staff_id,
      full_name: item.full_name,
      email: item.email,
      phone: item.phone,
      position: item.position,
      department: item.department,
      hotel_id: item.hotel_id,
    }));

    res.json(staffData);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Error connecting to the database');
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


app.get('/room', async (req, res) => {
  try {
    const result = await client.query(`
      SELECT Room.*, Hotel.name AS hotel_name, Hotel.address, Hotel.rating 
      FROM Room 
      JOIN Hotel ON Room.hotel_id = Hotel.hotel_id
    `);
    const rooms = result.rows.map(item => ({
      room_id: item.room_id,
      hotel_id: item.hotel_id,
      hotel_name: item.hotel_name,
      address: item.address,
      room_number: item.room_number,
      room_type: item.room_type,
      bed_count: item.bed_count,
      capacity: item.capacity,
      status: item.status,
      price_per_night: item.price_per_night,
      rating: item.rating,
    }));
    res.json(rooms);
  } catch (err) {
    console.error('Error fetching rooms:', err);
    res.status(500).send('Server Error');
  }
});

app.get('/guest', async (req, res) => {
  try {
    const result = await client.query(`
      SELECT guest_id, full_name, email, phone, user_role,password
      FROM Guest
    `);

    const guests = result.rows.map(item => ({
      guest_id: item.guest_id,
      full_name: item.full_name,
      email: item.email,
      phone: item.phone,
      password: item.password,
      user_role: item.user_role,
    }));

    res.json(guests);
  } catch (err) {
    console.error('Error fetching guest data:', err);
    res.status(500).send('Server Error');
  }
});

app.get('/reservation', async (req, res) => {
  try {
    const result = await client.query(`
      SELECT 
        Reservation.*, 
        Guest.full_name AS guest_name, Guest.email, 
        Room.room_number, 
        Hotel.name AS hotel_name
      FROM Reservation
      JOIN Guest ON Reservation.guest_id = Guest.guest_id
      JOIN Room ON Reservation.room_id = Room.room_id
      JOIN Hotel ON Room.hotel_id = Hotel.hotel_id
    `);
    const reservations = result.rows.map(item => ({
      reservation_id: item.reservation_id,
      guest_id: item.guest_id,
      guest_name: item.guest_name,
      guest_email: item.email,
      room_id: item.room_id,
      room_number: item.room_number,
      hotel_name: item.hotel_name,
      check_in_date: item.check_in_date,
      check_out_date: item.check_out_date,
      reservation_status: item.reservation_status,
      created_at: item.created_at,
    }));
    res.json(reservations);
  } catch (err) {
    console.error('Error fetching reservations:', err);
    res.status(500).send('Server Error');
  }
});

app.get('/hotel', async (req, res) => {
  try {
    const result = await client.query(`
      SELECT hotel_id, name, address, contact_number, rating
      FROM Hotel
    `);

    const hotels = result.rows.map(item => ({
      hotel_id: item.hotel_id,
      name: item.name,
      address: item.address,
      contact_number: item.contact_number,
      rating: item.rating,
    }));

    res.json(hotels);
  } catch (err) {
    console.error('Error fetching hotel data:', err);
    res.status(500).send('Server Error');
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
app.get('/service', async (req, res) => {
  try {
    const result = await client.query(`
      SELECT 
        Guest.full_name AS guest_name, 
        Service.service_name, 
        ServiceUsage.*, 
        Room.room_number 
      FROM ServiceUsage
      JOIN Guest ON ServiceUsage.guest_id = Guest.guest_id
      JOIN Service ON ServiceUsage.service_id = Service.service_id
      JOIN Room ON ServiceUsage.room_id = Room.room_id
    `);
    const services = result.rows.map(item => ({
      usage_id: item.usage_id,
      guest_id: item.guest_id,
      guest_name: item.guest_name,
      service_id: item.service_id,
      service_name: item.service_name,
      room_id: item.room_id,
      room_number: item.room_number,
      usage_date: item.usage_date,
      quantity: item.quantity,
      total_amount: item.total_amount,
    }));
    res.json(services);
  } catch (err) {
    console.error('Error fetching service usage:', err);
    res.status(500).send('Server Error');
  }
});




module.exports = app;

