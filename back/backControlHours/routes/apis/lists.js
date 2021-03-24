const express = require('express');
const router = express.Router();


const { getAll } = require('../../models/lists');


router.get('/', async (req,res)=>{
    try {
        const rows = await getAll();
        res.json(rows)
    } catch (error) {
        res.json({error:error.message})
    }
})

module.exports = router;