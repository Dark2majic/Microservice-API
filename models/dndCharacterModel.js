const mongoose = require('mongoose');

const dndCharacterSchema = new mongoose.Schema({
    race: String,
    class: String,
    name: String,
    age: String,
    gender: String,
    height: String,
    weight: String,
    hair_color: String,
    eye_color: String,
    skin_color: String,
    appearance: String,
    backstory: String,
    additional_features: String,
    ability_scores: {
        dexterity: Number,
        strength: Number,
        constitution: Number,
        intelligence: Number,
        wisdom: Number,
        charisma: Number
    },
    ability_modifiers: {
        strength: Number,
        dexterity: Number,
        constitution: Number,
        intelligence: Number,
        wisdom: Number,
        charisma: Number
    },
    skills: {
        acrobatics: Number,
        animal_handling: Number,
        arcana: Number,
        athletics: Number,
        deception: Number,
        history: Number,
        insight: Number,
        intimidation: Number,
        investigation: Number,
        medicine: Number,
        nature: Number,
        perception: Number,
        performance: Number,
        persuasion: Number,
        religion: Number,
        sleight_of_hand: Number,
        stealth: Number,
        survival: Number
    },
});

const DndCharacter = mongoose.model('DndCharacter', dndCharacterSchema);
module.exports = DndCharacter;