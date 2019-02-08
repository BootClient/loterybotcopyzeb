const Command = require("../handlers/command.js");

module.exports = class extends Command {
    constructor(client, filePath) {
        super(client, filePath, {
            name: "invite",
        });
    }

    execute(message) {
        message.reply('Check tes messages privés :wink:.');
        message.author.send(`Vous pouvez m'invitez ici: <A MODIER AVEC LIEN OAUTH>`);
    }
};
