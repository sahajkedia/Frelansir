const ClientRoutes = require('./routes/ClientRoutes');
const cors = require('cors')
const FreelansirRoutes = require('./routes/FreelancerRoutes');
const app = require('express')();
const mongoose = require('mongoose');
const bp = require('body-parser');
app.use(bp.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
app.use('/api/',FreelansirRoutes)
app.use('/api/',ClientRoutes)
mongoose.connect('mongodb+srv://sahajkedia:sahajkedia@companycluster.ybldu.mongodb.net/Database101?retryWrites=true&w=majority')
.then(()=>{
    console.log('DB Connected')
    app.listen(4000);
})
.catch((err) => {
    console.log(err)
})