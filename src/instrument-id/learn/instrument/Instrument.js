import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

import { useSelector } from "react-redux";

import './Instrument.css';

import Icon from "_components/icon/Icon";
import Button from "_components/button/Button";
import WindowNavbar from "_components/window-nav/WindowNavbar";

import { createBuffers, removeBuffers } from "_helpers/instrument-id/buffers";
import { playBeat, playScale } from "_helpers/instrument-id/play";
import getInstrument from "_helpers/instrument-id/getInstrument";
import convertToId from "_helpers/_utils/convertToId";

const Instrument = () => {
  const { volume } = useSelector(state => state.mainSettings);
  const { instrument } = useParams();
  const {
    id,
    name,
    icon,
    madeFrom,
    howToPlay,
    sound,
    isRhythm,
    width,
    videoUrl
  } = getInstrument(convertToId(instrument.replace(/-/g, ' ')));
    
  const handleCreateBuffers = () => createBuffers(id);

  const playInstrument = () => isRhythm ?
    playBeat({ id, sound, volume }) :
    playScale({ id, volume });

  useEffect(() => {
    return () => removeBuffers();
  }, []);

  const openVideo = () => window.open(videoUrl);

  return (
    <main className="Instrument" onLoad={handleCreateBuffers}>
      <WindowNavbar page='INSTRUMENT ID: LEARN' />
      <div className="Instrument-main">
        <header className="Instrument-name">
          <Icon largeFont icon={icon} text={name} width={width} />
        </header>
        <article className="Instrument-information">
          <h2>WHAT IS THE {name} MADE OUT OF?</h2>
          <ul>
            {madeFrom.map(material => <li key={material}>{material}</li>)}
          </ul>
          <h2>THE {name} IS PLAYED BY...</h2>
          <p>{howToPlay}</p>
          <section className="Instrument-buttons">
            <Button colorId={0} onClick={playInstrument}>Play Sound</Button>
            <Button colorId={2} onClick={openVideo}>Watch Video</Button>
          </section>
        </article>
      </div>
    </main>
  );
};

export default Instrument;