const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {

let limit = message.content.split(" ")[1];

if(!limit || isNaN(limit)) {
  return message.channel.send("<a:Attention:867045436493398026> Ce n'est pas une limite valide, veuillez taper un nombre !");
}
    
message.channel.send(`Que le bingo commence ! Vous avez **1** minute pour trouver un nombre compris entre **0** et **${limit}**`)
    .then(async(m) => {
        const random = Math.floor(Math.random() * limit);
        const filter = m => m.author.id !== client.user.id;

        const collector = await m.channel.createMessageCollector(filter, { time: 60000 });

        collector.on("collect", async(collected) => {
            if(collected.content.toLowerCase() === "annuler") {
                return collector.stop(`✅ Bingo annulé !`);
            } else {
                let response = await collected.content.trim();
                response = parseInt(response);

                if(isNaN(response)) {
                    return message.channel.send("<a:Attention:867045436493398026> Ce n'est pas un nombre !");
                }
                else if(response === random) {
                    await collector.stop(`${collected.author.toString()} a remporté le Bingo, le nombre était: **${random}**`);
                }
            }
        });
        collector.on("end", async(collected, reason) => {
            if(reason && reason !== "time") {
                return message.channel.send(reason);
            } else {
                return message.channel.send(`Personne n'a remporté le Bingo, le nombre était: **${random}**`);
            }
        });
    });
};

module.exports.help = {
        name: "bstart"
};