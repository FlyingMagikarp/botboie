const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("BotBoie.js is ready!");
});

client.on("message", (message) => {
  if(message.content.startsWith("!ping")) {
    message.channel.send("pong!");
  }
  if(message.content.startsWith("!cyka")){
    message.channel.send("blyet!");
  }
  if(message.content.startsWith("!lenny")){
    message.channel.send("( ͡° ͜ʖ ͡°)");
  }
  if(message.content.startsWith("!no")){
    message.channel.send("ಠ_ಠ");
  }
  
});

client.login("MzgyODQwNzU3Mjc2NjM5MjQz.DPbkBg.EH1EQDuzwWD2PUNsZZ3U3WGvd_w");
