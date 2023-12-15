import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Announcement from "../components/announcement/Announcement";
import Newsletter from "../components/newsletter/Newsletter";

export default function MainLayout() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
}
