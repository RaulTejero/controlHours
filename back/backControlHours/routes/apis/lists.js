const express = require('express');
const router = express.Router();


const {getAllLitstForIdUser,getListForId } = require('../../models/lists');


router.get('/userId/:idUser/allLists', async (req,res)=>{
    try {
        const result = await getAllLitstForIdUser(req.params.idUser);
        res.json(result)
    } catch (error) {
        res.json({error:error.message})
    }
});
router.get('/userId/:idUser/listId/:id', async (req,res)=> {
    try {
        const result = await getListForId(req.params.id,req.params.idUser);
        res.json(result)
    } catch (error) {
        res.json({error:error.message})
    }
})

module.exports = router;