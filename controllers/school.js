var school = require('../models/school');
// List of all schools

// for a specific school.
exports.school_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await school.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
    
// Handle school create on POST.
exports.school_create_post = async function(req, res) {
    console.log(req.body)
    let document = new school();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"school_type":"goat", "cost":12, "size":"large"}
    document.school_name = req.body.school_name;
    document.school_type = req.body.school_type;
    document.strength = req.body.strength;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

exports.school_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await school.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
    
// Handle school update form on PUT.
exports.school_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await school.findById( req.params.id)
    // Do updates of properties
    if(req.body.school_Name)
    toUpdate.school_name = req.body.school_name;
    if(req.body.school_type) toUpdate.school_type= req.body.school_type;
    if(req.body.strength) toUpdate.strength = req.body.strength;
    let result = await toUpdate.save();
    if(req.body.checkboxsale) toUpdate.sale = true;
    else toUpdate.same = false;

    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
}
};


exports.school_list = async function(req, res) {
    try{
    theschool = await school.find();
    res.send(theschool);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);}
    };

    exports.school_view_all_Page = async function(req, res) {
        try{
        theschool = await school.find();
        res.render('school', { title: 'school Search Results', results: theschool });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };
// VIEWS
// Handle a show all view
exports.school_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await school.findById( req.query.id)
    res.render('schooldetail',
    { title: 'school Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
exports.school_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('schoolcreate', { title: 'school Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
exports.school_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await school.findById(req.query.id)
    res.render('schoolupdate', { title: 'school Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
            
exports.school_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await school.findById(req.query.id)
    res.render('schooldelete', { title: 'school Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };