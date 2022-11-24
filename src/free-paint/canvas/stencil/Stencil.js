import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';

import { useSelector, useDispatch } from 'react-redux';
import { setStencil } from '_redux/free-paint/freePaintActions';

import './Stencil.css';

import close from '_media/general-icons/close.png';
import resizeIcon from '_media/free-paint/resize.png';
import getNewSize from '_helpers/free-paint/getNewSize';

const Stencil = () => {
  const { stencil, isEditingStencil } = useSelector(state => state.freePaint);
  const dispatch = useDispatch();
  const stencilRef = useRef();

  const [resizeInfo, setResizeInfo] = useState({ active: false, x: '', y: '' });
  const [size, setSize] = useState({ width: '', height: '', defaultWidth: '', defaultHeight: '' });

  useEffect(() => {
    const width = stencilRef.current.clientWidth;
    const height = stencilRef.current.clientHeight;
    const defaultWidth = stencilRef.current.clientWidth;
    const defaultHeight = stencilRef.current.clientHeight;
    setSize({ width, height, defaultWidth, defaultHeight });
  }, [stencilRef]);
  
  const handleClearDisplay = () => dispatch(setStencil(null));

  const handleResize = e => {
    if (!resizeInfo.active) return;
    const { x, y } = resizeInfo;
    const { clientX, clientY } = e;
    const { height, width } = getNewSize({ x, y, clientX, clientY, currSize: size })
    setResizeInfo({ ...resizeInfo, x: clientX, y: clientY });
    setSize({ ...size, height, width });
  };

  const beginResize = e => setResizeInfo({ active: true, x: e.clientX, y: e.clientY });

  const endResize = () => setResizeInfo({ ...resizeInfo, active: false });

  const style = {
    width: `${size.width}px`,
    height: `${size.height}px`,
    zIndex: isEditingStencil ? 5 : 3,
    '--stencilX': `${size.width / size.defaultWidth}`,
    '--stencilY': `${size.height / size.defaultHeight}`,
  };

  return (
    <Draggable bounds='parent' cancel='.Stencil-resize'>
      <div className='Stencil' style={style} ref={stencilRef}>
        <img
          className='Stencil-clear'
          src={close}
          alt=''
          aria-label='Clear the stencil'
          onClick={handleClearDisplay}
        />
        {stencil.startsWith('data:image')
          ? <img className='Stencil-shape' src={stencil} alt='' />
          : <span className='Stencil-text'>{stencil}</span>
        }
        <img
          className='Stencil-resize'
          src={resizeIcon}
          draggable={false}
          alt=''
          aria-label='Resize the stencil'
          onMouseDown={beginResize}
          onMouseUp={endResize}
          onMouseMove={handleResize}
        />
      </div>
    </Draggable>
  );
};

export default Stencil;