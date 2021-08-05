exports.run = async (client, message) => {

    const Discord = require("discord.js");

    let args = message.content.split(" ").slice(1);

      message.delete().catch(err => {
          if(err) console.log(`[Erreur] ${err}`);
      });
  
  if(!args) return message.channel.send(`<a:Attention:867045436493398026> Pas de message spécifié !`);
  if(["@everyone", "@here", "<@&701379647597969408", "<@&792088962352021566", "<@&792089229089177620", "<@&792089597239623780"].some(ping => args.includes(ping))) return message.channel.send(`<a:Attention:867045436493398026> Mentionner \`@everyone\` ou \`@here\` est interdit !`);
  if(["putain", "Putain", "put1", "merde", "Merde", "Mer2", "Mer2", "nigga", "Nigga", "Niga", "négro", "negro", "nègre", "negre", "niga", "Nègre", "Négro", "Negre", "Nezgro", "nezgro", "Putte", "putte", "Pute", "pute", "stalin", "Stalin", "staline", "Staline", "hitlerre", "Hitlerre", "Hitlere", "hitlere", "hitler", "Hitler", "Nega", "nega", "negger", "Negger", "neger", "Neger", "Salope", "salope", "saloppe", "Saloppe", "HITLER", "HITLERRE", "staline", "Staline", "hitlerre", "Hitlerre", "Hitlere", "hitlere", "hitler", "Hitler", "Nega", "Catin", "catin", "FDP", "fdp", "STALINE"].some(ping => args.includes(ping))) return message.channel.send(`<a:Attention:867045436493398026> Les insultes sont censurées !`);
  message.channel.send(args.join(" "));
}

module.exports.help = {
    name: "say"
}