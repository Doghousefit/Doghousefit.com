const express = require('express')
const router = express.Router()

const { getAllIssue, getIssue, createIssue } = require('../controller/issueController')

router.get('/', getAllIssue).post('/', createIssue)
router.get('/:id', getIssue)

module.exports = router