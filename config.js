const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/vihangakavishka/wiki-/blob/main/imges/20260713_130803.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 WIKI AI  Is Help Now😍*",
BOT_OWNER: '94766078596',  // Replace with the owner's phone number



};
