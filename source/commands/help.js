const Command = require("../handlers/command.js");

module.exports = class extends Command {
    constructor(client, filePath) {
        super(client, filePath, {
            name: "help",
        });
    }

    execute(message) {
        //message.author.send("```mg!create <time-in-seconds> <giveaway-title>\nmg!delete <giveaway-id>```");
        message.channel.send("**Salut tout le monde!** Je suis connu comme Vulnix. Giveaway. Bien que mes origines soient pour la plupart inconnues, il est connu que l'on m'associe à Zebulon™#666. Ha. Quels imbéciles. Dites-moi, cherchez-vous un cadeau automatisé? Allez-vous bien? J'ai la chose parfaite pour toi. Essayez `!ginvite` pour me mettre sur votre serveur, puis lancez-vous et lancez votre propre cadeau en utilisant les commandes de` !gcommandes`. Je te verrai bientôt ...");
    }
};