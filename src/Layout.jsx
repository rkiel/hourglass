import React from 'react';

function Layout({children}) {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      {children}
    </div>
  );
}

export default Layout;
