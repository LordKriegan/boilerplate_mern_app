const { Notes } = require('../models');

module.exports = {
    findAll: async (req, res) => {
        try {
            let result = await Notes.find();
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        try {
            let result = await Notes.create(req.body);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            let note = await Notes.findById({ _id: req.params.id });
            let result = await note.remove();
            res.json(result);
        } catch (error) {
            console.log(error)
        }
    }
}