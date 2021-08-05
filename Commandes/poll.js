const Discord = require('discord.js');

module.exports.run = async(client, message) => {

    const membre = message.mentions.members.first() || message.member;
    let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join(" ")
    
    message.delete().catch(err => {
        if(err) console.log(`[Erreur] ${err}`);
    });


    message.channel.send({
        embed: {
            color: 0x666edf,
            title: `**Sondage** proposé par ${message.author.username} :`,
            thumbnail: {
                url: (membre.user.avatarURL({ dynamic:true }))
            },
            fields: [
                {
                name: thingToEcho,
                value: "__Répondez avec __:white_check_mark:__ ou __:x:"
                },
            ],
        }
    }) 
    .then(function (message) {
        message.react("✅")
        message.react("❌")
    });
};

module.exports.help = {
    name: "poll"
}