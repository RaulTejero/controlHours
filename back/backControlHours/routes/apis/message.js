const express = require('express');
const router = express.Router();

const { getAllMessage, deleteAllMessage, createMessage } = require('../../models/message')

router.get('/:idList', async (req, res) => {
    try {
        const result = await getAllMessage(req.params.idList);
        if (result.length < 1) {
            res.json({ status: 467, error: 421, result: null })
        } else {
            res.json({ status: 251, result: result })
        };
    } catch (error) {
        res.json({ error: error.message });
    };
});

router.post('/', async (req, res) => {
    try {
        const result = await createMessage(req.body);
        if (result.affectedRows != 0) {
            res.json({ status: 251, message: req.body })
        } else {
            res.json({ status: 467, error: 427 })
        }
    } catch (error) {
        res.json({ error: error.message });
    };
});


module.exports = router;