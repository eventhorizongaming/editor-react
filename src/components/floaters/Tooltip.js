import { useState, useRef } from 'react';
import { Floater } from './Floater';

function Tooltip({ title, children, position }) {
  const [pos, setPos] = useState([0, 0]);

  const floater = useRef();
  const content = useRef();

  function updateTooltipPosition() {
    const boundingBox = content.current.getBoundingClientRect();

    // Generate a list of horozontal positions relative to the content
    const leftX = boundingBox.left - floater.current.floaterBox.offsetWidth - 3;
    const centerX = (boundingBox.left + boundingBox.right - floater.current.floaterBox.offsetWidth) / 2;
    const rightX = boundingBox.right + 3;

    // Generate a list of vertical positions relative to the content
    const topY = boundingBox.top - floater.current.floaterBox.offsetHeight - 3;
    const centerY = (boundingBox.top + boundingBox.bottom - floater.current.floaterBox.offsetHeight) / 2;
    const bottomY = boundingBox.bottom + 3;

    // Get the X position for the tooltip
    const tooltipX =
      position === 'left' ? leftX
      : position === 'right' ? rightX
      : centerX

    // Get the Y position for the tooltip
    const tooltipY =
      position === 'top' ? topY
      : position === 'bottom' ? bottomY
      : centerY

    // Update the position of the tooltip
    setPos([tooltipX, tooltipY])
  }

  function showTooltip() {
    floater.current.setVisibility(true)
    updateTooltipPosition();
  }

  function hideTooltip() {
    floater.current.setVisibility(false)
  }

  return <>
    <Floater ref={floater} position={pos}>
      {title}
    </Floater>
    <div ref={content} onMouseOver={showTooltip} onMouseLeave={hideTooltip}>{children}</div>
  </>;
}

export { Tooltip };
