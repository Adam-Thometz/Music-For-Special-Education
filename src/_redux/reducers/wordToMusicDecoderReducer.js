import { addWord, changeScale, changeSound, createWord, fillLetter, playMelody, playNote, clearGame } from "../actions/wordToMusicActions";
import { createReducer } from "@reduxjs/toolkit";

import { now } from 'tone';
import generateSynth from "../../_utils/synth";

export const INITIAL_STATE = {
  wordDisplay: [
    []
  ],
  synth: null,
  scale: null
};

const wordToMusicDecoderReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(addWord, (state) => {
      state.wordDisplay.push([])
    })
    .addCase(createWord, (state, action) => {
      const { input, id } = action.payload;
      const newWord = input.toUpperCase().split('').map(letter => ({
        letter,
        note: null
      }));
      state.wordDisplay[id] = newWord.length ?
        newWord :
        [];
    })
    .addCase(fillLetter, (state, action) => {
      const { letter, note } = action.payload;
      const letterLocation = searchLetter(state.wordDisplay, letter);
      if (!letterLocation.length) return;

      const wordIdx = letterLocation[0];
      const letterIdx = letterLocation[1];
      state.wordDisplay[wordIdx][letterIdx].note = note;
      state.synth.triggerAttackRelease(`${note}3`, '4n');
    })
    .addCase(playNote, (state, action) => {
      const note = action.payload;
      state.synth.triggerAttackRelease(`${note}3`, "4n");
    })
    .addCase(playMelody, (state, action) => {
      const start = now();
      const currWord = action.payload;
      for (let i = 0; i < currWord.length; i++) {
        const { note } = currWord[i];
        const seconds = i * 0.5;
        state.synth.triggerAttackRelease(`${note}3`, '8n', start+seconds);
      };
    })
    .addCase(changeScale, (state, action) => {
      const { newScale, currInstrument } = action.payload;
      state.synth = generateSynth(newScale, currInstrument);
    })
    .addCase(changeSound, (state, action) => {
      const { currScale, newInstrument } = action.payload;
      state.synth = generateSynth(currScale, newInstrument);
    })
    .addCase(clearGame, (state, action) => {
      state.wordDisplay = [
        []
      ]
      state.synth = null
      state.scale = null
    });;
})

export function searchLetter(wordDisplay, letter) {
  const result = []
  for (let i = 0; i < wordDisplay.length; i++) {
    const currWord = wordDisplay[i];
    const letterIdx = currWord.findIndex(block => !block.note && (block.letter === letter));
    if (letterIdx !== -1) {
      result.push(i, letterIdx);
      break;
    }
  }
  return result;
}

export default wordToMusicDecoderReducer;