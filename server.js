var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: process.env.token,
prefix: "$getServerVar[prefix]"
})
 
//bot status
bot.status({
  text: "Source Code By แดฐแตแต๐ฆ๐ช๐ต๐ด๐ฎ๐ป4๐ฎ๐ฟ๐ฎ๐ป#6969",
  type: "PLAYING",//PLAYING||COMPETEING||WATCHING||LISTENING
  time: 12
})
 
bot.onMessage()

//variable
bot.variables({
 prefix: ".",//Your Prefix
 points:"0",//dont change this!!

})
  
 //commands handler
var reader = fs.readdirSync("./points/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./points/${file}`)
  bot.command({
name: command.name, 
aliases: command.aliases,
code: command.code
  })
}

//help command here
bot.command({

name: "help",
code: `$title[$userTag[$clientID] HELP MENU]

$description[**$getServerVar[prefix]help** - This!
**$getServerVar[prefix]give**- Give someone Points
**$getServerVar[prefix]checkpoints**- Checks your Points
**$getServerVar[prefix]remove**- Remove someone's Points]

$color[RANDOM]
$footer[SOURCE CODE FROM CREATED BY แดฐแตแต๐ฆ๐ช๐ต๐ด๐ฎ๐ป4๐ฎ๐ฟ๐ฎ๐ป#6969]
$addTimestamp`
})
