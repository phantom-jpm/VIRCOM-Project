const express = require('express')
const router = express.Router()
const Prizes = require('../models/Prizes')


router.post('/',async(req,res) => {
    const cat = new Prizes({
        PrizeId: req.body.PrizeId,
        PrizeName: req.body.PrizeName,
        PrizeCreatedOn : req.body.PrizeCreatedOn,
        PrizeModifiedOn: req.body.PrizeModifiedOn
    })
    try{
        const c =  await cat.save() 
        res.json(c)
    }catch(err){
        res.send('Error')
    }
})

router.get('/', async(req,res) => {
    try{
           const vat = await Prizes.find()
           res.json(vat)
    }catch(err){ 
        res.send('Error ' + err)
    }
})
router.patch('/:id',async(req,res)=>{
    try{
        const alien = await Prizes.findById(req.params.id)
        alien.PrizeId= req.body.PrizeId,
        alien.PrizeName= req.body.PrizeName,
        alien.PrizeCreatedOn = req.body.PrizeCreatedOn,
        alien.PrizeModifiedOn= req.body.PrizeModifiedOn
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id',async(req,res)=> {
    try{
        const alien = await Prizes.findById(req.params.id) 
        const a1 = await alien.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})


module.exports = router