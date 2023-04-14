var school = require('../models/school');

// List of all schools

exports.school_list = function (req, res) {

    res.send('NOT IMPLEMENTED: school list');

};

// for a specific school.

exports.school_detail = function (req, res) {

    res.send('NOT IMPLEMENTED: school detail: ' + req.params.id);

};

// Handle school create on POST.

exports.school_create_post = function (req, res) {

    res.send('NOT IMPLEMENTED: school create POST');

};

// Handle school delete form on DELETE.

// exports.school_delete = function(req, res) {

//  res.send('NOT IMPLEMENTED: school delete DELETE ' + req.params.id);

// };

// Handle school update form on PUT.

// exports.school_update_put = function(req, res) {

//  res.send('NOT IMPLEMENTED: school update PUT' + req.params.id);

// };

exports.school_detail = async function (req, res) {

    console.log("detail" + req.params.id)

    try {

        result = await school.findById(req.params.id)

        res.send(result)

    } catch (error) {

        res.status(500)

        res.send(`{"error": document for id ${req.params.id} not found`);

    }

};



// List of all school

exports.school_list = async function (req, res) {

    try {

        theschool = await school.find();

        res.send(theschool);

    }

    catch (err) {

        res.status(500);

        res.send(`{"error": ${err}}`);

    }

};

exports.school_update_put = async function (req, res) {

    console.log(`update on id ${req.params.id} with body

 ${JSON.stringify(req.body)}`)

    try {

        let toUpdate = await school.findById(req.params.id)

        // Do updates of properties

        if (req.body.school_type)

            toUpdate.school_name = req.body.school_name;

        if (req.body.school_type) toUpdate.school_type = req.body.school_type;

        if (req.body.strength) toUpdate.strength = req.body.strength;

        let result = await toUpdate.save();

        console.log("Sucess " + result)

        res.send(result)

    } catch (err) {

        res.status(500)

        res.send(`{"error": ${err}: Update for id ${req.params.id}
 failed`);

    }

};




// VIEWS

// Handle a show all view

exports.school_view_all_Page = async function (req, res) {

    try {

        theschool = await school.find();

        res.render('school', { title: 'school Search Results', results: theschool });

    }

    catch (err) {

        res.status(500);

        res.send(`{"error": ${err}}`);

    }

};

// Handle school create on POST.

exports.school_create_post = async function (req, res) {

    console.log(req.body)

    let document = new school();

    // We are looking for a body, since POST does not have query parameters.

    // Even though bodies can be in many different formats, we will be picky

    // and require that it be a json object

    // {"school_type":"goat", "cost":12, "size":"large"}

    document.school_name = req.body.school_name;

    document.school_type = req.body.school_type;

    document.strenght = req.body.strength;




    try {

        let result = await document.save();

        res.send(result);

    }

    catch (err) {

        res.status(500);

        res.send(`{"error": ${err}}`);

    }

};