const Discord = require('discord.js');
const moment = require('moment');
const db = require('quick.db');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    let user = message.mentions.users.first() || message.author;
    const status = {
        online: "<:Online:866978649081511947> En ligne",
        idle: "<:Idle:867009486715093013> Inactif",
        dnd: "<:DND:866978649075744778> Ne pas déranger",
        offline: "<:Hors_Ligne:866978648815566879> Hors ligne / invisible",
        streaming: "<:Stream:867149799392280627> En Stream"
    }


    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
    if(bal === null) bal = 0;

    message.channel.send({
        embed: {
            color: 0x666edf,
            title: `<:Utilisateur:866968362898685962> Informations d'utilisateur`,
            author: {
                name: `${membre.user.username}`,
            },
            thumbnail: {
                url: (membre.user.avatarURL({ dynamic:true }))
            },
            fields: [
                {
                    name: "<:Identifiant:866968362927521792> ID :",
                    value: membre.id,
                    inline: true
                },
                {
                    name: "<:Calendrier:866968362901962762> Date de création du compte : ",
                    value: moment.utc(membre.user.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'),
                    inline: true
                },
                {
                    name: "<:Manette:867009486849310730> Jeu en cours :",
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Aucun jeu."}`,
                    inline: true
                },
                {
                    name: "<:Message:866978648950964225> Statut :",
                    value: `${status[membre.user.presence.status]}`,
                    inline: true
                },
                {
                    name: "<:Rejoindre:866978649227001866> A rejoint ce discord le :",
                    value: moment.utc(membre.joinedAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'),
                    inline: true
                },
                {
                    name: "<:Boost:866978649075744779> Date de début de boost :",
                    value: `${membre.premiumSince ? moment.utc(membre.premiumSince).format('[Le] DD/MM/YYYY [à] HH:mm:ss') : "Ne boost pas"}`,
                    inline: true
                },
                {
                    name: "<:Poussire:867067966792269824> Nombre de Poussières d'étoiles :",
                    value: `${bal}`,
                    inline: true
                }
            ],
        }
    })
};

module.exports.help = {
    name: "ui"
}