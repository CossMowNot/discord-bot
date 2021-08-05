const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {
    let replies = ["https://cdn.weeb.sh/images/Bk5T2_1Ob.gif", "https://cdn.weeb.sh/images/rJCigAYFZ.gif", "https://cdn.weeb.sh/images/HyllFdmwZ.gif", "https://cdn.weeb.sh/images/HJTWcTNCZ.gif", "https://cdn.weeb.sh/images/rkYetOXwW.gif", "https://cdn.weeb.sh/images/HJU2OdmwW.gif", "https://cdn.weeb.sh/images/Sk2gmRZZG.gif", "https://cdn.weeb.sh/images/Bk5T2_1Ob.gif", "https://cdn.weeb.sh/images/r1kC_dQPW.gif", "https://cdn.weeb.sh/images/BkuUhO1OW.gif", "https://cdn.weeb.sh/images/rkIK_u7Pb.gif", "https://cdn.weeb.sh/images/Bk5haAocG.gif", "https://cdn.weeb.sh/images/ryjJFdmvb.gif", "https://cdn.weeb.sh/images/SJZ-Qy35f.gif", "https://cdn.weeb.sh/images/HyNJIaVCb.gif", "https://cdn.weeb.sh/images/r1b9d_QPW.gif", "https://cdn.weeb.sh/images/r1R3_d7v-.gif", "https://cdn.weeb.sh/images/BkFnJsnA-.gif", "https://cdn.weeb.sh/images/r1v2_uXP-.gif", "https://cdn.weeb.sh/images/SywetdQvZ.gif", "https://cdn.weeb.sh/images/rkN2u_XP-.gif", "https://tenor.com/view/my-little-monster-anime-hug-love-gif-13221416.gif", "https://tenor.com/view/horimiya-izumi-miyamura-hori-kyoko-couple-hug-gif-14539121.gif", "https://tenor.com/view/anime-hug-sweet-love-gif-14246498.gif", "https://tenor.com/view/hug-anime-gif-11074788.gif", "https://tenor.com/view/kiss-cute-couple-cuddle-love-gif-16896135.gif", "https://tenor.com/view/hug-anime-gif-4898650.gif"];
    let res = Math.floor(Math.random() * replies.length);

    const membre = message.mentions.members.first() || message.member;

    message.channel.send({
        embed: {
            color: 0x666edf,
            title: `:hugging: ${message.author.username} câline ${membre.user.username}`,
            image: {
                url: replies[res],
            },
            timestamp: new Date(),
        }
    })
}

module.exports.help = {
    name: "hug"
}