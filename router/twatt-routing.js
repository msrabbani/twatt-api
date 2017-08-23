const express = require('express')
const router = express.Router()

let controller = require('../controller/twatt')

router.get('/search',controller.searchTweet)
router.get('/timeline',controller.timelineTweet)
router.post('/post-tweet',controller.postingTweet)

module.exports = router
