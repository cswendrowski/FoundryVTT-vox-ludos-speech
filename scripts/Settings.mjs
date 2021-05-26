import constants from './Constants.mjs';

/**
 * Provides functionality for interaction with module settings
 */
export default class Settings {

    /**
     * Registers all of the necessary game settings for the module
     */
    static async registerSettings() {

        game.settings.register(constants.moduleName, "subscriptionKey", {
            name: game.i18n.localize(`${constants.moduleName}.subscriptionKey.name`),
            scope: 'world',
            config: true,
            type: String,
            default: ''
        });

        game.settings.register(constants.moduleName, "region", {
            name: game.i18n.localize(`${constants.moduleName}.region.name`),
            scope: 'world',
            config: true,
            type: String,
            default: 'eastus'
        });


        game.settings.register(constants.moduleName, "autoRead", {
            name: game.i18n.localize(`${constants.moduleName}.autoRead.name`),
            scope: 'client',
            config: true,
            type: Boolean,
            default: false
        });

        game.settings.register(constants.moduleName, "voice", {
            name: game.i18n.localize(`${constants.moduleName}.voice.name`),
            hint: 'https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support#neural-voices',
            scope: 'client',
            config: true,
            type: String,
            default: "en-US-JennyNeural"
        });

        game.settings.register(constants.moduleName, "style", {
            name: game.i18n.localize(`${constants.moduleName}.style.name`),
            hint: 'https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup?tabs=csharp#adjust-speaking-styles',
            scope: 'client',
            config: true,
            type: String,
            default: "assistant"
        });

        game.settings.register(constants.moduleName, "lang", {
            name: game.i18n.localize(`${constants.moduleName}.lang.name`),
            hint: 'https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support',
            scope: 'client',
            config: true,
            type: String,
            default: "en-us"
        });

        game.settings.register(constants.moduleName, "volume", {
            name: game.i18n.localize(`${constants.moduleName}.volume.name`),
            hint: 'https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup?tabs=csharp#adjust-prosody',
            scope: 'client',
            config: true,
            type: String,
            default: "80"
        });

        game.settings.register(constants.moduleName, "rate", {
            name: game.i18n.localize(`${constants.moduleName}.rate.name`),
            hint: 'https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup?tabs=csharp#adjust-prosody',
            scope: 'client',
            config: true,
            type: String,
            default: "-15%"
        });

        game.settings.register(constants.moduleName, "pitch", {
            name: game.i18n.localize(`${constants.moduleName}.pitch.name`),
            hint: 'https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup?tabs=csharp#adjust-prosody',
            scope: 'client',
            config: true,
            type: String,
            default: "-5%"
        });


    }
}