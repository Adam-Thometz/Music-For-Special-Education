import React from 'react';
import Button from '../../../_components/button/Button';
import useReportCard from '../../../_hooks/useReportCard';

import './ReportCard.css';

import { INITIAL_REPORT_CARD } from '../../../_hooks/useReportCard';
import { emptyFirst, emptyMid, emptyLast, fullFirst, fullMid, fullLast } from './_icons/iconImports';

const ReportCard = ({ level }) => {
  const [savedReportCard, setSavedReportCard] = useReportCard(`instrument-id-level-${level}-report-card`);

  const scoreDisplay = Object.keys(savedReportCard).map(family => {
    const score = savedReportCard[family].length;
    const maxScore = 4;
    return (
      <div className='ReportCard-score-display'>
        <span>{family.toUpperCase()} FAMILY</span>
        <div className='ReportCard-visual-score'>
          <img src={score >= 1 ? fullFirst : emptyFirst} alt='' />
          <img src={score >= 2 ? fullMid : emptyMid} alt='' />
          <img src={score >= 3 ? fullMid : emptyMid} alt='' />
          <img src={score >= maxScore ? fullLast : emptyLast} alt='' />
        </div>
        <span className='ReportCard-text-score'>{score}/{maxScore} passed</span>
      </div>
    );
  });

  const handleClearReportCard = () => {
    setSavedReportCard(JSON.stringify(INITIAL_REPORT_CARD));
  }

  return (
    <div className='ReportCard'>
      {scoreDisplay}
      <Button colorId={2} onClick={handleClearReportCard}>CLEAR</Button>
    </div>
  );
}

export default ReportCard;