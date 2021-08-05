const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
        let user = message.author;
        let timeout = 1800000;
        let author = await db.fetch(`workedhalf_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`<a:Attention:867045436493398026> Vous ne pouvez pas retourner miner avant ${time.minutes}m ${time.seconds}s`)
        } else {
            let amount = Math.floor(Math.random() * 20) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`workedhalf_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send({
                embed: {
                    color: 0x666edf,
                    title: "<:Poussire:867067966792269824> Extraction **rapide** !",
                    author:{
                        name: `Extraction de ${message.author.username}`
                    },
                    thumbnail:{
                        url: "https://cdn.discordapp.com/emojis/867070027126800424.gif?v=1&size=256"
                    },
                    fields: [
                        {
                        name: `Vous venez d'extraire **${amount}** <:Poussire:867067966792269824> ! <:cossmoAYAYA:867068205696811019>`,
                        value: `__Faites *ui pour voir votre solde.__`,
                        },
                    ],
                },
            })
        }
    }

module.exports.help = {
    name: "minehalf"
}