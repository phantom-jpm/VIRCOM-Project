const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')




router.get('/', async(req,res) => {

    try{
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){ 
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const alien = await Alien.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const alien = new Alien({
        FirstName : req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        DOB: req.body.DOB,
        ContactNo: req.body.ContactNO,
        AlterNateNo: req.body.AlterNateNo,
        Email: req.body.Email,
        Profession: req.body.Profession,
        ResAddress: req.body.ResAddress,
        offAddress: req.body.offAddress,
        Country : req.body.Country,
        State: req.body.State,
        Pincode: req.body.Pincode,
        CompanyName: req.body.CompanyName,
        UserName: req.body.UserName,
        Password: req.body.Password,
        From: req.body.From,
        To: req.body.To
    })
    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})
        

router.patch('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id) 
        alien.FirstName = req.body.FirstName
        alien.MiddleName = req.body.MiddleName
        alien.LastName = req.body.LastName
        alien.DOB = req.body.DOB
        alien.ContactNO = req.body.ContactNO
        alien.AlterNateNo = req.body.AlterNateNo
        alien.Email= req.body.Email,
        alien.Profession= req.body.Profession,
        alien.ResAddress = req.body.FirstName,
        
        alien.offAddress= req.body.offAddress,
        alien.Country= req.body.Country,

        alien.State= req.body.State,
        alien.Pincode= req.body.Pincode,

        alien.CompanyName= req.body.CompanyName,
        alien.UserName= req.body.UserName,
        alien.Password= req.body.Password,
        alien.From= req.body.From,
        alien.To= req.body.To
        

        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id) 
        const a1 = await alien.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})






module.exports = router