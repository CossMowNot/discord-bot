const db = require('quick.db');
const { Discord, MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first()
    let user = message.author;
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
    if(bal === null) bal = 0;

    if (!args[0]) return message.reply("Utilisateur manquant. *give <user> <args>");
    if (!args[1]) return message.reply("Argument manquant. *give <user> <args>");

    var amount = args[1]

    if(args[1] > bal){
        message.channel.send("<a:Attention:867045436493398026> Tu ne peux pas donner plus de <:Poussire:867067966792269824> que tu n'en possède !")
        return;
    }

    if(args[1] < 1){
        message.channel.send("<a:Attention:867045436493398026> Tu ne peux pas donner une valeur inférieure à 1 <:Poussire:867067966792269824> !")
        return;
    }

    if(args[1] === "all"){
        var amount = bal
    }
    

    let helpMenu = new Menu(message.channel, message.author.id, [
        {
            name: 'check',
    content: new MessageEmbed({
            color: 0x666edf,
            title: `<:Poussire:867067966792269824> __Êtes-vous sûr de cette donation de ${amount}__ <:Poussire:867067966792269824> __à ${membre.user.username}__ ?`,
            description: `**Validez cette transaction en réagissant avec <:Online:866978649081511947>, ou refusez-la avec <:DND:866978649075744778>.**`,
            author:{
                name: `Donation de ${message.author.username} à ${membre.user.username}`
            },
            thumbnail:{
                url: "https://cdn.discordapp.com/emojis/867742465645477918.gif?v=1&size=256"
            },
        },
    ),
    reactions: {
        '866978649081511947': 'yes',
        '866978649075744778': 'no',
    }
},
{
    name: 'yes',
content: new MessageEmbed({
    color: 0x666edf,
    title: "<:Poussire:867067966792269824> __Donation réalisée !__",
    description: `**Vous venez de donner ${amount} <:Poussire:867067966792269824>, à ${membre.user.username}.**`,
    author:{
        name: `Donation de ${message.author.username} à ${membre.user.username}`
    },
    thumbnail:{
        url: "https://cdn.discordapp.com/emojis/867742465645477918.gif?v=1&size=256"
    },
},
),
reactions: {

}
},
{
    name: 'no',
content: new MessageEmbed({
    color: 0x666edf,
    title: "<:Poussire:867067966792269824> __Donation annulée.__",
    description: `**Vous venez de récupérer vos ${amount} <:Poussire:867067966792269824>.**`,
    author:{
        name: `Donation de ${message.author.username} à ${membre.user.username}`
    },
    thumbnail:{
        url: "https://cdn.discordapp.com/emojis/867742465645477918.gif?v=1&size=256"
    },
},
),
reactions: {

}
},
], 300000)
helpMenu.start()

client.on('messageReactionAdd', (reaction, user) => {
if(reaction.emoji.id === '866978649081511947'){
    if(user.bot) return;
    db.subtract(`money_${message.guild.id}_${message.author.id}`, amount);
    db.add(`money_${message.guild.id}_${membre.user.id}`, amount);
}})}


module.exports.help = {
    name: "COMMAND001"
}