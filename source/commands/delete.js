const Command = require("../handlers/command.js");

module.exports = class extends Command {
    constructor(client, filePath) {
        super(client, filePath, {
            name: "delete",
            aliases: ["stop", "end"]
        });
    }

    execute(message) {
        if(!message.guildAdmin && !message.globalAdmin) return message.channel.send('Permissions invalide. `MANAGE_SERVER` permission ou `MG Admin` rôle requis.');

        const match = /(?:delete|stop|end)(?:\s+(?:<#)?(\d{17,20})(?:>)?)?(?:\s+(\d+))/i.exec(message.content);

        if (!match) return message.channel.send(`Utilisation non valide de la commande: \`${this.client.config.prefix}delete [channel-mention|channel-id] <giveaway-number>\``);

        const channel = match[1] ? message.guild.channels.get(match[1]) || message.channel : message.channel;

        if (this.client.giveawayCache.filter(giveaway => giveaway.channel.id === channel.id).size <= 0) return message.channel.send(`Il n'y a pas de cadeau en cours actuellement dans **${channel.name}**.`);

        const a = this.client.giveawayCache.get(`${channel.id}-${match[2]}`);

        if(!a) return message.channel.send(`ERR: Aucun cadeau ne se produit dans le canal spécifié avec cet ID.`);

        clearInterval(a.interval);

        a.msg.delete();

        this.client.giveawayCache.delete(`${channel.id}-${match[2]}`);

        message.channel.send(`Le giveaway **${match[2]}** à bien été supprimé.`);
    }
};
