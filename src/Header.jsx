import React from 'react';

import A from './A.jsx';

function Header({title}) {
  return (
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">

        <span className="mdl-layout-title">{title}</span>

        <div className="mdl-layout-spacer"></div>

        <nav className="mdl-navigation mdl-layout--large-screen-only">
          <A label="One"/>
          <A label="Two"/>
          <A label="Three"/>
          <A label="Four"/>
        </nav>
      </div>
    </header>
  );
}

export default Header;
