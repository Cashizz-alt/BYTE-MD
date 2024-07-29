
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVByc1hlb3h3MENNZE8xM0JnZEg4MXVsWWE2bk9LaHliOTh2SWZUN1pIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDR6aW9HamlsQkFLOWdzd2RZUEo4bDlOS1dvZmcycXljYk16djhVdnRpZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQkJWWlVDOVJNUnk0M1hNOHJVQmZISDVrTDBkaXVoM3FiQUtTU05JOFVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsR01DbVA2SHpvUXJ0UjFraFozaXdsZGkrN2ZIYXBWOWRrMStsT2MvUEgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldERHRvSkt0MGFBSTlIZUhySDFTVWhGcHNObmc2ZGFqYWxxSE9Xb3pabjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjIxZjJuWWtMRkF3Vkx0b1JaVnYrcmZiMFp2bzhLZjJIMncvbnpUY2txQTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid05oMXlZUmcrMFRvYzdjczBUUm42TVlHeUdPY0dDOURjaGNqOWtyRWJrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMCt0UExieTNmZDhkU28vbFBxc1RnSHdsbDhEMlJOWG01UjNUMDJ3eTJFYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5JcG1ZelFiditGZWduRVFhRTJkOTh5b0JJdDA3VHdSa2o1WjRiazV6K0hNVGpUTTBMUlBlK3Y1WmRBQUQ1NnlzaEFPQW9jdW5lT3pUZDFYSS80RERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiJUOWlSektHOU9uNitwUENJSHRqOWpaZ25DWmFISWQxVk5NZTNaV3M5UlZ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzI1Njk4NTgyNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxNDcyODk3MzgzMzY0NjRERjQwOTdBREE3NUI4OTczMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMjM1NzI1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQRHhRV09weFFhMjNlZkl5bEpyQVJnIiwicGhvbmVJZCI6ImE1NjRjYjVmLWIxOTctNGY5Yy1hMzczLWY2Yzc4OTdjZmQyOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJcnJ0VDhwRlp0NUJDUUo3S0hrTFZVMDBSL2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXp2VnFlNmxHVTBJblVpa29PZWVRRFJKVU5JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFXNVFSNUo5IiwibWUiOnsiaWQiOiIyMzMyNTY5ODU4MjU6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDYXNoaXp6X3hyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJR3g5TTBGRUwvMm5MVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrQjBLRXgyZmNiSXd1cmZyRTJtRUtKOWp2MW93czVTZ2NKZzNpV0lic3kwPSIsImFjY291bnRTaWduYXR1cmUiOiJ4SDdGMnUvb1ZFWjhlQWt0czdaZEpuUW1ESk0xWStkcUxMS1BtSDcyMjRESkhYS0pOM1h0QU1XeXBmZ1oxYkFEclUrc21WSTNaWWdVQmdQNUxWRitEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZGFXK2xWTU1tdXZESHF5a3FNbnVoT1cySWFQVjBQU3ZUVFpzbVBNRUdaVnJSUUcrSDVITmxPK1AwYlZVY2JOS01WNllJRnFaeFU4cm1tOXEzVnlkQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzMyNTY5ODU4MjU6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaQWRDaE1kbjNHeU1McTM2eE5waENpZlk3OWFNTE9Vb0hDWU40bGlHN010In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMjM1NzIzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9kVCJ9" //Make sure session id starts with Byte;;;



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
  ownername: process.env.OWNER_NAME || "Kassim Cashizz",
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
