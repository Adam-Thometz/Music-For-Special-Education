import React from 'react'

import WindowNavbar from '_components/window-nav/WindowNavbar'
import Help from '_components/help/Help'

const TimeKeeper = () => {
  return (
    <div className='TimeKeeper'>
      <WindowNavbar page="TIME KEEPER" cornerIcon={<Help />} />
      <h2>00:00:00</h2>
    </div>
  );
};

export default TimeKeeper;