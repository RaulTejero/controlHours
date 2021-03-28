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
            res.json({message: "Eliminada correctamente.", deleteList : deletedList})
        } else {
            res.json({error:null,affectedRows: 0, message:"Error, no se ha podido eliminar."})
        }
    } catch (error) {
        res.json({error:error.message})
    };
});

router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        if (result.affectedRows != 0) {
            res.json({ message: "Creada correctamente", newList: req.body });
        } else {
            res.json({ error: null, affectedRows: 0, message: "Error, no se a podido crear."});
        }
    } catch (error) {
        res.json({ error: error.message })
    }
});

router.put('/', async (req,res)=> {
    const listAffected = await getForId(req.body.idUser,req.body.id);
    try {
        const result = await updateById(req.body.id,req.body.idUser,req.body);
        if (result.affectedRows != 0 ) {
            res.json({message:"Modificada correctamente",originList:listAffected, newList: req.body})
        } else {
            res.json({ error: null, affectedRows: 0, message: "Error, no se ha podido actualizar."});
        }
    } catch (error) {
        res.json({error:error.message})
    }
});

module.exports = router;