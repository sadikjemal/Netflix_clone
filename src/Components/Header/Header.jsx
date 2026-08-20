import React, { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import Styles from "./Header.module.css";
function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  //for blur effect on scroll
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <header className={`${Styles.header} ${isScrolled ? Styles.scrolled : ""}`}>
      <div className={Styles.container}>
        {/* logo */}
        <img className={Styles.logo} src={logo} alt="Logo" />

        {/* navigation links */}
        <nav className={Styles.nav}>
          <Link className={Styles.navLink} to="">
            TV Shows
          </Link>
          <Link className={Styles.navLink} to="">
            Movies
          </Link>
          <Link className={Styles.navLink} to="">
            My List
          </Link>
          <Link className={Styles.navLink} to="">
            New & Popular
          </Link>
          <Link className={Styles.navLink} to="">
            Home
          </Link>
          <Link className={Styles.navLink} to="">
            Browse by Language
          </Link>
        </nav>

        {/* right side section */}
        <div className={Styles.rightSection}>
          {/* search */}
          <div className={Styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={Styles.searchButton}
            >
              <Search size={20} />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={Styles.searchInput}
              />
            )}
          </div>

          {/* Notification */}
          <button className={Styles.iconButton}>
            <Bell />
            <span className={Styles.notificationBadge}>4</span>
          </button>

         {/* Profile */}
<div className={Styles.profileContainer}>
  <button
    onClick={() => setIsProfileOpen(!isProfileOpen)}
    className={Styles.profileButton}
  >
    {/* user icon */}
    <div className={Styles.profileAvatar}>
      <User size={20} />
    </div>
    <ChevronDown size={20} />
    {/* dropdown icon */}
  </button>

  {isProfileOpen && (
    <div className={Styles.profileMenu}>
      <Link className={Styles.profileMenuItem} to="">Account</Link>
      <Link className={Styles.profileMenuItem} to="">Help Center</Link>
      <hr className={Styles.profileMenuDivider} />
      <button className={Styles.profileMenuItem}>Sign out</button>
    </div>
  )}
</div>
          
           
        </div>
      </div>
    </header>
  );
}

export default Header;
