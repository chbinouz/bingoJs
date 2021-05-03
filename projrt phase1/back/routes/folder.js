const express = require('express');
const router = express.Router();
const { createOne, getOne, list } = require('../controllers/folderController')


router.route('/')
    .get(list)
    .post(createOne)

router.route('/:id')
    .get(getOne)

module.exports = router
