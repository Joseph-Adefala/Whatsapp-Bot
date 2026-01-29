// WhatsApp Bot Code Implementation

const { Client, MessageMedia } = require('whatsapp-web.js');
const fs = require('fs');

const client = new Client();

let activeMembers = [];
let mutedMembers = [];

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async message => {
    const command = message.body.split(' ')[0];
    const chat = await message.getChat();

    if (command === '!ban') {
        if (!chat.isGroup) return;
        if (!message.author) return;
        activeMembers = activeMembers.filter(member => member !== message.author);
        message.reply('You have been banned from this group.');
    }

    if (command === '!mute') {
        if (!chat.isGroup) return;
        if (!message.author) return;
        mutedMembers.push(message.author);
        message.reply('You have been muted.');
    }

    if (command === '!delete') {
        if (!chat.isGroup) return;
        if (!message.author) return;
        message.delete();
        message.reply('Your message has been deleted.');
    }

    if (command === '!autodeletelinks') {
        if (!chat.isGroup) return;
        if (mutedMembers.includes(message.author)) return;
        const urlRegex = /https?:\/\/\S+/g;
        const links = message.body.match(urlRegex);
        if (links) {
            await message.delete();
            message.reply('Links are not allowed in this group. Your message containing links has been deleted.');
        }
    }

    if (command === '!listofactivemembers') {
        if (!chat.isGroup) return;
        message.reply(`Active members: ${activeMembers.join(', ')}`);
    }
});

client.initialize();
