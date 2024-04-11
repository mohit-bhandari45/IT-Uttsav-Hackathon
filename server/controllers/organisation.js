import mongoose from "mongoose"
import { Org } from "../models/orgmodel.js"

export const findOrg = async (req, res) => {
    const orgs=await Org.find()
    console.log(orgs)
    // res.json(orgs)
}

export const orgRegister = (req, res) => {
    try {
        Org.create(req.body)
        res.send("Completed Orgs")
    } catch (error) {
        console.log(error)
    }
}