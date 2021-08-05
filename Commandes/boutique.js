const { Discord, MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { Menu } = require('discord.js-menu');

module.exports.run = async(client, message, args) => {

    let user = message.mentions.users.first() || message.author;
    const membre = message.mentions.members.first() || message.member;
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
    if(bal === null) bal = 0;

    let helpMenu = new Menu(message.channel, message.author.id, [
        {
            name: 'premium',
            content: new MessageEmbed({
                color: 0x666edf,
                title: 'Boutique spatiale :',
                description: `<:Fleche:866978649084919808> Cliquez sur les réactions pour naviguer dans la boutique.
                
<:Fondateur:866968363049680906> - **Catégorie Premium**
<:Modrateur:866968362932371466> - **Catégorie Badges**
<:Sac:866978649193054248> - **Catégorie WizeBOT**
<:Copier_coller:866978649113624576> - **Catégorie Cartes Pokémon**
.`,
                author: {
                    name: `${membre.user.username} - ${bal} poussières d'étoiles.`,
                },
                thumbnail: {
                    url: "https://img.icons8.com/cotton/2x/shop--v3.png"
                },
                fields: [
                    {
                        name: "<:Fleche_Jaune:866978648950964226> **Catégorie Premium**",
                        value: "."
                    },
                    {
                        name: "<:Nitro:867399935154847775> Discord Nitro Classic (1 mois) :",
                        value: "<:Idle:867009486715093013> En cours d'approvisionnement...",
                    },
                    {
                        name: "<:Ordinateur:866978649068798002> Sub chez CossMowNot (1 mois) :",
                        value: "<:Idle:867009486715093013> En cours d'approvisionnement...",
                    },
                ]
            }),
            reactions: {
                '866968362932371466': 'badges',
                '866978649193054248': 'wizebot',
                '866978649113624576': 'cartes'
            }
        },
        {
            name: 'badges',
            content: new MessageEmbed({
                color: 0x666edf,
                        title: `Boutique spatiale :`,
                        description: `<:Fleche:866978649084919808> Cliquez sur les réactions pour naviguer dans la boutique.
                
<:Fondateur:866968363049680906> - **Catégorie Premium**
<:Modrateur:866968362932371466> - **Catégorie Badges**
<:Sac:866978649193054248> - **Catégorie WizeBOT**
<:Copier_coller:866978649113624576> - **Catégorie Cartes Pokémon**
.`,
                        author: {
                            name: `${membre.user.username} - ${bal} poussières d'étoiles.`,
                        },
                        thumbnail: {
                            url: "https://img.icons8.com/cotton/2x/shop--v3.png"
                        },
                        fields: [
                            {
                                name: "<:Fleche_Jaune:866978648950964226> **Catégorie Badges**",
                                value: "."
                            },
                            {
                                name: "Badge ``🪐`` :",
                                value: "<:Online:866978649081511947> En stock ! (Prix : 5 000 <:Poussire:867067966792269824>)",
                            },
                            {
                                name: "Badge ``🚀`` :",
                                value: "<:Online:866978649081511947> En stock ! (Prix : 15 000 <:Poussire:867067966792269824>)",
                            },
                            {
                                name: "Badge ``👑`` :",
                                value: "<:Online:866978649081511947> En stock ! (Prix : 50 000 <:Poussire:867067966792269824>)",
                            },
                        ]
            }),
            reactions: {
                '866968363049680906': 'premium',
                '866978649193054248': 'wizebot',
                '866978649113624576': 'cartes'
            }
        },
        {
            name: 'wizebot',
            content: new MessageEmbed({
                color: 0x666edf,
                title: `Boutique spatiale :`,
                description: `<:Fleche:866978649084919808> Cliquez sur les réactions pour naviguer dans la boutique.
                
<:Fondateur:866968363049680906> - **Catégorie Premium**
<:Modrateur:866968362932371466> - **Catégorie Badges**
<:Sac:866978649193054248> - **Catégorie WizeBOT**
<:Copier_coller:866978649113624576> - **Catégorie Cartes Pokémon**
.`,
                author: {
                    name: `${membre.user.username} - ${bal} poussières d'étoiles.`,
                },
                thumbnail: {
                    url: "https://img.icons8.com/cotton/2x/shop--v3.png"
                },
                fields: [
                    {
                        name: "<:Fleche_Jaune:866978648950964226> **Catégorie WizeBOT**",
                        value: "."
                    },
                    {
                        name: "<:Ordinateur:866978649068798002> 5 000 monnaie WizeBOT :",
                        value: "<:Online:866978649081511947> En stock ! (Prix : 10 000 <:Poussire:867067966792269824>)",
                    },
                ]
            }),
            reactions: {
                '866968363049680906': 'premium',
                '866968362932371466': 'badges',
                '866978649113624576': 'cartes'
            }
        },
        {
            name: 'cartes',
            content: new MessageEmbed({
                color: 0x666edf,
                title: `Boutique spatiale :`,
                description: `<:Fleche:866978649084919808> Cliquez sur les réactions pour naviguer dans la boutique.
                
<:Fondateur:866968363049680906> - **Catégorie premium**
<:Modrateur:866968362932371466> - **Catégorie badges**
<:Sac:866978649193054248> - **Catégorie WizeBOT**
<:Copier_coller:866978649113624576> - **Catégorie Cartes Pokémon**
.`,
                author: {
                    name: `${membre.user.username} - ${bal} poussières d'étoiles.`,
                },
                thumbnail: {
                    url: "https://img.icons8.com/cotton/2x/shop--v3.png"
                },
                fields: [
                    {
                        name: "<:Fleche_Jaune:866978648950964226> **Catégorie Cartes Pokémon**",
                        value: "."
                    },
                    {
                        name: "Carte Pokémon taille Jumbo+ CossMowNot 116/114 :",
                        value: "<:DND:866978649075744778> **Stock limité !** (1) (Prix : 150 000 <:Poussire:867067966792269824>)",
                    },
                    {
                        name: "Carte Pokémon taille Jumbo+ CossMowNot 117/114 :",
                        value: "<:DND:866978649075744778> **Stock limité !** (1) (Prix : 150 000 <:Poussire:867067966792269824>)",
                    },
                    {
                        name: "Carte Pokémon taille Jumbo+ CossMowNot 118/114 :",
                        value: "<:DND:866978649075744778> **Stock limité !** (1) (Prix : 150 000 <:Poussire:867067966792269824>)",
                    },
                    {
                        name: "Carte Pokémon taille Jumbo+ ??? **(Secrète)** 119/114 :",
                        value: "<:DND:866978649075744778> **Stock limité !** (1) (Prix : 250 000 <:Poussire:867067966792269824>)",
                    },
                    {
                        name: "Carte Pokémon taille Jumbo+ KosMoNot EX **(Secrète)** 120/114 :",
                        value: "<:DND:866978649075744778> **Stock limité !** (1) (Prix : 500 000 <:Poussire:867067966792269824>)",
                    },
                ]
            }),
            reactions: {
                '866968363049680906': 'premium',
                '866968362932371466': 'badges',
                '866978649193054248': 'wizebot',
            }
        }
    ], 300000)
    helpMenu.start()
    helpMenu.on('pageChange', destination => {
        destination.content.title = "Boutique spatiale :"
    })
}

module.exports.help = {
    name: "boutique"
}