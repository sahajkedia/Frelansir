const ClientRoutes = require('./routes/ClientRoutes');
const FreelansirRoutes = require('./routes/FreelancerRoutes');
const app = require('express')();
const mongoose = require('mongoose');
const bp = require('body-parser');
app.use(bp.json());
app.use('/api/',FreelansirRoutes)
app.use('/api/',ClientRoutes)
mongoose.connect('mongodb+srv://sahajkedia:sahajkedia@companycluster.ybldu.mongodb.net/Database101?retryWrites=true&w=majority')
.then(()=>{

    app.listen(4000);
})
.catch((err) => {
    console.log(err)
})