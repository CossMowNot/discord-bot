const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {

    let replies = ["https://cdn.weeb.sh/images/HklBtCvTZ.gif", "https://cdn.weeb.sh/images/HJmunTOw-.gif", "https://cdn.weeb.sh/images/rkFSiEedf.gif", "https://cdn.weeb.sh/images/SJ--2auDZ.gif", "https://cdn.weeb.sh/images/rkv_mRKF-.gif", "https://cdn.weeb.sh/images/ByVQha_w-.gif", "https://cdn.weeb.sh/images/SJQRoTdDZ.gif", "https://cdn.weeb.sh/images/B12LhT_Pb.gif", "https://cdn.weeb.sh/images/Skv72TuPW.gif", "https://cdn.weeb.sh/images/Bkuk26uvb.gif", "https://cdn.weeb.sh/images/rkM4nTOPb.gif", "https://cdn.weeb.sh/images/SJ8I2Tuv-.gif", "https://cdn.weeb.sh/images/rJoL2pdvb.gif", "https://cdn.weeb.sh/images/ryEvhTOwW.gif", "https://cdn.weeb.sh/images/H1a42auvb.gif", "https://tenor.com/view/love-cheek-peck-kiss-anime-gif-17382412.gif", "https://tenor.com/view/darling-in-the-franxx-hiro-zero-two-kiss-couple-gif-17845616.gif", "https://tenor.com/view/anime-kissing-kiss-love-gif-10356314.gif"];
    let res = Math.floor(Math.random() * replies.length);

    const membre = message.mentions.members.first() || message.member;

    message.channel.send({
        embed: {
            color: 0x666edf,
            title: `:kissing_closed_eyes: ${message.author.username} embrasse ${membre.user.username}`,
            image: {
                url: replies[res],
            },
            timestamp: new Date(),
        }
    })
}

module.exports.help = {
    name: "kiss"
}