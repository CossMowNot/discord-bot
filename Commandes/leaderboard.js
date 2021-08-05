  
const db = require('quick.db');
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    let money = db.all().filter(data => data.ID.startsWith(`money_${message.guild.id}`)).sort((a, b) => b.data - a.data)
    money.length = 10;
    
    var finalLb = "";
    for (var i in money) {
      finalLb += `**${money.indexOf(money[i])+1}. ${client.users.cache.get(money[i].ID.split('_')[2]) ? client.users.cache.get(money[i].ID.split('_')[2]).tag : `???`}** - ${money[i].data}\n`;
    }

        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.guild.name} - Classement`)
        .setDescription(`${finalLb}`)
        .setColor("666EDF")
        .setTimestamp()

        message.channel.send(embed);
    }

module.exports.help = {
    name: "leaderboard"
}