const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!args[1]) return message.reply("Argument manquant. *sir <args>");
  
    let replies = ["Bien évidemment", "T'as cru toi...", "Il y a des chances.", "Il se pourrait que ce soit possible.", "Je pense pas.", "Je m'en fous, t'aime le mot BAN ?", "Et ma main dans ta figure, ça te parle ? Arrête de poser des questions connes enfin...", "Ta question est... assez surprenante, pour le coup."];
    let question = args.slice(0).join(" ");
    let res = Math.floor(Math.random() * replies.length);
    
    message.channel.send({
      embed: {
        color: 0x666edf,
        author: {
          name: `${message.author.username}`
        },
          fields: [
            {
              name: "Tu me demandes :",
              value: question
            },
            {
              name: "Je te répond :",
              value: replies[res]
            }
          ],
        }
    })
};

module.exports.help = {
    name: 'sir'
};