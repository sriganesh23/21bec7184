const express = require('express');
const router = express.Router();
const { handlePostRequest, handleGetRequest } = require('../controllers/bfhlController');

router.post('/bfhl', handlePostRequest);
router.get('/bfhl', handleGetRequest);

module.exports = router;
