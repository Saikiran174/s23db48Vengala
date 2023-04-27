var express = require('express');

var router = express.Router();

// Require controller modules.

var api_controller = require('../controllers/api');

var school_controller = require('../controllers/school');

/// API ROUTE ///

// GET resources base.

router.get('/', api_controller.api);

/// COSTUME ROUTES ///

// POST request for creating a Costume.

router.post('/school', school_controller.school_create_post);

// DELETE request to delete Costume.

router.delete('/school/:id', school_controller.school_delete);

// PUT request to update Costume.

router.put('/school/:id', school_controller.school_update_put);

// GET request for one Costume.

router.get('/school/:id', school_controller.school_detail);

// GET request for list of all Costume items.

router.get('/school', school_controller.school_list);

module.exports = router;