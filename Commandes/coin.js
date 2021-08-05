const pf = ["pile", "face"];
const Discord = require ("discord.js")

module.exports.run = (client, message, args) => {

    if(!pf.includes(args[0].toLowerCase())) { 
        return message.channel.send("<a:Attention:867045436493398026> **Merci d'indiquer pile ou face !**"); 
    }

    if(pf[Math.floor(Math.random() * pf.length)] === args[0]) { 
        message.channel.send("<:Online:866978649081511947> Vous avez gagné !")
    } else {
        message.channel.send("<:DND:866978649075744778> Mince... Une prochaine fois...")
    }
}

module.exports.help = {
    name: "coin"
}