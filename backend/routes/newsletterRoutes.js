const express = require('express')
const router = express.Router()

const { getIssue, createIssue } = require('../controller/issueController')

router.get('/', getIssue).post('/', createIssue)

module.exports = router