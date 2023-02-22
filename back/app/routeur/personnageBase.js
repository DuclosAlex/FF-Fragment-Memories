const express = require('express');
const { personnageBaseController } = require('../controlleur');

const router = express.Router();

router.get('/', personnageBaseController.getAllPersonnages);

module.exports = router;