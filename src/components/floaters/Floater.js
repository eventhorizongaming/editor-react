import { useState, forwardRef, useImperativeHandle, useRef } from 'react'

const Floater = forwardRef(function ({ position, children, ...props }, ref) {
  const [isVisible, setVisibility] = useState(false);
  const floaterBox = useRef();

  useImperativeHandle(ref, () => {
    return {
      setVisibility,
      floaterBox: floaterBox.current
    };
  });

  return (
    <div
      className={"floater bg-gray-15 col-gray-80" + (isVisible === true ? ' visible' : '')}
      style={{ left: position[0], top: position[1] }}
      ref={floaterBox}
      {...props}
    >
      {children}
    </div>
  );
})

export { Floater };
