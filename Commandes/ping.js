const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    let début = Date.now();
    await message.channel.send({
        embed:
        {
            color: 0x666edf,
            title: "<:Hors_Ligne:866978648815566879> Mon ping est de..."
        }}).then(async(m) => await m.edit({
            embed:
            {
                color: 0x666edf,
                title: `<:Online:866978649081511947> Mon ping est de ${Date.now() - début} ms`
            }}))
        }

module.exports.help = {
    name: "ping"
}