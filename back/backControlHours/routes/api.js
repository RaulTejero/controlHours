const express = require('express');
const router = express.Router();

const apiListsRouter = require('./apis/list');
const apiPersonsRouter = require('./apis/person');
const apiUsersRouter = require('./apis/users');
const apiMessageRouter = require('./apis/message');

router.use('/list', apiListsRouter);
router.use('/person', apiPersonsRouter);
router.use('/user',apiUsersRouter);
router.use('/message',apiMessageRouter);


module.exports = router;