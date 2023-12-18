const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    {
        PatientID:{
            type: String,
            required: true
        },
        PatientName:{
            type: String,
            required: true
        },
        PatientAge:{
            type: String,
            required: true
        },
        PatientGender:{
            type: String,
            required: true
        },
        PatientAddress:{
            type: String,
            required: true
        },
        PatientPhoneNumber:{
            type: String,
            required: true
        },

        
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", productSchema);  
mongoose.model.exports = Product; 