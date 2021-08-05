const Discord = require('discord.js');
const client = new Discord.Client({
    fetchAllMembers: true
});

const fs = require('fs');
const db = require('quick.db');

var prefix = ("*")
client.login(process.env.TOKEN);

client.commands = new Discord.Collection();

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} Event en chargement...`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0]

    client.on(event, events.bind(null, client));
    });
});

fs.readdir("./Commandes/",(error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if (commandes.lenght <= 0) return console.log("Aucune commande trouvée...");

    commandes.forEach((f) =>{

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} Commande chargée !`);

    client.commands.set(commande.help.name, commande);
    });
});

client.on('ready', () => {
    console.log(`${client.user.tag} est en ligne.`)
})

const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 5,
    kickThreshold: 10,
    banThreshold: 15,
    maxInterval: 5000,
    warnMessage: "{@user}, n'abuse pas sur les messages...",
    kickMessage: '**{@user}** a été expulsé du serveur pour spam.',
    banMessage: '**{@user}** a été banni du serveur pour spam.',
    maxDuplicatesWarning: 3,
    maxDuplicatesKick: 7,
    maxDuplicatesBan: 10,
    exemptPermissions: [ 'ADMINISTRATOR'],
    ignoreBots: true,
    verbose: true,
    ignoredUsers: ["784883107848912916", "789126007621287937"],
});

client.on('message', (message) => antiSpam.message(message)); 

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '⌈👋⌋-bienvenue');
    if (!channel) return;
    channel.send({
        embed: {
            color: 0x666edf,
            title: `<a:Salut:867018113773469706> Bienvenue, ${member.user.username} ! On attendait plus que toi.`,
            description: `Nous te __recommandons__ de lire le <#701379485676863501> pour ne pas être **sanctionné** inutilement. Pense aussi à **acquérir tes rôles** (<@&808757509883953153> par exemple) directement dans le salon <#785238931008520192> ! Cela te permet d'obtenir des notifications pour les lives, ou encore juste permettre de t'identifier :D`,
            thumbnail: {
                url: (member.user.avatarURL({ dynamic:true }))
            },
        }
    })
  });

  client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '⌈👋⌋-bienvenue');
    if (!channel) return;
    channel.send({
        embed: {
            color: 0x666edf,
            title: `<a:Salut:867018113773469706> Adieu, ${member.user.username} ! On espère te revoir bientôt.`,
            description: `:pleading_face: On espère que tu trouveras ton bonheur sur un autre Discord... En attendant, celui-ci t'es toujours ouvert (Sauf si tu es banni, dans ce cas on veut plus de toi :rofl:)`,
            thumbnail: {
                url: (member.user.avatarURL({ dynamic:true }))
            },
        }
    })
  });

  client.on('message', message => {
    if(message.content === 'cc')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'coucou')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'Coucou')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'Coucou !')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'Salut !')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'Salut')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'salut')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'slt')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'hey')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'Hey !')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'Hey')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'Heyy')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'heyy')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'Heyyy')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'heyyy')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'yo')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'Yo')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'yop')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'Yop')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'yosh')
    message.react("<a:Salut:867018113773469706>")
    if(message.content === 'Yosh')
    message.react("<a:Salut:867018113773469706>")
})