import React, { useEffect, useState } from 'react';
import './Content.less';


function AppContent({ children }) {

    return (
        <div className="layout-a-content">
            {children}
        </div>
    )
}

export default AppContent
