var express = require('express');
const school_controlers= require('../controllers/school');
var router = express.Router();

/* GET home page. */
router.get('/', school_controlers.school_view_all_Page );
module.exports = router;

