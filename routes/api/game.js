//=====================================================================================================================
// Dependencies
//=====================================================================================================================

const express = require('express');

const config = require('config');
const {check, validationResult} = require ('express-validator');

const router = express.Router();


//=====================================================================================================================
// this is basically a test route
// @route   GET api/gameboard
// @desc    Test route
// @access  Public
//=====================================================================================================================

router.get('/', (req, res) => res.send('Game route'));



//=====================================================================================================================
// Export router to use in server.js
//=====================================================================================================================

module.exports = router;