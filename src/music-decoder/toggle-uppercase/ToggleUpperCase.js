import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleUpperCase } from '../../_redux/actions/wordToMusicActions';

import Toggle from '../../_components/toggle/Toggle';

const ToggleUpperCase = () => {
  const isUpperCase = useSelector(state => state.wordToMusic.isUpperCase);
  const dispatch = useDispatch();
  
  const handleToggle = () => {
    dispatch(toggleUpperCase());
  };

  return <Toggle label='UPPER CASE' currToggle={isUpperCase} toggleFn={handleToggle} />;
}

export default ToggleUpperCase;