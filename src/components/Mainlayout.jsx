// src/components/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (

        <div className="pt-[7px] pb-[2px] ">
            <main className="">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;