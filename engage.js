const twit = require('twit');
const chefConfig = require('./chef.js');
const whChef = new twit(chefConfig);

function searchIt() {
    whChef.get('search/tweets', { q: "\" Nunes Dick\"", }, gotData);

    function gotData(err, data) {
        if (!data) {
            console.log(err);
        }
        if (data) {
            var newFan = data.statuses[Math.floor(Math.random() * data.statuses.length)];
            var statusObj = {
                status: "@" + newFan.user.screen_name +
                    " All I heard was the words Nunes and dick so I thought you might wanna follow my page! I feed that man dicks everyday",
                in_reply_to_status_id: newFan.id_str
            }
            whChef.post('statuses/update', statusObj);
        }
    }
}

searchIt();