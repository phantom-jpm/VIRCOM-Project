const express = require('express')
const router = express.Router()
const Winners = require('../models/Winners')


router.post('/',async(req,res) => {
    const cat = new Winners({
        WinnersId: req.body.WinnersId,
        WinnersName: req.body.WinnersName,
        PrizeAmount : req.body.PrizeAmount,
        WinnersCreatedOn: req.body.WinnersCreatedOn,
        WinnersModifiedOn: req.body.WinnersModifiedOn
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
           const vat = await Winners.find()
           res.json(vat)
    }catch(err){ 
        res.send('Error ' + err)
    }
})
router.patch('/:id',async(req,res)=>{
    try{
        const alien = await Winners.findById(req.params.id)
        alien.WinnersId= req.body.WinnersId,
        alien.WinnersName= req.body.WinnersName,
        alien.PrizeAmount = req.body.PrizeAmount,
        alien.WinnersCreatedOn= req.body.WinnersCreatedOn,
        alien.WinnersModifiedOn= req.body.WinnersModifiedOn
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})
router.delete('/:id',async(req,res)=> {
    try{
        const alien = await Winners.findById(req.params.id) 
        const a1 = await alien.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
module.exports = router