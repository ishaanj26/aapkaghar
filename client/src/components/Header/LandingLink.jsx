import React from 'react';
import Button from '../Buttons/Button';
import { useNavigate } from 'react-router';

export default function LandingLink({ to, isActive, children, onClick, endIcon }) {
  const navigate = useNavigate()
  return (
    <p className='hover:cursor-pointer font-[500] text-sm  relative inline-flex group'
      onClick={() => {
        if (onClick) {
          onClick(); // Call the onClick function
        }
        navigate(`${to}`);
      }}>
      {children}{endIcon}

      <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-500 group-hover:w-full'></span>
    </p>
  );
};
