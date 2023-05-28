import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { toggleMute, resetSong } from "_redux/time-keeper/timeKeeperReducer";

import "./TimeLeft.css";

import createDisplayTime from "_utils/time-keeper/createDisplayTime";
import reset from "_media/time-keeper/controls/reset.png";
import mute from "_media/time-keeper/controls/mute.png";
import urls from "_routes/routeUrls";

const TimeLeft = ({ inNav }) => {
  const { secondsLeft, currSongIdx, isMuted } = useSelector((state) => state.timeKeeper);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const goToTimeKeeper = () => navigate(urls.timeKeeperUrl)
  const handleMute = () => dispatch(toggleMute());
  const handleReset = () => {
    if (currSongIdx === 0) {
      const audio = document.querySelector(".TimeKeeperNav-audio");
      if (audio) audio.currentTime = 0;
    }
    dispatch(resetSong());
  }

  const timeDisplay = createDisplayTime(secondsLeft);

  return (
    <div className={`TimeLeft${inNav ? '-small' : ''}`}>
      <img
        className="TimeLeft-mute"
        src={mute}
        alt=""
        role="button"
        onClick={handleMute}
        style={isMuted ? { filter: "invert(0.5)" } : null}
      />
      <h1
        className="TimeLeft-header"
        onClick={inNav ? goToTimeKeeper : null}
      >{timeDisplay}</h1>
      <img
        className="TimeLeft-reset"
        src={reset}
        alt=""
        role="button"
        onClick={handleReset}
      />
    </div>
  );
};

export default TimeLeft;
