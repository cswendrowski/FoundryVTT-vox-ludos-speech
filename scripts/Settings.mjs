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
            name: 'Azure Speech Subscription Key',
            scope: 'world',
            config: true,
            type: String,
            default: ''
        });

        game.settings.register(constants.moduleName, "region", {
            name: 'Azure Speech Region',
            scope: 'world',
            config: true,
            type: String,
            default: 'eastus'
        });


        game.settings.register(constants.moduleName, "autoRead", {
            name: 'Should chat messages from others be automatically read via TTS?',
            scope: 'client',
            config: true,
            type: Boolean,
            default: false
        });

        game.settings.register(constants.moduleName, "voice", {
            name: 'Voice',
            hint: 'https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support#neural-voices',
            scope: 'client',
            config: true,
            type: String,
            default: "en-US-JennyNeural"
        });

        game.settings.register(constants.moduleName, "style", {
            name: 'Voice Style',
            hint: 'https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup?tabs=csharp#adjust-speaking-styles',
            scope: 'client',
            config: true,
            type: String,
            default: "assistant"
        });

        game.settings.register(constants.moduleName, "lang", {
            name: 'Language',
            hint: 'https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support',
            scope: 'client',
            config: true,
            type: String,
            default: "en-us"
        });

        game.settings.register(constants.moduleName, "volume", {
            name: 'Volume of Voice',
            hint: 'https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup?tabs=csharp#adjust-prosody',
            scope: 'client',
            config: true,
            type: String,
            default: "80"
        });

        game.settings.register(constants.moduleName, "rate", {
            name: 'Rate of Voice',
            hint: 'https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup?tabs=csharp#adjust-prosody',
            scope: 'client',
            config: true,
            type: String,
            default: "-15%"
        });

        game.settings.register(constants.moduleName, "pitch", {
            name: 'Pitch of Voice',
            hint: 'https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup?tabs=csharp#adjust-prosody',
            scope: 'client',
            config: true,
            type: String,
            default: "-5%"
        });


    }
}