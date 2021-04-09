import Speech from "./Speech.mjs";
import Settings from "./Settings.mjs";
import constants from "./Constants.mjs";

Hooks.on('renderActorSheet', function(sheet, html, data) {

    let configureSheet = html.find('.configure-sheet');

    let toAppend = '<a class="fvtt-speak"><i class="fas fa-microphone"></i>Speak</a>';
    if (configureSheet.length == 0) {
        html.find('.close').before(toAppend);
    }
    else {
        configureSheet.before(toAppend);
    }

    html.find(".fvtt-speak").click(async event => {
        await window.game.speech.transcribe(sheet.actor);
    });

});

Hooks.on('renderChatMessage', function(message, html, data) {
    html.find('.message-delete')
        .before(' <a class="button message-speak"><i class="fas fa-headphones"></i></a>');

    html.find('.message-speak').click(event => {
        window.game.speech.speakText(message.data.content, event.target);
    });
});

Hooks.on('renderChatLog', function(directory, html, data) {
    html.find('.control-buttons > .export-log')
        .before('<a class="button fvtt-speak" title="Speak"><i class="fas fa-microphone"></i></a>');

    html.find('.fvtt-speak').click(async event => {
        let actor = undefined;
        if (canvas.tokens.controlled?.length > 0) {
            actor = canvas.tokens.controlled[0].actor;
        }
        else if (game.user.character) {
            actor = game.user.character;
        }
        else {
            ui.notifications.warn("You do not currently have an Actor selected to speak as");
            return;
        }
        await window.game.speech.transcribe(actor);
    })
});

Hooks.on("createChatMessage", async (message) => {
    if (game.settings.get(constants.moduleName, "autoRead")) {
        if (message.user.id != game.user.id) {
            await window.game.speech.speakText(message.data.content);
        }
    }
});

Hooks.once('ready', async function() {
    await Settings.registerSettings();
    window.game.speech = new Speech()
});
