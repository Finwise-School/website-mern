import React from 'react';

function Logo() {
  return (
    <img
      loading="lazy"
      src="./logo.png"
      className="object-contain z-0 shrink-0 self-stretch my-auto aspect-[2.11] w-[116px]"
      alt="Finwise School Logo"
    />
  );
}

export default Logo;