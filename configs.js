var Twit = require('twit');
require('dotenv').config();

module.exports = {
    consumer_key:  process.env.API_KEY,
    consumer_secret:    process.env.SECRET,
    access_token:      process.env.ACCESS,
    access_token_secret:  process.env.TOKEN_SECERT,
}