import { configureStore } from "@reduxjs/toolkit";

// General/Settings
import general from "./_general/generalReducer";
import settings from "./settings/settingsReducer";

// Music Games
import musicDecoder from "./music-decoder/musicDecoderReducer";
import jumpIntoRhythm from "./jump-into-rhythm/jumpIntoRhythmReducer";
import sequenceMaker from "./sequence-maker/sequenceMakerReducer";
import listeningSkillsTest from "./instrument-id/listening-skills/listeningSkillsTestReducer";
import songMaker from "./instrument-id/song-maker/songMakerReducer";

// Art Games
import freePaint from "./free-paint/freePaintReducer";
import colorTheory from "./color-theory/colorTheoryReducer";

// Tools
import scoreKeeper from "./score-keeper/scoreKeeperReducer";
import moodMeter from "./mood-meter/moodMeterReducer";
import timeKeeper from "./time-keeper/timeKeeperReducer";

const rootReducer = configureStore({
  reducer: {
    general,
    settings,
    musicDecoder,
    sequenceMaker,
    jumpIntoRhythm,
    listeningSkillsTest,
    songMaker,
    freePaint,
    colorTheory,
    scoreKeeper,
    moodMeter,
    timeKeeper,
  },
});

export default rootReducer;
