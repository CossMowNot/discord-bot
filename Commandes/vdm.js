const cheerio = require('cheerio');
const { get } = require('axios');
const Discord = require ("discord.js")

let vdm = [];

module.exports.update = () => {
        return new Promise((resolve, reject) => {
            get('https://www.viedemerde.fr/aleatoire')
            .then((res) => {
                let $ = cheerio.load(res.data);
                $('a[class="article-link"]')
                    .text()
                    .split('\n')
                    .map((item) => (item.trim() !== '' ? vdm.push(item) : null));
                resolve(vdm);
            })
            .catch(reject);
        });
};
module.exports.send = (message) => {
        return new Promise((resolve, reject) => {
            let random = Math.floor(Math.random() * vdm.length);
            resolve(message.channel.send(vdm[random]));
        });
};
module.exports.run = (client, message, args) => {
            this.update()
                .then(() => this.send(message))
                .catch(console.error);
    };

module.exports.help = {
    name: "vdm"
}