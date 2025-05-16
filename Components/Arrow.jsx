import React from 'react';

const Arrow = () => {
  return (
    <>
      <style>
        {`
          .arrow-icon {
            transition: transform 0.2s ease-in-out;
          }
          .arrow-icon:hover {
            transform: translateX(4px);
          }
        `}
      </style>
      <svg
        className="inline-block w-4 h-4 ml-2 arrow-icon"
        fill="currentColor"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path d="M12.707 7.293l-8-8A1 1 0 0 0 3.293.293l.707.707L11.586 8 3.293 15.293a1 1 0 1 0 1.414 1.414l8-8A1 1 0 0 0 12.707 7.293z" />
      </svg>
    </>
  );
};

export default Arrow;
//             </h6>