import React from "react";

import { useSelector } from "react-redux";

import './Word.css';

import WordPlayer from "./WordPlayer";

import synth from "../utils/synth";

const Word = () => {
  const wordDisplay = useSelector(store => store.wordToMusicDecoder.wordDisplay);
  const showPlayer = useSelector(store => store.wordToMusicDecoder.showPlayer);

  const playNote = e => {
    const note = e.target.classList[2];
    if (!note) return;
    synth.triggerAttackRelease(`${note}4`, '4n');
  }
  
  return (
    <div className="Word">
      <p className="Word-prompt">{showPlayer ? 'Play your melody! Click a letter to hear the note' : 'Find the letters in the chart above!'}</p>
      {wordDisplay.map(char => (
        <div className={`Word-letter ${char.note ? `filled ${char.note}` : null}`} onClick={playNote}>
          {char.letter}
        </div>
      ))}
      {showPlayer ? <WordPlayer /> : null}
    </div>
  );
};

export default Word;