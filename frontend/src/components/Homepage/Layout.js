import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col pb-96 bg-white max-md:pb-24">
      <main>{children}</main>
    </div>
  );
};

export default Layout;