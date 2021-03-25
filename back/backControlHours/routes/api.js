const express = require('express');
const router = express.Router();

const apiListsRouter = require('./apis/lists');
const apiPersonsRouter = require('./apis/persons');


router.use('/lists', apiListsRouter);
router.use('/persons', apiPersonsRouter);



module.exports = router;