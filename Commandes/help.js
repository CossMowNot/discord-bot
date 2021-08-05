const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    message.channel.send({
        embed: {
            color: 0x666edf,
            title: `Aide à propos du bot :`,
            description: `
<:Fleche_Jaune:866978648950964226> **__Général :__**

<:DND:866978649075744778> Statut du bot : **Ne pas déranger**
<:Horaire:866978648862490626> Date de création du bot : **Vendredi 11 décembre 2020**
<:Dveloppeur:866968362953211936> Développé par : **CossMowNot#0001**
<:Modrateur:866968362932371466> Testeurs du bot : <:Fystil:867048466185453578> <:Koufey:867078858808360971> <:LeGeekos:867685199754952704>
<:SDLPH_Badge:866978649047171093> Premiers utilisateurs : <:Maydmaxx:867145445020008449> <:Candice:867337311795806209> <:Konglive:867341772069928971> <a:Cosmos:867452908345229333> <:LeSel:867465195201888257>
<:Identifiant:866968362927521792> Identifiant du bot : **792106546002919474**
            
<:Fleche_Jaune:866978648950964226> **__Commandes :__**
            
<:Question:866978649148489749> Commandes d'aide : **1 (help)**
<:Modrateur:866968362932371466> Commandes Modération : **4 (ban <utilisateur> <raison>, clear <nombre>, kick <utilisateur> <raison>, poll <message>)**
<:Manette:867009486849310730> Commandes Jeux : **8 (bstart <nombre>, coin <pile/face>, hug <utilisateur>, kiss <utilisateur>, say <message>, sir <question>, slots, vdm)**
<:Utilisateur:866968362898685962> Commandes Informations : **4 (ping, server-info, temps <ville>, ui <utilisateur>)**

<:Fleche_Jaune:866978648950964226> **__Économie :__**

<:Utilisateur_Certifi:866968362998038548> **(Commande Admin)** Ajouter des poussières d'étoiles : __*addmoney <user> <number>__
<:Sac:866978649193054248> Voir son solde : __*ui__
<:Stonks:866978649047171092> Miner des poussières d'étoiles : 
> <:Hors_Ligne:866978648815566879> __*daily__ (toutes les 24 heures, ammassez 1000 poussières d'étoiles)
> <:Stream:867149799392280627> __*work__ (toutes les 8 heures, ammassez 500 poussières d'étoiles)
> <:Online:866978649081511947> __*mine__ (toutes les 3 heures, nombre aléatoire entre 0 et 300 poussières d'étoiles)
> <:Idle:867009486715093013> __*minehour__ (toutes les heures, nombre aléatoire entre 0 et 50 poussières d'étoiles)
> <:DND:866978649075744778> __*minehalf__ (toutes les 30 minutes, nombre aléatoire entre 0 et 20 poussières d'étoiles)
<:Internet:866968363933499402> Voir la boutique : __*boutique__
<:Check_List:866968362907205662> Faire un achat : __*achat (Nom de l'objet)__
<:Copier_coller:866978649113624576> Visionner le classement du serveur : __*leaderboard__
<:Question:866978649148489749> Faire un pari (Pile ou Face) => +500 si votre réponse est juste, -500 si votre réponse est fausse (toutes les 30 minutes) : __*bet pile/face__
<:Paramtres:866968362877583370> Tenter de pirater la base de données pour tenter d'obtenir le jackpot de **10 000** poussières d'étoiles (toutes les 5 minutes) : Commande en maintenance.`,
            thumbnail: {
                url: "https://cdn.discordapp.com/emojis/833633122624077824.png?v=1&size=2048"
            },
        },
    })
}

module.exports.help = {
    name: "help"
};