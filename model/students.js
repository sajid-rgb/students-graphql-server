const mongoose = require("mongoose")
const StudentSchema = new mongoose.Schema({
    name:String,
    email:String,
    date:String,
    phone:String,
    subject:[String]

})

const Student = mongoose.model("student",StudentSchema)
module.exports = Student