const express = require('express');
const mongoose=require('mongoose');
const AdminBro = require('admin-bro');
const mongooseAdminBro = require('@admin-bro/mongoose');
const expressAdminBro = require('@admin-bro/express');
const app=express();

//for CORES POLICY
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  
  if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  
  next()
  });

app.get('/', (req,res)=>res.send('Hello World'));
//app.get('/admin', (req,res)=>res.send('Hello World again'));

// Database
mongoose.connect("mongodb+srv://manomaya_p:a123@cluster0.q97yq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology:true })
mongoose.connection.on("error", function(error) {
    console.log(error)
  })
  mongoose.connection.on("open", function() {
    console.log("Connected to MongoDB database.")
  })

const Organiser = require('./models/Organiser')
const participantschemas = require('./models/participantschemas')
const Address= require('./models/Address')
const Category=require('./models/Category')
const Events=require('./models/Events')
const Winners=require('./models/Winners')

AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {
 
  resources: [participantschemas, Organiser, Address, Category,Events,Winners],
   rootPath: '/admin',

  branding: {
    logo: '',
    companyName: '',
    softwareBrothers: false   // if Software Brothers logos should be shown in the sidebar footer
  },
}
const adminBro = new AdminBro(AdminBroOptions)
const router = expressAdminBro.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router)

app.listen(8000, ()=>console.log('Listening at Port 8000'));