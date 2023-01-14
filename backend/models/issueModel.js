const mongoose = require('mongoose')

const issueSchema = mongoose.Schema(
    {
        issue: {
            type: Number,
            required: [true, 'Please add an issue number'],
            unique: true
        },
        title: {
            type: String,
            required: [true, 'Please add a title']
        },
        date: {
            type: Date,
            required: true,
            default: Date.now()
        },
        tags: {
            type: [String],
            required: [true, 'Please add tags'],
            default: []
        },
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model('Issue', issueSchema)