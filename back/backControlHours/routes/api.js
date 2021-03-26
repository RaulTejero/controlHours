const express = require('express');
const router = express.Router();

const apiListsRouter = require('./apis/list');
const apiPersonsRouter = require('./apis/person');


router.use('/list', apiListsRouter);
router.use('/person', apiPersonsRouter);



module.exports = router;