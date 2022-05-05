import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeCategory, addToSequence } from "../_redux/actions/sequenceMakerActions";

import Sequence from "./sequence/Sequence";
import Dropdown from "../_components/dropdown/Dropdown";
import Icon from "../_components/icon/Icon";
import Options from "../_components/option/Options";

import categories from "./_utils/categories";
import soundInfo from "./_media/soundInfo";

const SequenceMaker = () => {
  const category = useSelector(state => state.sequenceMaker.category);
  const sequence = useSelector(state => state.sequenceMaker.sequence);
  const dispatch = useDispatch();

  const handleChangeCategory = e => {
    dispatch(changeCategory(e.target.id));
  }

  const handleAddToSequence = e => {
    if (sequence.some(block => !block)) {
      const sound = e.currentTarget.id;
      dispatch(addToSequence(sound));
    };
  }

  const options = soundInfo[category];

  return (
    <div className="SequenceMaker">
      <Dropdown
        labelText="SELECT A SOUND CATEGORY"
        onClick={handleChangeCategory}
        options={categories}
      />
      {category ? (
        <Options>
          {Object.keys(options).map(option => (
            <Icon
              icon={options[option].image}
              size='150px'
              text={options[option].alt}
              id={option}
              onClick={handleAddToSequence}
            />
          ))}
        </Options>
      ) : null}
      <Sequence />
    </div>
  );
};

export default SequenceMaker;