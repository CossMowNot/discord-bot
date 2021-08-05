const pf = ["pile", "face"];
const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    let user = message.author;
    let timeout = 1800000;
    let author = await db.fetch(`bet_${message.guild.id}_${user.id}`);
    let argent = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

    if(argent < 500) return message.channel.send(`<a:Attention:867045436493398026> Vous n'avez pas assez de poussières d'étoiles pour pouvoir faire un pari. Revenez quand vous en aurez acquéri au moins **500**.`);

    if(!pf.includes(args[0])) { 
        return message.channel.send("<a:Attention:867045436493398026> **Merci d'indiquer pile ou face !**"); 
    }

    if(author !== null && timeout - (Date.now() - author) > 0){
        let time = ms(timeout - (Date.now() - author));
        return message.channel.send(`<a:Attention:867045436493398026> Votre prochain pari n'est disponible que dans ${time.hours}h ${time.minutes}m ${time.seconds}s.`)
    } else {

    if(pf[Math.floor(Math.random() * pf.length)] === args[0]) {

        let amount = 500
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`bet_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send({
                embed: {
                    color: 0x666edf,
                    title: "<:Poussire:867067966792269824> Bonne réponse !",
                    author:{
                        name: `Pari de ${message.author.username}`
                    },
                    thumbnail:{
                        url: "https://cdn.discordapp.com/emojis/867472696827969586.gif?v=1&size=256"
                    },
                    fields: [
                        {
                        name: `Votre pari était juste ! Vous remportez **${amount}** <:Poussire:867067966792269824> ! <:cossmoAYAYA:867068205696811019>`,
                        value: `__Faites *ui pour voir votre solde.__`,
                        },
                    ],
                },
            })
        } else {
            let user = message.author;
            let timeout = 1800000;
            let author = await db.fetch(`bet_${message.guild.id}_${user.id}`);
    
            let amount = -500
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`bet_${message.guild.id}_${user.id}`, Date.now())
    
                message.channel.send({
                    embed: {
                        color: 0x666edf,
                        title: "<:Poussire:867067966792269824> Aïe...",
                        author:{
                            name: `Pari de ${message.author.username}`
                        },
                        thumbnail:{
                            url: "https://cdn.discordapp.com/emojis/867472696827969586.gif?v=1&size=256"
                        },
                        fields: [
                            {
                            name: `Il s'avère que votre pari est faux... **${amount}** <:Poussire:867067966792269824>. Désolé !`,
                            value: `__Faites *ui pour voir votre solde.__`,
                            },
                        ],
                    },
                })
        }}}

module.exports.help = {
    name: "bet"
}