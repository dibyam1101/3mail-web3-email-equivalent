import React from "react";
import styles from "../style";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const Navigation = () => (
  <div className="bg-primary w-full overflow-auto h-[100vh]">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Outlet />
  </div>
);

export default Navigation;
