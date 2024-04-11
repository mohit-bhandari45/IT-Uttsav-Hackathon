import mongoose from "mongoose"

const TicketSchema = new mongoose.Schema({
        "username": String,
        "email": String,
        "issue": String
});

export const Ticket = mongoose.model('Ticket', TicketSchema);