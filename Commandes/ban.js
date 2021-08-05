const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous ne possédez pas la permission 'BAN_MEMBERS'.");

    if(message.mentions.users.size === 0) {
        return message.channel.send(`<a:Attention:867045436493398026> Utilisateur manquant. *ban <user> <args>`);
    }

    let ban = message.guild.member(message.mentions.users.first());

    if(!ban) {
        return message.channel.send(`<a:Attention:867045436493398026> Utilisateur introuvable. *ban <user> <args>`);
    }

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:Attention:867045436493398026> Je ne possède pas la permission 'BAN_MEMBERS'.`);

    let reason = args.slice(1).join(" ");
    ban.send(`Vous avez été banni du serveur **${message.guild.name}** par ${message.author.username} pour la raison : **${reason}**.`);
    ban.ban().then(member => {

        message.channel.send(`${member.user.username} a été banni avec succès, pour la raison : ${reason} ! Action réalisée par ${message.author.username}`);
    });
};

module.exports.help = {
    name: "ban"
};