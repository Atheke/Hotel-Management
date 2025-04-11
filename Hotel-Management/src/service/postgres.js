// db.js
const { Client } = require('pg');

// Set up the connection details
const client = new Client({
  user: 'arima',  // Your PostgreSQL username
  host: 'localhost', // Database host, usually localhost
  database: 'hotel_db', // Your database name
  password: '123456', // Your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

// Connect to the PostgreSQL database
client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

// Export the client to use it in other files
module.exports = client;
