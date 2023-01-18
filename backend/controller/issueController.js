const asyncHandler = require('express-async-handler')
const Issue = require('../models/issueModel');

// @desc Gets all issues
// @route GET /newsletters
// @access Public
// const getAllIssue = asyncHandler(async (req, res) => {
//     const issues = await Issue.find();

//     // res.status(200).json({  message: "test" })
//     res.status(200).json(issues)
// })

const getAllIssue = asyncHandler(async (req, res) => {
    // const page = parseInt(req.query.page) || 1;
    // const limit = parseInt(req.query.limit) || 5;
    
    // const issues = await Issue.find()
    //     .skip((page - 1) * limit)
    //     .limit(limit);
    const issues = await Issue.find()

    res.status(200).json(issues)
})


// @desc Gets a single issue
// @route GET /newsletters/:id
// @access Public
const getIssue = asyncHandler(async (req, res) => {
    // const { issue } = req.body
    const { id } = req.params

    if(id === undefined) {
        res.status(400)
        throw new Error('Please add an issue number')
    }

    const issues = await Issue.find({ issue: id });

    res.status(200).json(issues)
})

// @desc Makes issue
// @route POST /newsletters
// @access Public
const createIssue = asyncHandler(async (req, res) => {
    const { issue, title, tags } = req.body;

    if(!issue || !title || !tags) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // const { issue, title, date, tags } = await Issue.find();
    const newIssue = await Issue.create({
        issue,
        title,
        tags,
    })

    if(newIssue) {
        res.status(201).json({
            issue,
            title,
            tags
        })
    } else {
        res.status(400)
        throw new Error('Please add all fields')
    }
})

module.exports = {
    getAllIssue, getIssue, createIssue
}