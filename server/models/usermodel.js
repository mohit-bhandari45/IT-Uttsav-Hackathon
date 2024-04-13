import mongoose from "mongoose"

const UserModel = new mongoose.Schema({
    "personal": {
        "fname": String,
        "lname": String,
        "phone": Number,
        "email": String
    },
    "items": [{
        "name": String,
        "types": String,
        "file": String
    }],
    "location": {
        "coords": {
            "N": String,
            "E": String
        },
        "address": String
    }
});

export const User = mongoose.model('User', UserModel);