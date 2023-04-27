var express = require('express');
const school_controlers= require('../controllers/school');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
   
/* GET update school page */
router.get('/update', secured, school_controlers.school_update_Page);

/* GET home page. */
router.get('/', school_controlers.school_view_all_Page );

router.get('/detail', secured, school_controlers.school_view_one_Page);

/* GET create school page */
router.get('/create', secured, school_controlers.school_create_Page);g

/* GET create update page
router.get('/update', school_controlers.school_update_Page); */

/* GET delete school page */
router.get('/delete', secured, school_controlers.school_delete_Page);
module.exports = router;

