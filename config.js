//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://diamonddatabase_user:hQrI5Xc0tBvdifOK9JWqKo4INMa98KLs@dpg-cs8cd6tsvqrc73bo7hug-a.oregon-postgres.render.com/diamonddatabase";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/DYz0k1m.jpeg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237697706009";
global.owner = process.env.OWNER_NUMBER || "237697706009";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/DYz0k1m.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0huVWZ3UENIQWlVanBIakYrak0zYjhBYmdSTElqL3NXcVVKMjJLQ1VVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOW85VEhhNit5anVBdm5QamxFekpGakdUcHFlenc4bXVUaDNaVy96TkJTVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTnAyQ1BJejYrNnpFUU9LV0V4bDlTMTJqNjJGcjZBU1U3RWdhRmVEL0hrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT08xN3dJL0NtZnpzZnVPS1FyL29HVXZqdWljTVlzTjBDRnN0cW4yd1VzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllLRUFHWGhzbUNFQlAwbEtiMXhMSnp4aTZzTmxiT3ZwUEg3RGRSK3lsV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkyTWdVRkkvNFpZbXBtRm5Tc2hlWHlzSG1LNWFOK01YYWdCd3I0ZlVEbmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVza1pubG1DOE4yZEcvMFVUdGFFZmRSTXAyQzc4ak56WUwwclJwSEUzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidS9OZ281T1VsQ1kyVUFPNWRNVkJOMUMrcmF2T2ZjYllhTzAzeVRBL3lrST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh4ei8rV1pLSitBb3NlQzdWcUV5Q0h0c21Pa3p3Z050d2txMEtUU0doYjRPT3Q1NmFXRmh4QWtqNmpFVWxSRGpwWTIyd3pPUzUzZEIzUmJ2TFdMNmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEwLCJhZHZTZWNyZXRLZXkiOiJCWlpITVZlSDJVQUhjNVZQbkZhOHZtckZiQ2dHemViOVhHazczeFpjQk80PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpSUJ2RUZ4V1JrLTJRbENjbktGeE93IiwicGhvbmVJZCI6ImM1MzI5ZThhLTA3ZmItNGM5MC1iM2E0LTk3ZTA1ZjBiNTAyMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLdEwzS0VMMk1qYjFCV0Q1TS9NTHpSbmtlb2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVG51VG9zZml0QWJkUHN6dlEwSE9xU3BFRk53PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRRSFZNVEIyIiwibWUiOnsiaWQiOiIyMzc2OTc3MDYwMDk6MjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiKkxPUkQgU0lFR0ZSSUVEIHRoZSBFVEVSTklUWSoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pYcm0rc0NFTUdTaWJzR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImdWQjBVQ0thQ3J6cDNrQmxwaGZ2MmJqNEp6a3JVV1RoSDVmbDlVbTdGZ1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IndHNVlMQ09HQXRYR3Y0c2g4OWJaZmJ3TEZwbnByVUtiTEFTa1Y3YnVtWWNHcUNvaWo5OTlpSWVINjc3ckQwUUNMazB3dEUyK1hzZFRFSW5mMVFsUkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwUml3dk9NaWhkK0NDOEprV0QwVE9YTkZDMVFqNVdNMkJ4TzErNzh6KzFFV25jMm1kV2NYSEtuV1lVTkF1R0poUUNiL1lZSDdTWEhHclBvdmNLWEpoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY5NzcwNjAwOToyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZRlFkRkFpbWdxODZkNUFaYVlYNzltNCtDYzVLMUZrNFIrWDVmVkp1eFlHIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0NDk0NTQzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5FeCJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "🩸LORD SIEGFRIED🩸",
  packname: process.env.PACK_NAME || "🩸LORD SIEGFRIED🩸",
  botname: process.env.BOT_NAME || "🩸DIAMOND💎MD🩸",
  ownername: process.env.OWNER_NAME || "🩸LORD SIEGFRIED🩸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
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
