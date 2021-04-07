const express = require("express");
const router = express.Router();

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

router.post('/create', async (req, res) => {
    const { mail } = req.body;
    const user = await getUserByMail(mail);
    console.log(user);
    // TODO: repasar filtrar si existe el mail
    try {
        if (user.length < 1) {
            const result = await create(req.body);
            if (result.affectedRows < 1) {
                res.json({ error: 427 });
            } else {
                res.json({ code: 230 })
            }
        }else {
            res.json({code:233});
        }
    } catch (error) {
        res.json({ error: error.messaje });
    };
});

router.put('/', async (req, res) => {
    const userAffected = await getUserByMail(req.body.mail);
    try {
        const result = await update(req.body);
    } catch (error) {
        res.json({ error: error.messaje });
    };
});

module.exports = router;