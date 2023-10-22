const colors = require('colors');
const title = require('./modules/title.js');
const { Client, Collection, Discord, ActivityType } = require('discord.js');
const client = new Client({ intents: 32767 });
title('Hosgeldiniz');

require("./loader.js")(client);

client.on('ready', () => {
    console.log(`${client.user.tag} Olarak Giris Yaptiniz!`.green);
    client.user.setPresence({ activities: [{ name: 'Fast Bomber', type: 0 }], status: 'idle' });
});

client.login('MTE2NTYxMzkxMDcxNjU4ODEyMw.GLCV2j.T5u3PRXfdQ5krZ9rPPA5Kp2SL8gh-jdKsV1Ht0').catch(() => console.log('Tokeni Kontrol Ediniz'.red));
