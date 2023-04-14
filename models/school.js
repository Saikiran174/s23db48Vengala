const mongoose = require("mongoose")
const schoolSchema = mongoose.Schema({
school_name: String,
school_type: String,
strength: Number
})
module.exports = mongoose.model("School",
schoolSchema)