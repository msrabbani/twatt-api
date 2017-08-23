var {OAuth}  = require('oauth')
require('dotenv').config()

var oauth = new OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.APP_CK,
      process.env.APP_SC,
      '1.0A',
      null,
      'HMAC-SHA1'
    );




const timelineTweet = (req,res)=>{
    oauth.get(
        `https://api.twitter.com/1.1/statuses/home_timeline.json`,
        process.env.USER_TOKEN,
        process.env.USER_SECRET, (err,data)=>{
            if(!err){
                res.send(data)
            }else {
                res.send(err)
            }
        }
    )
}

const searchTweet = (req,res)=>{
    let search = req.query.q
    oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${search}`,
        process.env.USER_TOKEN,
        process.env.USER_SECRET,
        function (err, data){
            if (err) {
                res.send(err)
            }else {
                res.send(data)
            }
        });
    }

const postingTweet = (req,res)=>{
    let status1 = req.query.status
    oauth.post(
        `https://api.twitter.com/1.1/statuses/update.json`,
        process.env.USER_TOKEN,
        process.env.USER_SECRET,
        {"status":status1},
        (err,data)=>{
            if (!err) {
                res.send(data)
            }else {
                res.send(err)
            }
        }
    )
}

module.exports = {
    searchTweet,
    timelineTweet,
    postingTweet
}
