const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

const {
    getUserByMail,
    update,
    create
} = require('../../models/user')


router.get('/:mail', async (req, res) => {
    try {
        const result = await getUserByMail(req.params.mail);
        if (result.length < 1) {
            res.json({ cod: 427 });
        } else {
            res.json({ code: 233, result: result })
        }
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { mail } = req.body;
        const userMail = await getUserByMail(mail);
        if (userMail.length < 1) {
            req.body.password = bcrypt.hashSync(req.body.password,10);
            const result = await create(req.body);
            if (result.affectedRows < 1) {
                res.json({ error: 427 });
            } else {
                res.json({ code: 230, message: "create" })
            }
        } else {
            res.json({ code: 233, error: "no create" });
        }
    } catch (error) {
        res.json({ error: error.messaje });
    };
});

router.put('/', async (req, res) => {
    try {
        const result = await update(req.body);
        if (result.affectedRows != 0) {
            res.json({ code: 230 });
        } else {
            res.json({ code: 427 });
        }
    } catch (error) {
        res.json({ error: error.messaje });
    };
});

module.exports = router;