const Discord = require("discord.js");
const weather = require('weather-js')

exports.run = (client, message, args) => {

weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  
if(result.length === 0){
message.channel.send("<a:Attention:867045436493398026> Argument invalide. *temps <args>")
return;
}

  var current = result[0].current;
  var location = result[0].location;
    if (err) message.channel.send(err);
  
      message.channel.send({
          embed: {
              color: `${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0x666edf}`,
              title: ``,
              author: {
                  name: `Temps à ${current.observationpoint}`,
              },
              thumbnail: {
                  url: current.imageUrl
              },
              description: `**${current.skytext}**`,
              fields: [
                  {
                  name: "Fuseau horaire :",
                  value: `UTC${location.timezone}`
                  },
                  {
                  name: "Type de degré :",
                  value: location.degreetype
                  },
                  {
                  name: "Température :",
                  value: `${current.temperature} Degrés`
                  },
                  {
                  name: "Ressenti :",
                  value: `${current.feelslike} Degrés`
                  },
                  {
                  name: "Les vents :",
                  value: current.winddisplay
                  },
                  {
                  name: "Humidité :",
                  value: `${current.humidity}%`
                  }
              ],
              footer: {
                  text: `Informations sur le temps à ${current.observationpoint} - commande réalisée par ${message.author.username}`
              }
          }
      })
});
  

}

module.exports.help = {
    name: "temps"
}