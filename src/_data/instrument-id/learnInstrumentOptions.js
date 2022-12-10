import * as icons from '_media/instrument-id/_icons/iconImports';
import * as sounds from '_media/instrument-id/_sounds/soundImports';

const materials = {
  brass: {
    icon: icons.brass,
    name: 'BRASS'
  },
  silver: {
    icon: icons.silver,
    name: 'SILVER'
  },
  wood: {
    icon: icons.wood,
    name: 'WOOD'
  },
  leather: {
    icon: icons.leather,
    name: 'LEATHER'
  },
  voice: {
    icon: icons.voiceMainIcon,
    name: 'HUMAN'
  }
};

const learnInstrumentOptions = {
  brass: {
    main: icons.trumpetIcon,
    instruments: [
      {
        id: 'trumpet',  
        name: 'TRUMPET',
        icon: icons.trumpetIcon,
        madeFrom: [materials.brass],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.trumpet,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=ALPgvs5CT60'
      },
      {
        id: 'frenchHorn',
        name: 'FRENCH HORN',
        icon: icons.frenchHornIcon,
        madeFrom: [materials.brass],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.frenchHorn,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=qiUXnaGfnhg'
      },
      {
        id: 'trombone',
        name: 'TROMBONE',
        icon: icons.tromboneIcon,
        madeFrom: [materials.brass],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.trombone,
        isRhythm: false,
        width: '250px',
        videoUrl: 'https://www.youtube.com/watch?v=u5gj43Nnwzk'
      },
      {
        id: 'tuba',
        name: 'TUBA',
        icon: icons.tubaIcon,
        madeFrom: [materials.brass],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.tuba,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=qlXdCvKGdBE'
      },
    ]
  },
  electronic: {
    main: icons.synthIcon,
    instruments: [
      {
        id: 'electricGuitar',
        name: 'ELECTRIC GUITAR',
        icon: icons.electricGuitarIcon,
        madeFrom: [materials.wood, materials.silver],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick',
        sound: sounds.electricGuitar,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=QkzN1d6h8hE'
      },
      {
        id: 'electricBass',
        name: 'ELECTRIC BASS',
        icon: icons.electricBassIcon,
        madeFrom: [materials.wood, materials.silver],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick or fingers',
        sound: sounds.electricBass,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=I5PboLxAkIg'
      },
      {
        id: 'synthesizer',
        name: 'SYNTHESIZER',
        icon: icons.synthIcon,
        madeFrom: [materials.silver],
        howToPlay: 'adjusting knobs and/or pressing keys',
        sound: sounds.synthesizer,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=WBcUk0kGoBw'
      },
      {
        id: 'sampler',
        name: 'SAMPLER',
        icon: icons.samplerIcon,
        madeFrom: [materials.silver],
        howToPlay: 'pressing buttons on the instrument',
        sound: sounds.sampler,
        isRhythm: true,
        videoUrl: 'https://www.youtube.com/watch?v=0K2aynMMBpo'
      },
      {
        id: 'theremin',
        name: 'THEREMIN',
        icon: icons.thereminIcon,
        madeFrom: [materials.silver],
        howToPlay: 'waving your hands back and forth from the antenna',
        sound: sounds.theremin,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=nE_sAnSkW-Q'
      },
    ]
  },
  percussion: {
    main: icons.drumSetIcon,
    instruments: [
      {
        id: 'djembe',
        name: 'DJEMBE',
        icon: icons.djembeIcon,
        madeFrom: [materials.wood, materials.leather],
        howToPlay: 'hitting the animal skin',
        sound: sounds.djembe,
        isRhythm: true,
        videoUrl: 'https://www.youtube.com/watch?v=FMs3LTtgwY8'
      },
      {
        id: 'drumSet',
        name: 'DRUM SET',
        icon: icons.drumSetIcon,
        madeFrom: [materials.wood, materials.silver],
        howToPlay: 'using drum sticks to hit different parts of the set',
        sound: sounds.drumSet,
        isRhythm: true,
        videoUrl: 'https://www.youtube.com/watch?v=fu8Iq1q73gY'
      },
      {
        id: 'tambourine',
        name: 'TAMBOURINE',
        icon: icons.tambourineIcon,
        madeFrom: [materials.wood, materials.silver],
        howToPlay: 'shaking it!',
        sound: sounds.tambourine,
        isRhythm: true,
        videoUrl: 'https://www.youtube.com/watch?v=nz3vhCspy_I'
      },
      {
        id: 'xylophone',
        name: 'XYLOPHONE',
        icon: icons.xylophoneIcon,
        madeFrom: [materials.wood],
        howToPlay: 'hitting different blocks with a mallet',
        sound: sounds.xylophone,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=nd9xha3vk58'
      },
      {
        id: 'triangle',
        name: 'TRIANGLE',
        icon: icons.triangleIcon,
        madeFrom: [materials.silver],
        howToPlay: 'hitting it with a metal stick',
        sound: sounds.triangle,
        isRhythm: true,
        videoUrl: 'https://www.youtube.com/watch?v=chg1ILZwMBI'
      },
      {
        id: 'conga',
        name: 'CONGA',
        icon: icons.congaIcon,
        madeFrom: [materials.wood, materials.leather],
        howToPlay: 'hitting the animal skin',
        sound: sounds.conga,
        isRhythm: true,
        videoUrl: 'https://www.youtube.com/watch?v=Dy9-P4MauuM'
      },
    ]
  },
  strings: {
    main: icons.harpIcon,
    instruments: [
      {
        id: 'acousticGuitar',
        name: 'ACOUSTIC GUITAR',
        icon: icons.acousticGuitarIcon,
        madeFrom: [materials.wood],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick',
        sound: sounds.acousticGuitar,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=VOMipc60JvA'
      },
      {
        id: 'banjo',
        name: 'BANJO',
        icon: icons.banjoIcon,
        madeFrom: [materials.wood, materials.leather],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick',
        sound: sounds.banjo,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=fnMhUPewk6c'
      },
      {
        id: 'harp',
        name: 'HARP',
        icon: icons.harpIcon,
        madeFrom: [materials.wood],
        howToPlay: 'plucking the strings',
        sound: sounds.harp,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=WEK4hw7hMgI'
      },
      {
        id: 'piano',
        name: 'PIANO',
        icon: icons.pianoIcon,
        madeFrom: [materials.wood],
        howToPlay: 'pressing the keys, which activate hammers that bang on strings',
        sound: sounds.piano,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=HCDygl0pttM'
      },
      {
        id: 'violin',
        name: 'VIOLIN',
        icon: icons.violinIcon,
        madeFrom: [materials.wood],
        howToPlay: 'putting your fingers on the fretboard and bowing the strings using a bow',
        sound: sounds.violin,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=0jXXWBt5URw'
      },
    ]
  },
  woodwind: {
    main: icons.harpIcon,
    instruments: [
      {
        id: 'clarinet',
        name: 'CLARINET',
        icon: icons.clarinetIcon,
        madeFrom: [materials.wood],
        howToPlay: '',
        sound: sounds.clarinet,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=0srzSEPeHrk'
      },
      {
        id: 'bassoon',
        name: 'BASSOON',
        icon: icons.bassoonIcon,
        madeFrom: [materials.wood],
        howToPlay: '',
        sound: sounds.bassoon,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=XghEYA-edZA'
      },
      {
        id: 'flute',
        name: 'FLUTE',
        icon: icons.fluteIcon,
        madeFrom: [materials.wood, materials.silver],
        howToPlay: '',
        sound: sounds.flute,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=QAiwlq3aP2U'
      },
      {
        id: 'saxophone',
        name: 'SAXOPHONE',
        icon: icons.saxophoneIcon,
        madeFrom: [materials.brass],
        howToPlay: '',
        sound: sounds.saxophone,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=XBWyE1v8--I'
      },
      {
        id: 'panFlute',
        name: 'PAN FLUTE',
        icon: icons.panFluteIcon,
        madeFrom: [materials.wood],
        howToPlay: '',
        sound: sounds.panFlute,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=nrTp7u6KD3U'
      },
    ]
  },
  voice: {
    main: icons.voiceMainIcon,
    instruments: [
      {
        id: 'soprano',
        name: 'SOPRANO',
        icon: icons.sopranoIcon,
        madeFrom: [materials.voice],
        howToPlay: 'singing really high!',
        sound: sounds.soprano,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=3ZSyAcIS4fo'
      },
      {
        id: 'mezzoSoprano',
        name: 'MEZZO SOPRANO',
        icon: icons.mezzoSopranoIcon,
        madeFrom: [materials.voice],
        howToPlay: 'singing high!',
        sound: sounds.mezzoSoprano,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=6m1T1BsB9rg'
      },
      {
        id: 'alto',
        name: 'ALTO',
        icon: icons.altoIcon,
        madeFrom: [materials.voice],
        howToPlay: 'siinging a little high!',
        sound: sounds.alto,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=wrCxfWVuDXU'
      },
      {
        id: 'tenor',
        name: 'TENOR',
        icon: icons.tenorIcon,
        madeFrom: [materials.voice],
        howToPlay: 'singing a little low!',
        sound: sounds.tenor,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=cWc7vYjgnTs'
      },
      {
        id: 'baritone',
        name: 'BARITONE',
        icon: icons.baritoneIcon,
        madeFrom: [materials.voice],
        howToPlay: 'singing low!',
        sound: sounds.baritone,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=d-m1JtnZbEQ'
      },
      {
        id: 'bass',
        name: 'BASS',
        icon: icons.bassIcon,
        madeFrom: [materials.voice],
        howToPlay: 'singing really low!',
        sound: sounds.bass,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=wJv0jMLLRcw'
      }
    ]
  }
};

export default learnInstrumentOptions;