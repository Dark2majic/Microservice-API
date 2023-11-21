const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    dndCharacterIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DndCharacter' }],
    computerSpecIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ComputerSpec' }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;