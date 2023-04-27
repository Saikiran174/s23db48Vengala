const mongoose = require("mongoose")
const schoolSchema = mongoose.Schema({
    school_name: {type: String, minlength: 1, maxlength: 50},
    school_type: {type: String, minlength: 1, maxlength: 150},
    strength: {type: Number, minlength: 100, maxlength: 1000},
})
module.exports = mongoose.model("School",
schoolSchema)