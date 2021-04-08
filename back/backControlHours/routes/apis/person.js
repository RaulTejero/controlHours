const express = require('express');
const router = express.Router();

const {
    getAllPersons,
    restoreHoursAllPersonsForIdList
} = require('../../models/persons');

const {
    getPersonById,
    create,
    deleteForId,
    updateById,
    calcHoursRemaining
} = require('../../models/person')


router.get('/all/list/:idList/user/:idUser', async (req, res) => {
    try {
        const result = await getAllPersons(req.params.idUser, req.params.idList);
        if (result.length < 1) {
            res.json({ status: 467, error: 427, result: null })
        } else {
            res.json({ status: 251, result: result })
        };
    } catch (error) {
        res.json({ error: error.message });
    };
});

router.get('/:idPerson/list/:idList/user/:idUser', async (req, res) => {
    try {
        const result = await getPersonById(req.params.idUser, req.params.idList, req.params.idPerson);
        if (result.length < 1) {
            res.json({ status: 467, error: 427 })
        } else {
            res.json({ status: 251, result: result });
        };
    } catch (error) {
        res.json({ error: erros.message });
    };
});

router.post('/', async (req, res) => {
    try {
        const hoursRemaining = calcHoursRemaining(req.body.hoursInitial, req.body.hoursYielded);
        req.body.hoursRemaining = hoursRemaining;
        const result = await create(req.body);
        if (result.affectedRows != 0) {
            res.json({ status: 251, newPerson: req.body })
        } else {
            res.json({ status: 467, error: 427, result: null });
        };
    } catch (error) {
        res.json({ error: error.message })
    };
});


router.delete('/:idPerson/list/:idList/user/:idUser', async (req, res) => {
    try {
        const deletePerson = await getPersonById(req.params.idUser, req.params.idList, req.params.idPerson);
        const result = await deleteForId(req.params.idUser, req.params.idList, req.params.idPerson);
        if (result.affectedRows != 0) {
            res.json({ status: 251, result: deletePerson });
        } else {
            res.json({ status: 467, error: 427 });
        };
    } catch (error) {
        res.json({ error: error.message });
    };
});

router.put('/', async (req, res) => {
    try {
        const hoursRemaining = calcHoursRemaining(req.body.hoursInitial, req.body.hoursYielded);
        req.body.hoursRemaining = hoursRemaining;
        const personAffected = await getPersonById(req.body.idUser, req.body.idList, req.body.idPerson);
        const result = await updateById(req.body);
        if (result.affectedRows != 0) {
            res.json({ status: 251, updatePerson: personAffected, changesPerson: [req.body] });
        } else {
            res.json({ code: 427 });
        }
    } catch (error) {
        res.json({ error: error.message });
    };
});


router.put('/restore/:idList/:idUser', async (req, res) => {
    try {
        const result = await restoreHoursAllPersonsForIdList(req.params.idList, req.params.idUser);
        if (result.affectedRows !=0) {
             res.json({ status: 251 })
        } else {
            res.json({status:467, error:427})
        };
    } catch (error) {
        res.json({ error: error.message });
    };
});

module.exports = router;