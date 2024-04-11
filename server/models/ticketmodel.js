import mongoose from "mongoose"

const OrgModel = new mongoose.Schema({
    "org": String,
    "owner": String,
    "contact": Number,
    "email": String,
    "about": String,
    "nonprofit": Boolean
});

export const Org = mongoose.model('Org', OrgModel);