const mongoose = require('mongoose');
const zod = require('zod');

const emailSchema = zod.string().email();

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true,"Please enter the email"],
        unique: true,
        lowercase: true,
        validate: {
            validator: (value) => emailSchema.safeParse(value).success,
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: true,
        minLength: [8,"Password msut be atleast 8 charecter"]
    }
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
