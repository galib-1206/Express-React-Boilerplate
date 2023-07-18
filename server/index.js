//create instance of framework as express
//again app is an instance of express
const express = require('express')
const app = express()
const cors = require('cors')

//for parsing json body (post req)
app.use(express.json());
app.use(cors());

const db =  require("./models");

//importing and applying Routers
const postRouter = require('./routes/Posts') 
//middleware 
app.use("/posts",postRouter);


db.sequelize.sync().then(() => {
// start api
//port 3001, ()=> it means anonymous func
app.listen(3001,() =>{
    console.log("server running on port 3001"); 
});

});