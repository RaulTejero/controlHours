const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
    getUserByMail,
    update,
    create
} = require('../../models/user')


router.get('/:mail', async (req, res) => {
    try {
        const result = await getUserByMail(req.params.mail);
        if (result.length < 1) {
            res.json({ error: 427 });
        } else {
            res.json({ status: 251, message: 233, user: result });
        };
    } catch (error) {
        res.json({ error: error.message });
    };
});

router.post('/', async (req, res) => {
    try {
        const { mail } = req.body;
        const userMail = await getUserByMail(mail);
        if (userMail.length < 1) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const result = await create(req.body);
            if (result.affectedRows < 1) {
                res.json({ error: 467 });
            } else {
                res.json({ status: 251 });
            }
        } else {
            res.json({ status:467, message: 233});
        }
    } catch (error) {
        res.json({ error: error.messaje });
    };
});

router.post('/login', async (req, res) => {
    try {
        const { mail, password } = req.body;
        const user = await getUserByMail(mail);
        if (user.length != 1) {
            return res.json({ error: 427 });
        }
        // const passwordCompared = bcrypt.compareSync(password, user[0].password);  --> no me ha funcionado
        if (password != user[0].password) {
            return res.json({ status: 467, error: 458 })
        } else {
            res.json({ status: 251, token: createToken(user)  })
        }
    } catch (error) {
        res.json({ error: error.messaje});
    };
})

function createToken(user) {
    const obj = {
        id: user.id,
    }
    return jwt.sign(obj, process.env.SECRET_KEY)
};

router.put('/', async (req, res) => {
    try {
        const result = await update(req.body);
        if (result.affectedRows != 0) {
            res.json({ status: 251 });
        } else {
            res.json({ status: 467, error: 427 });
        }
    } catch (error) {
        res.json({ error: error.messaje });
    };
});

module.exports = router;