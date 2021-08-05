const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
        let user = message.author;
        let timeout = 86400000;
        let amount = 1000;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`<a:Attention:867045436493398026> Vous avez déjà récupéré votre récompense journalière. Prochaine collecte dans ${time.days} jour, ${time.hours} heures, ${time.minutes} minutes, et ${time.seconds} secondes.`)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
            message.channel.send({
                embed: 
                {
                    color: 0x666edf,
                    title: `<:Poussire:867067966792269824> Vous venez d'obtenir **${amount}** poussières d'étoiles ! <:cossmoAYAYA:867068205696811019>`,
                }})
        }
    }


module.exports.help = {
    name: "daily"
}