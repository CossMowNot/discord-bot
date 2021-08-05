const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    let onlines = message.guild.members.cache.filter(({
        presence
    }) => presence.status == 'online').size;
    
    let offline = message.guild.members.cache.filter(({
        presence
    }) => presence.status == 'offline').size;

    let idle = message.guild.members.cache.filter(({
        presence
    }) => presence.status == 'idle').size;

    let dnd = message.guild.members.cache.filter(({
        presence
    }) => presence.status == 'dnd').size;

    message.channel.send({
        embed: {
            color: 0x666edf,
            title: `Informations sur le serveur`,
            thumbnail: {
                url: message.guild.iconURL()
            },
            image: {
                url: message.guild.bannerURL()
            },
            fields: [
                {
                name: "<:Salons:866968362907467786> Nom du serveur :",
                value: `${message.guild.name}`,
                inline: true
                },
                {
                name: "<:Internet:866968363933499402> Région du serveur :",
                value: `${message.guild.region}`,
                inline: true
                },
                {
                name: "<:Utilisateur:866968362898685962> Nombre de membres :",
                value: `${message.guild.members.cache.size} membres, dont ${message.guild.members.cache.filter(member => member.user.bot).size} bots.`,
                inline: true
                },
                {
                name: "<:Salons:866968362907467786> Nombre de salons :",
                value: `${message.guild.channels.cache.size} salons, dont ${message.guild.channels.cache.filter(channels => channels.type === 'text').size} salons textuels, ${message.guild.channels.cache.filter(channels => channels.type === 'voice').size} salons vocaux, et ${message.guild.channels.cache.filter(channels => channels.type === 'category').size} catégories.`,
                inline: true
                },
                {
                name: "<:Smiley:866978648731942913> Nombre d'emojis :",
                value: `${message.guild.emojis.cache.size} emojis, dont ${message.guild.emojis.cache.filter(emoji => !emoji.animated).size} emojis statiques, et ${message.guild.emojis.cache.filter(emoji => emoji.animated).size} animés.`,
                inline: true
                },
                {
                name: "<:Copier_coller:866978649113624576> Nombre de rôles :",
                value: `${message.guild.roles.cache.size} rôles`,
                inline: true
                },
                {
                name: "<:Fondateur:866968363049680906> Créateur du serveur :",
                value: `${message.guild.owner}`,
                inline: true
                },
                {
                name: "<:Calendrier:866968362901962762> Date de création du serveur :",
                value: moment.utc(message.guild.createdAt).format("DD/MM/YYYY"),
                inline: true
                },
                {
                name: "<:Boost_0:866978649248104488> Boosts :",
                value: `Niveau ${message.guild.premiumTier}, atteint avec ${message.guild.premiumSubscriptionCount} boosts.`,
                inline: true
                },
                {
                name: "<:Identifiant:866968362927521792> ID du serveur :",
                value: `${message.guild.id}`,
                inline: true
                },
                {
                name: "<:Online:866978649081511947> Membres en ligne :",
                value: onlines,
                inline: true
                },
                {
                name: "<:Idle:867009486715093013> Membres inactifs :",
                value: idle,
                inline: true
                },
                {
                name: "<:Idle:867009486715093013> Membres en Ne pas déranger :",
                value: dnd,
                inline: true
                },
                {
                name: "<:Hors_Ligne:866978648815566879> Membres hors ligne :",
                value: offline,
                inline: true
                },
            ],
        }
    })
}

module.exports.help = {
    name: "server-info"
}