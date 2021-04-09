import constants from "./Constants.mjs";

export default class Speech {

    constructor() {
        let key = "4b50e7a475e044db82676a161a8c51f7";
        let region = game.settings.get(constants.moduleName, "region");
        let lang = game.settings.get(constants.moduleName, "lang");
        this.speechConfig = SpeechSDK.SpeechConfig.fromSubscription(key, region);
        this.speechConfig.speechRecognitionLanguage = lang;

        if (navigator.mediaDevices == undefined) {
            ui.notifications.warn("Could not connect to audio devices - are you on an insecure connection such as HTTP?")
        }
    }

    connectMicrophone() {
        const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
        this.recognizer = new SpeechSDK.SpeechRecognizer(this.speechConfig, audioConfig);
    }

    connectSpeaker() {
        const audioConfig = SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();
        this.synthesizer = new SpeechSDK.SpeechSynthesizer(this.speechConfig, audioConfig);
    }

    async transcribe(actor) {
        if (this.recognizer == undefined) {
            this.connectMicrophone();
        }
        $(".fvtt-speak").addClass("recording");
        await this.recognizer.recognizeOnceAsync(
            function (result)
            {
                $(".fvtt-speak").removeClass("recording");
                ChatMessage.create({"content": result.text, "speaker": { "actor": actor.id }, "type": 2})
            },
            function (error) { console.log(error); }
        );
    }

    async speakText(text) {
        if (this.synthesizer == undefined) {
            this.connectSpeaker();
        }
        let voice = game.settings.get(constants.moduleName, "voice");
        let lang = game.settings.get(constants.moduleName, "lang");
        let style = game.settings.get(constants.moduleName, "style");
        let volume = game.settings.get(constants.moduleName, "volume");
        let rate = game.settings.get(constants.moduleName, "rate");
        let pitch = game.settings.get(constants.moduleName, "pitch");
        let ssml =
            `<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version=\"1.0\" xml:lang="${lang}">` +
            `<voice name="${voice}">` +
            `  <mstts:express-as style="${style}">` +
            `    <prosody rate="${rate}" pitch="${pitch}" volume='${volume}'>` +
                    text +
            "    </prosody>" +
            "  </mstts:express-as>" +
            "</voice>" +
            "</speak>";
        this.synthesizer.speakSsmlAsync(
            ssml,
            result => {
            },
            error => {
                console.log(error);
                this.synthesizer.close();
                this.synthesizer = undefined;
            });
    }
}
