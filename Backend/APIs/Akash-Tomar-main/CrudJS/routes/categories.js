const express = require('express')
const router = express.Router()
const Categories = require('../models/Categories')


router.post('/',async(req,res) => {
    const cat = new Categories({
        CategoryId: req.body.CategoryId,
        CategoryName: req.body.CategoryName,
        CategoryDes : req.body.CategoryDes,
        CategoryCreatedOn: req.body.CategoryCreatedOn,
        CategoryModifiedOn: req.body.CategoryModifiedOn
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
           const vat = await Categories.find()
           res.json(vat)
    }catch(err){ 
        res.send('Error ' + err)
    }
})
router.patch('/:id',async(req,res)=>{
    try{
        const alien = await Categories.findById(req.params.id)
        alien.CategoryId= req.body.CategoryId,
        alien.CategoryName= req.body.CategoryName,
        alien.CategoryDes = req.body.CategoryDes,
        alien.CategoryCreatedOn= req.body.CategoryCreatedOn,
        alien.CategoryModifiedOn= req.body.CategoryModifiedOn
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})
router.delete('/:id',async(req,res)=> {
    try{
        const alien = await Categories.findById(req.params.id) 
        const a1 = await alien.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router