const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send("<a:Attention:867045436493398026> Vous ne possédez pas la permission 'MANAGE_MESSAGES'"); }
    if (!args[0]) { return message.channel.send("<a:Attention:867045436493398026> Argument manquant. *clear <count>"); }
    else if (isNaN(args[0])) { return message.channel.send('<a:Attention:867045436493398026> Argument invalide. *clear <count>'); }
                                                                              
        message.channel.bulkDelete(args[0])
            .then((messages) => {
                message.channel.send(`**${messages.size}** messages ont été supprimés.`);
            });
};

module.exports.help = {
    name: 'clear'
};