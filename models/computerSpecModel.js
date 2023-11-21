const mongoose = require('mongoose');

const computerSpecSchema = new mongoose.Schema({
    operatingSystem: String,
    cpu: String,
    gpu: String,
    ram: String,
    storage: String,
    motherboard: String,
    powerSupply: String,
    coolingSystem: String,
    monitor: String,
    peripherals: String,
    network: String,
    additionalComponents: String
});

const ComputerSpec = mongoose.model('ComputerSpec', computerSpecSchema);
module.exports = ComputerSpec;