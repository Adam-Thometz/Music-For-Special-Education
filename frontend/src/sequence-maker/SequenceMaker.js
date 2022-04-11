import React from "react";

import { useSelector } from "react-redux";

import './SequenceMaker.css'

import Categories from "./categories/Categories";
import Options from "./options/Options";
import Sequence from "./sequence/Sequence";

const SequenceMaker = () => {
  const category = useSelector(state => state.sequenceMaker.category);
  return (
    <div className="SequenceMaker">
      <Categories />
      {category ? <Options /> : null}
      {category ? <Sequence /> : null}
    </div>
  );
};

export default SequenceMaker;