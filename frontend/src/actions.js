import { 
  CREATE_WORD,
  FILL_LETTER,
  PLAY_MELODY,

  CHANGE_CATEGORY,
  ADD_TO_SEQUENCE,
  REMOVE_FROM_SEQUENCE,

  ADD_STUDENT,
  REMOVE_STUDENT,
  ADD_POINT,
  REMOVE_POINT
} from "./actionTypes";

// Actions for Music Colors
export const createWord = (wordInput) => ({
  type: CREATE_WORD,
  wordInput
});

export const fillLetter = (letter, note) => ({
  type: FILL_LETTER,
  letter,
  note
});

export const playMelody = (word) => ({
  type: PLAY_MELODY,
  word
})

// Actions for Sequence Maker
export const changeCategory = (category) => ({
  type: CHANGE_CATEGORY,
  category
});

export const addToSequence = (sound) => ({
  type: ADD_TO_SEQUENCE,
  sound
});

export const removeFromSequence = (id) => ({
  type: REMOVE_FROM_SEQUENCE,
  id
});

// Actions for Freeze Dance
export const addStudent = (name) => ({
  type: ADD_STUDENT,
  name
});

export const removeStudent = (name) => ({
  type: REMOVE_STUDENT,
  name
});

export const addPoint = (name) => ({
  type: ADD_POINT,
  name
})

export const removePoint = (name) => ({
  type: REMOVE_POINT,
  name
})