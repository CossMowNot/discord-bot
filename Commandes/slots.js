const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const slots = [':grapes:', ':cherries:', ':lemon:'];
    const slotOne = slots[Math.floor(Math.random() * slots.length)];
    const slotTwo = slots[Math.floor(Math.random() * slots.length)];
    const slotThree = slots[Math.floor(Math.random() * slots.length)];
    const slotfour = slots[Math.floor(Math.random() * slots.length)];
    const slotfive = slots[Math.floor(Math.random() * slots.length)];
    const slotsix = slots[Math.floor(Math.random() * slots.length)];
    const slotseven = slots[Math.floor(Math.random() * slots.length)];
    const sloteight = slots[Math.floor(Math.random() * slots.length)];
    const slotnine = slots[Math.floor(Math.random() * slots.length)];
    if (slotOne === slotTwo && slotOne === slotThree || slotfour === slotfive && slotfour === slotsix || slotseven === sloteight && slotseven === slotnine) {
        const won = message.channel.send({
                        embed: {
                            color: 0x666edf,
                            title: `La roue indique...`,
                            fields: [
                                {
                                name: "|-----|-----|----|",
                                value: `|${slotOne}|${slotTwo}|${slotThree}|`
                                },
                                {
                                name: "|-----|-----|----|",
                                value: `|${slotfour}|${slotfive}|${slotsix}|`
                                },
                                {
                                name: "|-----|-----|----|",
                                value: `|${slotseven}|${sloteight}|${slotnine}|`
                                },
                            ],
                            footer: {
                                text: `Tu as gagné, ${message.author.username} !`
                            }
                        }
                    })
                } else {
        const lost = message.channel.send({
            embed: {
                color: 0x666edf,
                title: `La roue indique...`,
                fields: [
                    {
                    name: "|-----|-----|----|",
                    value: `|${slotOne}|${slotTwo}|${slotThree}|`
                    },
                    {
                    name: "|-----|-----|----|",
                    value: `|${slotfour}|${slotfive}|${slotsix}|`
                    },
                    {
                    name: "|-----|-----|----|",
                    value: `|${slotseven}|${sloteight}|${slotnine}|`
                    },
                ],
                footer: {
                    text: `Tu as perdu, ${message.author.username} !`
                }
            }
        })
    }
}
module.exports.help = {
    name: "slots"
}