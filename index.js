const Discord = require("discord.js");

const bot = new Discord.Client();

const config = require("./config.json");
 
bot.on("ready", function(){
    console.log("Ready")

});

bot.on("message", function(message) {


    
    let adminRole =  message.guild.roles.find("name", "Admin");
    let ownerRole =  message.guild.roles.find("name", "Owner");
    let modRole =  message.guild.roles.find("name", "Mod");
    
    if (message.author.equals(bot.user)) return;

    if(message.content == "cry") {
        message.channel.sendMessage(message.author.toString() + " " + "Cheer up :3 I'm here.");
    };
    if(message.content == "Cry") {
        message.channel.sendMessage(message.author.toString() + " " + "Cheer up :3 I'm here.");
    };
    if(message.content == "LETS GO!") {
        message.channel.sendMessage(message.author.toString() + " " + "LETS GOOOOOOOOOO!");
    };
    if(message.content == "LET'S GO!") {
        message.channel.sendMessage(message.author.toString() + " " + "LETS GOOOOOOOOOO!");
    };
    if(message.content == "hehe") {
        message.channel.sendMessage(message.author.toString() + " " + "Wait did i miss the joke again! Dammit!");
    };
    if(message.content == "Hehe") {
        message.channel.sendMessage(message.author.toString() + " " + "Wait did i miss the joke again! Dammit!");
    };
    if(message.content == "Who you gonna call") {
        message.channel.sendMessage(message.author.toString() + " " + " " + "Ghost Busters" + " " + "https://youtu.be/m9We2XsVZfc");
    };
    if(message.content == "who you gonna call") {
        message.channel.sendMessage(message.author.toString() + " " + " " + "Ghost Busters" + " " + "https://youtu.be/m9We2XsVZfc");
    };
    if(message.content == "Hello Ryko") {
        message.channel.sendMessage(message.author.toString() + " " + "Hello there C:!");
    }; if(message.content == "hello Ryko") {
        message.channel.sendMessage(message.author.toString() + " " + "Hello there C:!");
    }; if(message.content == "Hey Ryko") {
        message.channel.sendMessage(message.author.toString() + " " + "Hello there C:!");
    }; if(message.content == "hey Ryko") {
        message.channel.sendMessage(message.author.toString() + " " + "Hello there C:!");
    };
    if(message.content == "Hello ryko") {
        message.channel.sendMessage(message.author.toString() + " " + "Hello there C:!");
    }; if(message.content == "hello ryko") {
        message.channel.sendMessage(message.author.toString() + " " + "Hello there C:!");
    }; if(message.content == "Hey ryko") {
        message.channel.sendMessage(message.author.toString() + " " + "Hello there C:!");
    }; if(message.content == "hey ryko") {
        message.channel.sendMessage(message.author.toString() + " " + "Hello there C:!");
    };
    if(message.content == "WE ARE") {
        message.channel.sendMessage("THE CRYSTAL GEMS!!!! WE'LL ALWAYS SAVE THE DAY!!");
    };
    if(message.content == "brb") {
        message.channel.sendMessage(message.author.toString() + " " + "Hurry back I'll miss you. :(");
    };
    if(message.content == "back") {
        message.channel.sendMessage(message.author.toString() + " " + "Yay Welcome back! :3");
    };
    if(message.content == "Brb") {
        message.channel.sendMessage(message.author.toString() + " " + "Hurry back I'll miss you. :(");
    };
    if(message.content == "Back") {
        message.channel.sendMessage(message.author.toString() + " " + "Yay Welcome back!:3");
    };
    if(message.content == "<===3") {
        message.channel.sendMessage(message.author.toString() + " " + "Thats a small Penis! Tragic TmT.");
    };
    if(message.content == "<=====3") {
        message.channel.sendMessage(message.author.toString() + " "  + "That's the average size.");
    };
    if(message.content == "<=======3") {
        message.channel.sendMessage(message.author.toString() + " "  + "Ayeeeee 7in' :heart_eyes: :lips: :sweat_drops:");
    };
    if(message.content == "Carebear") {
        if (message.channel.sendMessage(config.Carebear[Math.floor(Math.random() * config.Carebear.length)]));
        else message.channel.sendMessage("I do not understand my child.");
    };
    if(message.content == "kys") {
        message.channel.sendMessage(message.author.toString() + " "  +"Bleach or Rope?" );
    }
    if(message.content == "I love you ryko") {
        message.channel.sendMessage(message.author.toString() + " " +"I love thee my child :heart:");
    };
    if(message.content == "I hate you ryko") {
        message.channel.sendMessage(message.author.toString() + " " +"I shall smite thee ignorant child :cloud_lightning:");
    };
    if(message.content == "Fuck you ryko") {
        message.channel.sendMessage(message.author.toString() + " " +"FUCK OFF IGNORANT CHILD");
    };
    if(message.content == "What's up") {
        message.channel.sendMessage(message.author.toString() + " " + "The Sky.");
    };

    if(!message.content.startsWith(config.PREFIX)) return;

    var args = message.content.substring(config.PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "help":
             var embed = new Discord.RichEmbed()
             .addField("Command List:", "\n \nHelp \n \nKys \n \nRoast \n \n8Ball \n \nPraise", true)
             message.channel.sendEmbed(embed);
            break;
        case "8ball":
            if (args[1]) message.reply(config.Fortune[Math.floor(Math.random() * config.Fortune.length)]);
            else message.channel.sendMessage("I do not understand my child.");
            break;
        case "ownerinfo":
            var embed = new Discord.RichEmbed()
            .addField("Knollified", "Name: Justin \n \nTime Zone: EST \n \nGender: Fighter Jet", true)
            message.channel.sendEmbed(embed);
            break;
        case "praise":
            message.channel.sendMessage(message.author.toString() + " " + "Thank you my child I shall bless thee!");
            break;
        case "hug":
            message.channel.sendMessage(message.author.toString() + " " + "-Hugs Tightly-");
            break;
        case "roast":
            if (args[1]) message.channel.sendMessage(config.Roast[Math.floor(Math.random() * config.Roast.length)]);
            else message.channel.sendMessage("I do not understand my child.");
            break;
        default:
            message.channel.sendMessage("Invalid command");
        
    }

});

bot.login(config.TOKEN);