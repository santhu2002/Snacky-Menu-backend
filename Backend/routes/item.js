const express = require('express');
const router = express.Router();
const items = require('../models/Items')
const fetchuser = require("../middleware/fetchuser");

//To create an  new item
router.post('/', fetchuser,async (req,res)=>{
    // const item= items(req.body)
    // item.save();
    // res.json(item)
    // console.log(item)

    try {
        const { title, price } = req.body
        const item = new items({
            title, price,  user: req.user.id
        })
        const savednote = await item.save();

        res.json(savednote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured")

    }
})

//to get all item
router.get('/allitems', fetchuser,async(req,res)=>{
    // const allitems = await items.find()
    // res.json(allitems)
    //this console prints items in our server console at backend whenever api call hits
    // console.log(allitems)

    try {
        const allitems = await items.find({ user: req.user.id });
        res.json(allitems)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured")
    }
})

//update the item
router.put('/updateitem/:id',async (req,res)=>{
    const {title,price} = req.body 
    const newitem = {}
    if(title){newitem.title=title}
    if(price){newitem.price=price}
    const item = await items.findByIdAndUpdate(req.params.id,{$set:newitem},{new:true})
    res.json(item)
    // console.log(item)

})

//delete item
router.delete('/deleteitem/:id',fetchuser,async (req,res)=>{
    // let ditem =  await items.findByIdAndDelete(req.params.id)
    // res.json(ditem)

    try {
        //find the note to be deleted
        let item = await items.findById(req.params.id);
        if (!item) {
            return res.status(404).send("Not found")
        }
        //Allow deletion if user owns that Note
        if (item.user.toString() != req.user.id) {
            return res.status(401).send("not allowed to change")
        }
        item = await items.findByIdAndDelete(req.params.id)
        res.json({ "Success": "item has been deleted", item: item });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured")

    }
})
module.exports = router