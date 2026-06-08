const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With KIRA-MD Hear
SESSION_ID: process.env.SESSION_ID || "KIRA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU1HOE5rTlhzazhWTGY5UjVxbXBzemFOZnU0Yk9FR3BaU2xOMUFoWlRGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXhPMzRBaXQrdzMwaEZFS2ZNOHhNMnJKK3hoSFpLNkRraS8rbHRYTW1GRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RjRCcDdxT05hYTRMbEt1ZEhDYU1GZkd4Y2RTaGI5UThwd25iYitqc21ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaRXpQY1FQNkU5b2hlZllPdW1xMTNlNFRVY3BtMnoyRC9IejNHcWF1WURzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1OTlI1cG1kOGMxaGE5VDFXNndjcm1qV2wyQjBHMENUS0JoSmxpcWtOa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRaUnZTaU1CQU91UWpOSEVYS0ZLaVdJK2dHTFVib2RQQlpQZ2haYjFJQzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1mc0F0Qmh6K3FlNkVtcFZDZDRtSjhUMFJGMk53b3Z5azdCV015U0xFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTU1cHcyaStLQWNJc3RNd21DaUI4b3BJSi9wSHhXdDB3QlF5Mmk5WU1rND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJramEyQW1tTFNPSEp3cFJuNkdmNlM0MnVIWGp6elc0bENabytjQjd0QkpXd2hlWDFKbWN2WFhQdDEvd25rM2pVYVUvRzkzVGhycGlIRFArc0NoemdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiJnZ1VrY2YrVVRqOHBjd3R4U1N3djNrTHNyRWhmKzFJYmNtYm4yU1cwbEk0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ilc5NVpNSlo0IiwibWUiOnsiaWQiOiI5MjM1NTQ1ODM5Mzc6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JOGqSDwnZC98J2br/CdkYXwnZGF8J2RjCDwnZur8J2bqvCdm67wnZC6IPCThqogwqDiirnCoOKKucKg4oq5wqDiirkgwqDiirkgwqDiirkgwqDiirkgwqDiirkgwqDiirnCoOKKucKg4oq5wqDiirkgwqDwk4ap8J2RhfCdm6/wnZGH8J2bqvCdkYXwnZuv8J2Qt/CThqoiLCJsaWQiOiIyMTk0OTkyNTI5Njk2Njk6MTdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMRGk5dndGRU5UT21ORUdHQklnQVNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5RFlTUk8xNkZXRHdERVVuVkJtei9wQkV6amlWMk5jNXRGOC82VDJUREVRPSIsImFjY291bnRTaWduYXR1cmUiOiJCdlc1L0JTSnJ1ejl3bU9GOTZsUHFsQkowY3N3RFdMT25BNzN6d2VqSm9CQjFKTVo0MHllUnJJMmFKZGlFWjM4ZU01Sk9zUEFGNmNoWmxxdDhYK2ZBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQU9yVENvOVhQUnVBSHo1NUhBV0ZvNWhYNEtSanh2dUliRkJaNXEwQ2pGdVB5L1hVSy9ib3ZnY3lML1RncS9CSGtrbWV2SWd0N2g0eS9BS2kxcDhaZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMTk0OTkyNTI5Njk2Njk6MTdAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNnMkVrVHRlaFZnOEF4RkoxUVpzLzZRUk00NGxkalhPYlJmUCtrOWt3eEUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZ2dJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4MDg4NTMzOX0=",
// KIRA MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// KIRA MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SUBHAN-MD 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SUBHAN-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SUBHAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923554583937",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923554583937",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







