const express = require('express');
const router = express.Router();

const apiListsRouter = require('./apis/list');
const apiPersonsRouter = require('./apis/person');
const apiUsersRouter = require('./apis/users');


router.use('/list', apiListsRouter);
router.use('/person', apiPersonsRouter);
router.use('/user',apiUsersRouter);



module.exports = router;