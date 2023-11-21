const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const DndCharacter = require('../models/dndCharacterModel');
const ComputerSpec = require('../models/computerSpecModel');

// D&D Character Save Endpoint
router.post('/dnd/saveCharacter', async (req, res) => {
    try {
        const { userId, characterData, characterId } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        let character;
        if (characterId) {
            // Update the existing character if an ID is provided
            character = await DndCharacter.findByIdAndUpdate(characterId, characterData, { new: true });
        } else {
            // Create a new character if no ID is provided
            character = new DndCharacter(characterData);
            await character.save();

            // Add the new character's ID to the user's dndCharacterIds
            user.dndCharacterIds.push(character._id);
            await user.save();
        }

        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Forum Post Configuration Endpoint
router.post('/forum/postConfiguration', async (req, res) => {
    // Logic to save/update configuration post
});

module.exports = router;