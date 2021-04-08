const express = require('express');
const router = express.Router();


const { getAllLists } = require('../../models/lists');
const { getForId, deleteForId, create, updateById } = require('../../models/list');


router.get('/all/user/:idUser', async (req, res) => {
    try {
        const result = await getAllLists(req.params.idUser);
        if (result.length < 1) {
            res.json({status:467, error: 427, result: null})
        } else {
            res.json({status: 251, result: result})
        };
    } catch (error) {
        res.json({ error: error.message })
    };
});

router.get('/:idList/user/:idUser', async (req, res) => {
    try {
        const result = await getForId(req.params.idUser, req.params.idList);
        if (!result) {
            res.json({status:467, error:427})
        } else {
            res.json({status: 251, result:result})   
        };
    } catch (error) {
        res.json({ error: error.message })
    };
});

router.delete('/:idList/user/:idUser', async (req,res)=> {
    const deletedList = await getForId(req.params.idUser, req.params.idList);
    try {
        const result = await deleteForId(req.params.idUser, req.params.idList );
        if (result.affectedRows != 0) {
            res.json({status: 251, result: deletedList});
        } else {
            res.json({status:467,error:427})
        };
    } catch (error) {
        res.json({error:error.message})
    };
});

router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        if (result.affectedRows != 0) {
            res.json({ status: 251, newList: req.body });
        } else {
            res.json({ status:467});
        }
    } catch (error) {
        res.json({ error: error.message })
    };
});

router.put('/', async (req,res)=> {
    const listAffected = await getForId(req.body.idUser,req.body.id);
    try {
        const result = await updateById(req.body.id,req.body.idUser,req.body);
        if (result.affectedRows != 0 ) {
            res.json({ status: 251,result:{updateList:listAffected, changesList: [req.body]} })
        } else {
            res.json({ status: 467, error: 427});
        };
    } catch (error) {
        res.json({error:error.message})
    };
});

module.exports = router;