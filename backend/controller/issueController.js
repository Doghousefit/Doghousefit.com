const asyncHandler = require('express-async-handler')
const issueModel = require('../models/issueModel');

const getIssue = (req, res) => {
    res.status(200).json({  message: "test" })
}

module.exports = {
    getIssue,
}