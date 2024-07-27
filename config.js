
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "233256985825";
global.owner = process.env.OWNER_NUMBER || "233256985825";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pCMmkwbDNxT1o0a1NMUjgySGhZMlA5eldMeXJNcWhmejV0L2t3OThrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmlpZmd2d0lDa09KUmV6bDRGZE80Q3ZPdzE2eERheVF1STFtS0NiNmF4Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QklEQ0p0VWhLeUNUakpsMGJDam9tQVhVRUR6dDV4blVsYkt5QlJVZ21rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1WXhiaHVYREZsVTkrcHFSNjRKVmp3Ymp3TVNkNnNCU0c2WGFSd3oxbEVFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVCSlY5LzllbzVXZ3lqdnI5VVhVWnBQQXdrdE5rYy9NT1FBaWd5d2dRWFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZEelFkbFV1ZkxtcWNRVnplZmRhVVpFLzdoYlh4NHhiRVM5Y3lSbm5kaTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BTYUUwZU02L01mb0J5Z1V0cDFWNmQzQ1JtZW1Id05vd2xUVHdQNTVVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoick5XaXp6YTM3MnMzbEtIYlJsK1FTWjVjK09mQXJuV2RvL2xiRFBBdW9IYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndEaHFGYks2djlYRVgxRy9EVGVLbHdZYzBOMXdUeU1JbWZjaEdzS2FwMGFhdjBnaEhuMWMxR1N2TzZvMW5ncUNZeFA3MmhrcHBrczVmT1N2SEtvd2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJ3M2JvbmpRMzFyOWdKbHlRWTFPVlB1SXZvMHVWZmdBc3dOcXNpR21oNmhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzI1Njk4NTgyNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEQjgyQThFQTBGM0FDRjU1QkQ0MDk1OEI1NjlGQzQ3QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMTAzMzc0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzMyNTY5ODU4MjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjc0NDlFRjk0RTZFRUMxRDAwRURDQkJBRUZGNDg3RTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjEwMzM3Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiN1o4NEtXUGVSRGFaendidHVrNE1YdyIsInBob25lSWQiOiJhOGQzMTVlMi01M2ViLTQzMWItOGI2OS03N2VlZWQ2YTE4OWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVZBbFQyREM3RUl1aVZ0bWRDWUxJT0JVc25nPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNaUWhYWjJvcndUeHdhTDRGVDRUbmZ2N2llVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIyTExHWUczTSIsIm1lIjp7ImlkIjoiMjMzMjU2OTg1ODI1OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ2FzaGl6el94ciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUd4OU0wRkVNRHNsTFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia0IwS0V4MmZjYkl3dXJmckUybUVLSjlqdjFvd3M1U2djSmczaVdJYnN5MD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR1lRZ3JNSXhlTVRiam96eXQ1Y0VRWUtkOU1OdDRYckRtTEtaSWVLb1AzaWdDMDdHZjd4eW1xaTcraUhLR2I4Qm1jZjhQdFdJbmNWRmw4TGM1ZEpaQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IjdnY2h3Y29seHhTVUdmWDQ3aDZRdTRPeDNETklCdjlIeGZ1cEkxUWEyNnhmR2s0R2Ezc1p4WGpmY3ZsMVI3a3gzdFJyQ04rOXl6QXBPZEJ4aW1pR2pBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzMjU2OTg1ODI1OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkFkQ2hNZG4zR3lNTHEzNnhOcGhDaWZZNzlhTUxPVW9IQ1lONGxpRzdNdCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjEwMzM3MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPZFQifQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By Kassim Cashizz*",
  author: process.env.PACK_AUTHER || "Kassim Cashizz",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ZiCash_bot",
  ownername: process.env.OWNER_NAME || "Kassim",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
