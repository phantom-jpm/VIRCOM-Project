const mongoose = require('mongoose')

const OrganiserSchema = new mongoose.Schema({

  FirstName: {
    type: String
},
MiddleName: {
    type: String
},
LastName: {
    type: String
},
DOB: {
 type: String
},
ContactNO: {
 type: String
},
AlterNateNo: {
 type: String
},
Email: {
 type: String
},
Profession: {
 type: String
},
ResAddress: {
 type: String
},
offAddress: {
 type: String
},
Country: {
 type: String
},
State: {
 type: String
},
Pincode: {
 type: String
},
CompanyName: {
 type: String
},
UserName:{
 type: String
},
Password: {
 type: String
},
From: {
 type: String
},
To: {
 type: String
}



  });
  
module.exports = mongoose.model('Organiser',OrganiserSchema);
