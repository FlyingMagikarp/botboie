const Discord = require("discord.js");
const client = new Discord.Client();
var fs = require("fs");

client.on("ready", () => {
  console.log("BotBoie.js is ready!");
});

// command prefix

const prefix = "!";
client.on("message", (message) => {
  // ignore bot messages
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  // events
  if(message.content.startsWith(prefix+"ping")) {
    send_text("pong!");
  }
  if(message.content.startsWith(prefix+"cyka")){
    send_text("blyet!");
  }
  if(message.content.startsWith(prefix+"no")){
    send_text("ಠ_ಠ");
  }
  if(message.content.startsWith(prefix+"vaporwoah")){
    send_text("https://www.youtube.com/watch?v=24JJ1_A5HP0");
  }
  if(message.content.startsWith(prefix+"dab")){
    var file = "memes/squidward_dab.jpg";
    send_img(file);
  }
  if(message.content.startsWith(prefix+"meme")){
    send_random_meme();
  }
  if(message.content.startsWith(prefix+"mlg")){
    var file = "memes/mlgfrog.gif";
    send_img(file);
  }




  // FUNCTIONS
  function send_text(text){
    message.channel.send(text);
  }

  function send_img(path){
    message.channel.sendMessage({
      file: path
    });
  }

  function send_random_meme(){
    var directory = "memes/";
    var meme = "";
    var memes = [];

    fs.readdir(directory, function(err, memes){
      maxVal = memes.length;
      random = Math.floor(Math.random()*maxVal);
      meme = directory+memes[random];

      send_img(meme);
    });
  }


});


client.login("MzgyODQwNzU3Mjc2NjM5MjQz.DPbkBg.EH1EQDuzwWD2PUNsZZ3U3WGvd_w");
