const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async(client, message, args) => {

    let Owner = "784883107848912916"
    let user = message.mentions.users.first() || message.author;
    const membre = message.mentions.members.first() || message.author.username;
    let money = db.fetch(`money_${message.guild.id}_${user.id}`);

    if (message.author.id !== Owner)
    message.channel.send(`<a:Attention:867045436493398026> Ne tente pas de donner des poussières d'étoiles ! Un essai excessif pourrait t'entraîner à un bannissement ${message.author.username}`);
    if (message.author.id !== Owner) return;

    if (isNaN(args[1]))
        message.channel.send(`<a:Attention:867045436493398026> Argument invalide. *addmoney <user> <args>`);

    db.add(`money_${message.guild.id}_${user.id}`, args[1])

    message.channel.send(`<:Poussire:867067966792269824> Vous venez de donner **${args[1]}** poussières d'étoiles à **${membre.user.username}**.`)
}

module.exports.help = {
    name: "addmoney"
}