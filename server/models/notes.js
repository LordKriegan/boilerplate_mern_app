const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  note: { type: String, required: true },
});

const Notes = mongoose.model("Notes", noteSchema);

module.exports = Notes;