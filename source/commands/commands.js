const Command = require("../handlers/command.js");

module.exports = class extends Command {
    constructor(client, filePath) {
        super(client, filePath, {
            name: "commandes",
            aliases: ["cmds"]
        });
    }

    execute(message) {
        const prefix = this.client.config.prefix;
        message.reply('Check tes DMs. :wink:');
        message.author.send(`\`\`\`md\nCommandes pour ${this.client.user.username}\n---------------------------\n`
        +`↣ ${prefix}create\n" + "Créer un giveaway\n`
        +`↣ ${prefix}delete\n" + "Supprime le dernier giveaway\n`
        +`↣ ${prefix}draw\n" + "Force à dessiner un dessin\n`
        +`↣ ${prefix}invite\n" + "Obtenir un lien d'invitation pour le bot\n`
        +`↣ ${prefix}server\n" + "Rejoignez le serveur officiel Discord\n`
        +`↣ ${prefix}ping\n" + "Vérifiez si le bot répond\`\`\``);
    }
};