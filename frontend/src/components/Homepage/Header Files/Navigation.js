import React from 'react';

function Navigation() {
  const navItems = ['Home', 'About Us', 'Tools', 'Blogs'];

  return (
    <nav className="flex absolute top-2/4 left-2/4 z-0 gap-8 items-center self-start bg-white -translate-x-2/4 -translate-y-2/4 min-w-[240px]">
      {navItems.map((item, index) => (
        <a key={index} href={`#${item.toLowerCase().replace(' ', '-')}`} className="self-stretch my-auto">
          {item}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;