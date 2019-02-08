const Command = require("../handlers/command.js");

module.exports = class extends Command {
    constructor(client, filePath) {
        super(client, filePath, {
            name: "draw"
        });
    }

    execute(message) {
        if (!message.guildAdmin && !message.globalAdmin) return message.channel.send('Permissions invalide. `MANAGE_SERVER` permission ou `MG Admin` rôle requis.');

        const match = /(?:draw)(?:\s+(?:<#)?(\d{17,20})(?:>)?)?(?:\s+(\d+))/i.exec(message.content);

        if (!match) return message.channel.send(`Utilisation non valide de la commande: \`${this.client.config.prefix}draw [channel-mention|channel-id] <giveaway-number>\``);

        const channel = match[1] ? message.guild.channels.get(match[1]) || message.channel : message.channel;

        if (this.client.giveawayCache.filter(giveaway => giveaway.channel.id === channel.id).size <= 0) return message.channel.send(`Il n'y a pas de cadeau en cours actuellement dans **${channel.name}**. Peut-être que vous vouliez dire \`!gredraw\`?`);

        const giveaway = this.client.giveawayCache.get(`${channel.id}-${match[2]}`);
        if(!giveaway) return message.channel.send(`ERR: Aucun cadeau ne se produit dans le canal spécifié avec cet ID.`);
        giveaway.endTime = Date.now() + 5 * 1000;
        giveaway.msg.embeds[0].timestamp = new Date(giveaway.endTime);
    }
};
