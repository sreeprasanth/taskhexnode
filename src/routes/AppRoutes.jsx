import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HexnodeSolutions from '../pages/Solutions/hexnode-kiosk'
import HomePage from '../pages/HomePage'
import MainLayout from '../components/Mainlayout';

const AppRoutes = () => {
  return (
    <Routes>
            <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

            {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/solutions/hexnode-kiosk/" element={<HexnodeSolutions />} />
            </Route>

    </Routes>
  );
};

export default AppRoutes;
