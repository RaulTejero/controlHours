const express = require('express');
const router = express.Router();

const { getAllPersons,
    getTotalHoursInitialAllPersons,
    getTotalHoursUsedAllPersons,
    getTotalHoursavailableAllPersons
} = require('../../models/persons');
const {
    getPersonById,
    create,
    deleteForId,
    updateById
} = require('../../models/person')


router.get('/all/user/:idUser/list/:idList', async (req, res) => {
    try {
        const result = await getAllPersons(req.params.idUser, req.params.idList);
        res.json(result);
    } catch (error) {
        res.json({ error: error.message });
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
 router.post('/create', async (req,res)=>{
    try {
        const result = await create(req.body);
        res.json(result);
    } catch (error) {
        res.json({error:error.message})
    }
 })

// TODO: probar peticiones
module.exports = router;