const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("<a:Attention:867045436493398026> Vous ne possédez pas la permission 'KICK_MEMBERS'.");

    if(message.mentions.users.size === 0) {
        return message.channel.send(`<a:Attention:867045436493398026> Utilisateur manquant. *kick <user> <args>`);
    }

    let kick = message.guild.member(message.mentions.users.first());

    if(!kick) {
        return message.channel.send(`<a:Attention:867045436493398026> Utilisateur introuvable. *kick <user> <args>`);
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send(`<a:Attention:867045436493398026> Je ne possède pas la permission 'KICK_MEMBERS'.`);

    let reason = args.slice(1).join(" ");
    kick.send(`Vous avez été expulsé du serveur **${message.guild.name}** par ${message.author.username} pour la raison : **${reason}**.`);
    kick.kick().then(member => {

        message.channel.send(`${member.user.username} a été expulsé avec succès, pour la raison : ${reason} ! Action réalisée par ${message.author.username}`);
    });
};

module.exports.help = {
    name: "kick"
};