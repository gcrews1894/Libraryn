import React, { useState, useEffect } from 'react';

import SidebarButtons from '../components/sidebar/SidebarButtons';

function Sidebar() {
  return (
    <main className="sidebar__container">
      <SidebarButtons />
    </main>
  );
}

export default Sidebar;
