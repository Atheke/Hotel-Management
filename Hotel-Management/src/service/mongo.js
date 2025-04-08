const mongoose= require('mongoose');//mongodb 
const MONGO_URL='mongodb+srv://hello:Xqo31Wpoi83ev0Lm@cluster0.htwas83.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// adding event listeners
mongoose.connection.once('open',()=>{
    console.log('mongodb connection ready');
});
mongoose.connection.on('error',(err)=>{ 
    console.error(err);
});
const options = {
    useNewUrlParser: true,
  };

async function mongoConnect() {
    mongoose.connect(MONGO_URL,options);
}

module.exports = {
    mongoConnect,
};
