const request = require("request");


const token = "TOKEN-HERE";
const emojiname = "EMOJI-NAME"
const emojiid = "EMOJI-ID"

if (token === "TOKEN-HERE") return console.log('You need to provide your token into the index.js file.')
if (token === "EMOJI-NAME") return console.log('You need to provide your Emoji Name into the index.js file.')
if (token === "EMOJI-ID") return console.log('You need to provide your desired Emoji ID into the index.js file.')

let updates = 0;

setInterval(() => {
    request("https://bitpay.com/api/rates/usd", { "json": true }, (error, response, body) => {
        request("https://bitcoinfees.earn.com/api/v1/fees/recommended", { "json": true }, (error2, response2, body2) => {
            post(body["rate"], body2["hourFee"]);
        });
    });
}, 10000);

function post(value, fees) {
    request({
        "url": "https://discord.com/api/v6/users/@me/settings",
        "method": "PATCH",
        "json": true,
        "headers": {
            "Authorization": token
        },
        "body": {
            "custom_status": { "text": `$${value}`, "emoji_id": emojiid, "emoji_name": emojiname }
        }
    }, (error, request, body) => {
        if (error) throw error;

        console.log(`Update #${++updates}`);
    });
};
