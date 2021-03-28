const express = require('express');
const router = express.Router();

const {
    getAllPersons,
} = require('../../models/persons');
const {
    getPersonById,
    create,
    deleteForId,
    updateById
} = require('../../models/person')


router.get('/all/list/:idList/user/:idUser', async (req, res) => {
    try {
        const result = await getAllPersons(req.params.idUser, req.params.idList);
        if (result.length < 1) {
            res.json({code: 427})
        } else {
            res.json({code: 233, result:result})
        }
    } catch (error) {
        res.json({ code:490, error: error.message });
    };
});

router.get('/:idPerson/list/:idList/user/:idUser', async (req, res) => {
    try {
        const result = await getPersonById(req.params.idUser, req.params.idList, req.params.idPerson);
        res.json(result);
    } catch (error) {
        res.json({ error: erros.message });
    };
});

router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        if (result.affectedRows != 0) {
            res.json({ code: 233, newPerson: req.body })
        } else {
            res.json({ error: null, affectedRows: 0, message: "Error, persona no añadida." })
        };
    } catch (error) {
        res.json({ error: error.message })
    };
});

router.delete('/:idPerson/list/:idList/user/:idUser', async (req, res) => {
    const deletePerson = await getPersonById(req.params.idUser, req.params.idList, req.params.idPerson);
    try {
        const result = await deleteForId(req.params.idUser, req.params.idList, req.params.idPerson);
        if (result.affectedRows != 0) {
            res.json({ cod: 233, deletePerson: deletePerson });
        } else {
            res.json({cod:427});
        };
    } catch (error) {
        res.json({ code:490, error: error.message });
    };
});

router.put('/', async (req, res) => {
    const personAffected = await getPersonById(req.body.idUser, req.body.idList, req.body.idPerson);
    try {
        const result = await updateById(req.body.idUser, req.body.idList, req.body.idPerson, req.body);
        if (result.affectedRows != 0) {
            res.json({ message: "Modificado correctamente", originPerson: personAffected, updatePerson: req.body })
        } else {
            res.json({code: 427})
        }
    } catch (error) {
        res.json({ error: error.message });
    };
});

module.exports = router;