const express = require('express');
const router = express.Router();


const { getAllLists } = require('../../models/lists');
const { getForId, deleteForId, create, updateById } = require('../../models/list');


router.get('/all/user/:idUser', async (req, res) => {
    try {
        const result = await getAllLists(req.params.idUser);
        res.json(result)
    } catch (error) {
        res.json({ error: error.message })
    }
});



router.get('/:idList/user/:idUser', async (req, res) => {
    try {
        const result = await getForId(req.params.idUser, req.params.idList);
        res.json(result)
    } catch (error) {
        res.json({ error: error.message })
    };
});

router.delete('/:idList/user/:idUser', async (req,res)=> {
    const deletedList = await getForId(req.params.idUser, req.params.idList);
    try {
        const result = await deleteForId(req.params.idUser, req.params.idList );
        if (result.affectedRows != 0) {
            res.json({message: "Se ha borrado correctamente.", deleteList : deletedList})
        } else {
            res.json({error:null,affectedRows: 0, message:"Error, lista no eliminada."})
        }
    } catch (error) {
        res.json({error:error.message})
    };
});

router.post('/create', async (req, res) => {
    try {
        const result = await create(req.body);
        if (result.affectedRows != 0) {
            res.json({ message: "Lista creada", newList: req.body });
        } else {
            res.json({ error: null, affectedRows: 0, message: "Error, lista no creada."});
        }
    } catch (error) {
        res.json({ error: error.message })
    }
});

router.put('/update', async (req,res)=> {
    const listAffected = await getForId(req.body.idUser,req.body.id);
    const changes = req.body;
    try {
        const result = await updateById(req.body.id,req.body.idUser,req.body);
        if (result.affectedRows != 0 ) {
            res.json({message:"Lista modificada correctamente",originList:listAffected, newList: changes})
        } else {
            res.json({ error: null, affectedRows: 0, message: "Error, lista no actualizada."});
        }
    } catch (error) {
        res.json({error:error.message})
    }
});

module.exports = router;