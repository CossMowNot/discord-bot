const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
        let user = message.author;
        let timeout = 1186400000;
        let amount = 10000;

        let daily = await db.fetch(`welcome_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`<a:Attention:867045436493398026> Vous avez déjà récupéré ce cadeau.`)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`welcome_${message.guild.id}_${user.id}`, Date.now());
            message.channel.send({
                embed: 
                {
                    color: 0x666edf,
                    title: `<:Poussire:867067966792269824> Cadeau de bienvenue !`,
                    description: `<:SDLPH:866978649260294144> Vous obtenez **10 000**  <:Poussire:867067966792269824> grâce à la récompense de bienvenue !`,
                    thumbnail: {
                        url: "https://cdn.discordapp.com/emojis/837403032697700402.png?v=1&size=512"
                    },
                    fields: [
                        {
                            name: `<:Question:866978649148489749> Vous souhaitez en savoir + sur le fonctionnement de cette monnaie ?`,
                            value: `<:Recherche:866968362911399946> Faites la commande *help (section Économie).`
                        }
                    ]
                }})
        }
    }


module.exports.help = {
    name: "bienvenue"
}