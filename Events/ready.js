module.exports = client => {

    const guild = [];
    client.guilds.cache.map(e => guild.push(e));
    guild.forEach(async g => {
        const data = await client.getGuild(g);
        if (!data) client.createGuild({ guildID: g.id });
    });

    let activities = [
            `${client.guilds.cache
            .map(g => g.memberCount)
            .reduce((a, b) => a + b)} utilisateurs`,
            `[*help]`,
            `Twitch : CossMowNot`
        ],
        i = 0;
    setInterval(
        () =>
            client.user.setPresence({
                activity: {
                    name: `${activities[i++ % activities.length]}`,
                    type: 'STREAMING',
                    url: 'https://twitch.tv/cossmownot'
                },
                status: 'dnd',
            }),
        10000,
    );
};