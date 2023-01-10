const express = require('express')
const router = express.Router()

router.get('/', getIssue)

module.exports = router