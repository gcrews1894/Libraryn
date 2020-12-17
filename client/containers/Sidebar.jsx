import React, { useState, useEffect } from 'react';

import SidebarButtons from '../components/sidebar/SidebarButtons';

function Sidebar({setUserState}) {
  return (
    <main className="sidebar__container">
      <SidebarButtons setUserState={setUserState} />
    </main>
  );
}

export default Sidebar;
