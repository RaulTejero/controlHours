const express = require('express');
const router = express.Router();

const apiListsRouter = require('./apis/lists');


router.use('/lists', apiListsRouter);



module.exports = router;