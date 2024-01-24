const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const NotesSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },

});

module.exports = mongoose.model('Notes', NotesSchema);