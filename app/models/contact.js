import { Schema, mongoose } from 'mongoose'

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [2, "Name must be greater than 2 characters"]
    },

    email: {
        type: String,
        required: [true, "E-mail is required"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"]
    },

    message: {
        type: String,
        required: [true, "Message is required"],
    },

    date: {
        type: Date,
        default: Date.now
    }
})

// need to see if contact model is already available
// if there then set it, if not (||) then set it to the schema
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema)

export default Contact