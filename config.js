const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'YHt2wZST#Im2QCffcxJo6x7sIJlB4vsUAiAuWcan5bghcrVyp3Kk',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://koyeb-adm:7yofQtsra6hA@ep-curly-tooth-a2qml7tf.eu-central-1.pg.koyeb.app/koyebdb',
LANG: process.env.BOT_LANG || 'EN' ,
PREFIX: process.env.PREFIX || '.',
ANTI_BAD: process.env.ANTI_BAD || 'false',
MAX_SIZE: process.env.MAX_SIZE || 300,
ONLY_GROUP: process.env.ONLY_GROUP || 'false',
ANTI_LINK: process.env.ANTI_LINK || 'false' ,
ANTI_BOT: process.env.ANTI_BOT || 'false',
ALIVE: process.env.ALIVE || `default`,
FOOTER: process.env.FOOTER ||  '©ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ',
LOGO: process.env.LOGO || `https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg` 
};
