import React from 'react';

function Content({children}) {
  return (
    <main className="mdl-layout__content">
      <div className="page-content">
        {children}
      </div>
    </main>
  );
}

export default Content;
