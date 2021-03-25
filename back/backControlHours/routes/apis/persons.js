const express = require('express');
const router = express.Router();

const { getAllPersons } = require('../../models/persons');


router.get('/userId/:idUser/listId/:idList', async(req,res)=> {
    try {
        const result = await getAllPersons(req.params.idList, req.params.idUser);
        res.json(result);
    } catch (error) {
        res.json({error:error.message})
    }
});

module.exports = router;