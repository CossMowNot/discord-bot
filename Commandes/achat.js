const db = require('quick.db');
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('<a:Attention:867045436493398026> Argument manquant. *buy <args>')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(purchase === 'Nitro' || 'nitro'){
            if (db.has(`variable`, { items: ["Nitro"] })){
                return message.reply("<a:Attention:867045436493398026> Vous possédez déjà cet élément.")

} else {
            if(amount < 100000) return message.channel.send(`<a:Attention:867045436493398026> Vous n'avez pas assez de poussières d'étoiles pour effectuer cet achat.`);
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 100000);
            db.push(message.author.id, "Nitro");
            message.channel.send(`Vous venez d'obtenir un Nitro ! MP CossMowNot#0001 pour le recevoir ! (Envoyer un screen de preuve).`)
        }
    }
        if(purchase === 'sub' || 'Sub'){
            if(amount < 100000) return message.channel.send(`<a:Attention:867045436493398026> Vous n'avez pas assez de poussières d'étoiles pour effectuer cet achat.`);
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 100000);
            db.push(message.author.id, "Sub");
            message.channel.send(`Vous venez d'obtenir un Sub ! MP CossMowNot#0001 pour le recevoir ! (Envoyer un screen de preuve).`)
        }

        if(purchase === '🪐'){
            if(amount < 5000) return message.channel.send(`<a:Attention:867045436493398026> Vous n'avez pas assez de poussières d'étoiles pour effectuer cet achat.`);
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 5000);
            db.push(message.author.id, "🪐");
            message.channel.send(`Vous venez d'obtenir le badge 🪐 ! MP CossMowNot#0001 pour le recevoir ! (Envoyer un screen de preuve).`)
        }

        if(purchase === '🚀'){
            if(amount < 15000) return message.channel.send(`<a:Attention:867045436493398026> Vous n'avez pas assez de poussières d'étoiles pour effectuer cet achat.`);
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 15000);
            db.push(message.author.id, "🚀");
            message.channel.send(`Vous venez d'obtenir le badge 🚀 ! MP CossMowNot#0001 pour le recevoir ! (Envoyer un screen de preuve).`)
        }

        if(purchase === '👑'){
            if(amount < 50000) return message.channel.send(`<a:Attention:867045436493398026> Vous n'avez pas assez de poussières d'étoiles pour effectuer cet achat.`);
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 50000);
            db.push(message.author.id, "👑");
            message.channel.send(`Vous venez d'obtenir le badge 👑 ! MP CossMowNot#0001 pour le recevoir ! (Envoyer un screen de preuve).`)
        }

        if(purchase === 'wizebot' || 'WizeBOT'){
            if(amount < 10000) return message.channel.send(`<a:Attention:867045436493398026> Vous n'avez pas assez de poussières d'étoiles pour effectuer cet achat.`);
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 10000);
            db.push(message.author.id, "WizeBOT");
            message.channel.send(`Vous venez d'obtenir 10 000 points WizeBOT ! MP CossMowNot#0001 pour le recevoir ! (Envoyer un screen de preuve).`)
        }
    }

module.exports.help = {
    name: "achat"
}