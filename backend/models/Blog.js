const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
        min: 2,
    },
    desc: {
        type: String,
        required: true,
        min: 4,
    },
    photo: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: [String],
        default: [],
    }
}, {timestamps: true})

module.exports = mongoose.model("Blog", BlogSchema)