const express = require('express')
const router = express.Router()
const Events = require('../models/Events')


router.post('/',async(req,res) => {
    const eve = new Events({
        EventId: req.body.EventId,
        EventCategoryId : req.body.EventCategoryId,
        EventName: req.body.EventName,
        EventDes: req.body.EventDes,
        EventDate: req.body.EventDate,
        NoOfParticipants: req.body.NoOfParticipants,
        NoOfWinners: req.body.NoOfWinners,
        EventCreatedOn : req.body.EventCreatedOn,
        EventModifiedOn: req.body.EventModifiedOn,
    })
    try{
        const c =  await eve.save() 
        res.json(c)
    }catch(err){
        res.send('Error')
    }
})

router.get('/', async(req,res) => {
    try{
           const vat = await Events.find()
           res.json(vat)
    }catch(err){ 
        res.send('Error ' + err)
    }
})
router.patch('/:id',async(req,res)=>{
    try{
        const alien = await Events.findById(req.params.id)
        alien.EventId= req.body.EventId,
        alien.EventCategoryId= req.body.EventCategoryId,
        alien.EventName = req.body.EventName,
        alien.EventDes= req.body.EventDes,
        alien.EventDate= req.body.EventDate,
        alien.NoOfParticipants= req.body.NoOfParticipants,
        alien.NoOfWinners= req.body.NoOfWinners,
        alien.EventCreatedOn = req.body.EventCreatedOn,
        alien.EventModifiedOn= req.body.EventModifiedOn
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})
router.delete('/:id',async(req,res)=> {
    try{
        const alien = await Events.findById(req.params.id) 
        const a1 = await alien.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router