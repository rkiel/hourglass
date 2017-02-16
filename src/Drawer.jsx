import React from 'react';

function Drawer({title}) {
  return (
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">{title}</span>
      <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
  );
}

export default Drawer;
