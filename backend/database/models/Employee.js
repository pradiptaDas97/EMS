const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Employee = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type : String,
        required : true
    },
    designation:{
        type: String
    },
    phoneNumber:{
        type: Number
    }
},{
        collection:'employees'
    }
)
module.exports = mongoose.model('Employee',Employee)