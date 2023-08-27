const express = require('express');
const router = express.Router();
const bills = require('../models/Bills')
const fetchuser = require("../middleware/fetchuser");

//To create an  new bill
router.post('/', fetchuser,async (req,res)=>{

    try {
        const { totalprice, billdata } = req.body
        const bill = new bills({
            totalprice, billdata,  user: req.user.id
        })
        const savedbill = await bill.save();

        res.json(savedbill)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured")

    }
})


module.exports = router