const twit = require('twit');
const chefConfig = require('./chef.js');
const whChef = new twit(chefConfig);
// const myid_str = [925160703006330880, 22831053, 1096867112029691911, ];

var stream = whChef.stream('statuses/filter', { track: '@realwhChef' });
stream.on('tweet', function(tweet) {
    whChef.post('statuses/update', {
        status: "sup @" + tweet.user.screen_name + " I appreciate the good vibes! This account is a bot. I'm assuming you're sending good vibes. I will never know otherwise.",
        in_reply_to_status_id: tweet.id_str
    });
});