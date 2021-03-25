const express = require('express');
const router = express.Router();


const { getAllLists } = require('../../models/lists');
const { getForId, deleteForId, create } = require('../../models/list');


router.get('/:idUser', async (req, res) => {
    try {
        const result = await getAllLists(req.params.idUser);
        res.json(result)
    } catch (error) {
        res.json({ error: error.message })
    }
});



router.get('/:idUser/:idList', async (req, res) => {
    try {
        const result = await getForId(req.params.idUser, req.params.idList);
        res.json(result)
    } catch (error) {
        res.json({ error: error.message })
    };
});

router.delete('/delete/:idUser/:idList', async (req,res)=> {
    try {
        const result = await deleteForId(req.params.idUser, req.params.idList );
        if (result.affectedRows === 1) {
            res.json({message: "Se ha borrado correctamente"})
        } else {
            res.json({error:"Error al eliminar"})
        }
    } catch (error) {
        res.json({error:error.message})
    };
});

router.post('/create', async (req, res) => {
    try {
        console.log(req.body);
        const result = await create(req.body);
        if (result.affectedRows === 1) {
            res.json({ message: "Nueva lista creada" });
        } else {
            res.json({ error: "No se a podido crear la nueva lista" });
        }
    } catch (error) {
        res.json({ error: error.message })
    }
});

module.exports = router;