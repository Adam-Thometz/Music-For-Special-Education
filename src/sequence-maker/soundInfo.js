// Sounds
import clappingContinuous from './sounds/clapping_continuous.mp3';
import clappingOnce from './sounds/clapping_once.mp3';
import stompingContinuous from './sounds/stomping_continuous.mp3';
import stompingOnce from './sounds/stomping_once.mp3';

// Images
import clapping from './images/clapping.png';
import stomping from './images/stomping.jpeg';
import stop from './images/stop.png'

const soundInfo = {
  soundsContinuous: {
    clapping: {
      image: clapping,
      sound: clappingContinuous,
      alt: 'clapping'
    },
    stomping: {
      image: stomping,
      sound: stompingContinuous,
      alt: 'stomping'
    },
    stop: {
      image: stop,
      sound: '',
      alt: 'stop'
    }
  },
  soundsOnce: {
    clap: {
      image: clapping,
      sound: clappingOnce,
      alt: 'clap'
    },
    stomp: {
      image: stomping,
      sound: stompingOnce,
      alt: 'stomp'
    },
    stop: {
      image: stop,
      sound: '',
      alt: 'stop'
    }
  },
  rhythms: {
    quarterRest: {
      image: '',
      sound: '',
      alt: 'Quarter rest'
    },
    quarterNote: {
      image: '',
      sound: '',
      alt: 'Quarter note'
    },
    eighthNotes: {
      image: '',
      sound: '',
      alt: 'Eighth notes'
    },
    eighthRestAndEighthNote: {
      image: '',
      sound: '',
      alt: 'Eighth rest + eighth note'
    }
  },
  pitches: {
    C: {
      image: 'C',
      sound: '',
      alt: 'C'
    },
    D: {
      image: 'D',
      sound: '',
      alt: 'D'
    },
    E: {
      image: 'E',
      sound: '',
      alt: 'E'
    },
    F: {
      image: 'F',
      sound: '',
      alt: 'F'
    },
    G: {
      image: 'G',
      sound: '',
      alt: 'G'
    },
    A: {
      image: 'A',
      sound: '',
      alt: 'A'
    },
    B: {
      image: 'B',
      sound: '',
      alt: 'B'
    },
  },
};

export default soundInfo;