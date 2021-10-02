const twit = require('twit');
const chefConfig = require('./chef.js');
const whChef = new twit(chefConfig);
const target = require('./switch.js');

function searchIt(target) {
    whChef.get('search/tweets', { q: target + "\"Dick\"", }, gotData);

    function gotData(err, data) {
        if (!data) {
            console.log(err);
        }
        if (data) {
        var newFan = data.statuses[Math.floor(Math.random() * data.statuses.length)];
        var statusObj = {
            status: "@" + newFan.user.screen_name +
            ' All I heard were the words ' + target + 
            ' and dick. I think you might like to follow my account',
            in_reply_to_status_id: newFan.id_str
            }
            whChef.post('statuses/update', statusObj);
        }
    }
}

searchIt(target);