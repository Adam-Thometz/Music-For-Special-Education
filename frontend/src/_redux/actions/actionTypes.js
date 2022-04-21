// Action types for authentication
export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER = 'SET_USER';
export const ERROR = 'ERROR';

// Action types for Word to Music Decoder
export const wordToMusicActions = {
  CREATE_WORD: 'CREATE_WORD',
  ADD_WORD: 'ADD_WORD',
  FILL_LETTER: 'FILL_LETTER',
  PLAY_MELODY: 'PLAY_MELODY',
  CHANGE_SCALE: 'CHANGE_SCALE'
}

// Action types for Sequence Maker
export const sequenceMakerActions = {
  CHANGE_CATEGORY: 'CHANGE_CATEGORY',
  ADD_TO_SEQUENCE: 'ADD_TO_SEQUENCE',
  REMOVE_FROM_SEQUENCE: 'REMOVE_FROM_SEQUENCE',
  ADD_BLOCK: 'ADD_BLOCK',
  REMOVE_BLOCK: 'REMOVE_BLOCK',
  PLAY_SEQUENCE: 'PLAY_SEQUENCE',
  PLAY_ALL_SEQUENCE: 'PLAY_ALL_SEQUENCE',
  RESET_SEQUENCE: 'RESET_SEQUENCE',
  SET_PITCH: 'SET_PITCH'
}

// Action types for Score Keeper
export const scoreKeeperActions = {
  ADD_STUDENT: 'ADD_STUDENT',
  REMOVE_STUDENT: 'REMOVE_STUDENT',
  ADD_POINT: 'ADD_POINT',
  REMOVE_POINT: 'REMOVE_POINT'
}