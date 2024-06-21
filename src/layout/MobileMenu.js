import { useState } from "react";
import { Blog, Contact, Home, PagesMobile, Portfolio, Shop } from "./Menus";
import Link from "next/link";
const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation clearfix d-block d-lg-none mobile-header">
      <li className="dropdown">
      <Link href="/" >Home</Link>
      </li>

      <li className="dropdown">
      <Link href="about" >About</Link>
      </li>

      <li className="dropdown">
    <Link href="/shop-left-sidebar" >shop </Link>
    </li>
    <li className="dropdown">
      <Link href="/blog-grid" >Blog</Link>
    </li>
    <Contact />



      
    </ul>
  );
};
export default MobileMenu;
