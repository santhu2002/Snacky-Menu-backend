const express = require('express');
const router = express.Router();
const items = require('../models/Items')


//To create an  new item
router.post('/',(req,res)=>{
    const item= items(req.body)
    item.save();
    res.json(item)
    // console.log(item)
})

//to get all item
router.get('/allitems',async(req,res)=>{
    const allitems = await items.find()
    res.json(allitems)
    //this console prints items in our server console at backend whenever api call hits
    // console.log(allitems)
})

//update the item
router.put('/updateitem/:id',async (req,res)=>{
    const {title,price} = req.body 
    const newitem = {}
    if(title){newitem.title=title}
    if(price){newitem.price=price}
    const item = await items.findByIdAndUpdate(req.params.id,{$set:newitem},{new:true})
    res.send("updated successfully")
    // console.log(item)

})

//delete item
router.delete('/deleteitem/:id',async (req,res)=>{
    let ditem =  await items.findByIdAndDelete(req.params.id)
    res.json(ditem)
})
module.exports = router