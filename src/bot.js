const tmi = require('tmi.js')
require('dotenv').config()

const CONTRA = process.env.PASSWORD

const opts = {
    options: {
        debug: true
    },
    identity: {
        username: 'felipe_semicolon',
        password: CONTRA
    },
    channels: ['felipe_semicolon']
}

const client = new tmi.client(opts);


client.on('connected', onConnectedHandler)
client.on('message', onMessageHandler)

client.connect();

function onMessageHandler (target, context, msg, self){
    if(self) return

    const commandName = msg.trim();

    if(commandName === '!hello'){
        client.say(target, `welcome ${context.username}`);
    }else{
        console.log(` * Unknown command ${commandName}`);
    }
}

function onConnectedHandler (addr, port){
    console.log(`* connected to ${addr}:${port}`);
}