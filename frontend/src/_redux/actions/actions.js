import { 
  SET_TOKEN,
  SET_USER,
  ERROR,

  wordToMusicActions,
  sequenceMakerActions,

  ADD_STUDENT,
  REMOVE_STUDENT,
  ADD_POINT,
  REMOVE_POINT,
} from "./actionTypes";
import ArtBuddyApi from "../../api";

// Actions for authentication
export const signup = (user) => {
  return async (dispatch) => {
    try {
      const token = await ArtBuddyApi.signup(user);
      dispatch(setToken(token));
      dispatch(setUser(user));
    } catch (e) {
      dispatch(gotError());
      dispatch()
    }
  }
}

export const login = (user) => {
  return async (dispatch) => {
    try {
      const token = await ArtBuddyApi.login(user);
      dispatch(setToken(token));
      dispatch(setUser(user));
    } catch (e) {
      dispatch(gotError());
      dispatch();
    }
  }
}

export const setToken = (token) => ({
  type: SET_TOKEN,
  token
});

export const setUser = (user) => ({
  type: SET_USER,
  user
})

export const gotError = () => ({
  type: ERROR
})

// Actions for Word to Music Decoder
export const createWord = (wordInput, wordId) => ({
  type: wordToMusicActions.CREATE_WORD,
  wordInput,
  wordId
});

export const addWord = () => ({
  type: wordToMusicActions.ADD_WORD
})

export const fillLetter = (letter, note) => ({
  type: wordToMusicActions.FILL_LETTER,
  letter,
  note
});

export const playMelody = (word) => ({
  type: wordToMusicActions.PLAY_MELODY,
  word
})

// Actions for Sequence Maker
export const changeCategory = (category) => ({
  type: sequenceMakerActions.CHANGE_CATEGORY,
  category
});

export const addToSequence = (sound) => ({
  type: sequenceMakerActions.ADD_TO_SEQUENCE,
  sound
});

export const removeFromSequence = (id) => ({
  type: sequenceMakerActions.REMOVE_FROM_SEQUENCE,
  id
});

export const playSequence = () => ({
  type: sequenceMakerActions.PLAY_SEQUENCE
})

export const resetSequence = () => ({
  type: sequenceMakerActions.RESET_SEQUENCE
})

export const setPitch = (id, pitch) => ({
  type: sequenceMakerActions.SET_PITCH,
  id,
  pitch
})

// Actions for Score Keeper
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