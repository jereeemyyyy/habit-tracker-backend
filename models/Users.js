const mongoose = require("mongoose");

const bycrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
    {
        fullName: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    this.password = await bycrypt.hash(this.password, 10);
    next();
});

// Password comparison
UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await(bycrypt.compare(enteredPassword, this.password));
}

module.exports = mongoose.model("User", UserSchema, "Users Collection");