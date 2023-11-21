const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const DndCharacter = require('../models/dndCharacterModel');
const ComputerSpec = require('../models/computerSpecModel');

// D&D Character Save Endpoint
router.post('/dnd/saveCharacter', async (req, res) => {
    try {
        const { userId, characterData } = req.body;

        let user;
        if (userId) {
            user = await User.findById(userId);
        }

        if (!user) {
            // Create a new user if not found or no userId provided
            user = new User({ /* set initial user data if needed */ });
            await user.save();
        }

        const character = new DndCharacter(characterData);
        await character.save();

        // Add the new character's ID to the user's dndCharacterIds
        user.dndCharacterIds.push(character._id);
        await user.save();

        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Simple GET Endpoint to fetch all D&D Characters (For demonstration)
router.get('/dnd/characters', async (req, res) => {
    try {
        const characters = await DndCharacter.find();  // Assuming DndCharacter is your model
        res.json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Forum Post Configuration Endpoint
router.post('/forum/postConfiguration', async (req, res) => {
    // Logic to save/update configuration post
});

module.exports = router;