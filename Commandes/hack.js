const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
        let user = message.author;
        let timeout = 300000;
        let author = await db.fetch(`hack_${message.guild.id}_${user.id}`);
        let replies = ["-5000"]
        let res = Math.floor(Math.random() * replies.length);
        let moneyuser = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`<a:Attention:867045436493398026> Vous ne pouvez pas réessayer de pirater le système... Réessayez dans ${time.minutes}m  ${time.seconds}s.`)
        } else {
            var amount = replies[res]

            if(amount === "-5000"){
                if(moneyuser < 5000) {
                    var amount = `${moneyuser}`
                    db.add(`money_${message.guild.id}_${user.id}`, amount)
                    db.set(`hack_${message.guild.id}_${user.id}`, Date.now())
                }
                message.channel.send({
                    embed: {
                        color: 0x666edf,
                        title: "<:Poussire:867067966792269824> Exploitation de la faille...",
                        author:{
                            name: `Tentative de piratage de ${message.author.username}`
                        },
                        thumbnail:{
                            url: "https://cdn.discordapp.com/emojis/867524885713387581.gif?v=1&size=256"
                        },
                        fields: [
                            {
                            name: `Mince ! La police vous a démasqué ! Vous avez dû payer une amende de **${amount}** <:Poussire:867067966792269824>... Essayez de ne pas vous faire attraper la prochaine fois !`,
                            value: `__Faites *ui pour voir votre solde.__`,
                            },
                        ],
                    },
                })
            } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`hack_${message.guild.id}_${user.id}`, Date.now())
            message.channel.send({
                embed: {
                    color: 0x666edf,
                    title: "<:Poussire:867067966792269824> Exploitation de la faille...",
                    author:{
                        name: `Tentative de piratage de ${message.author.username}`
                    },
                    thumbnail:{
                        url: "https://cdn.discordapp.com/emojis/867524885713387581.gif?v=1&size=256"
                    },
                    fields: [
                        {
                        name: `Le piratage vous a rapporté **${amount}** <:Poussire:867067966792269824>.`,
                        value: `__Faites *ui pour voir votre solde.__`,
                        },
                    ],
                },
            })
        }}
    }

module.exports.help = {
    name: "COMMMAND002"
}