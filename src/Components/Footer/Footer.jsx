import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  const footerLinks = [
    [
      "Audio Description",
      "Investor Relations",
      "Legal Notices",
    ],
    [
      "Help Centre",
      "Jobs",
      "Cookie Preferences",
    ],
    [
      "Gift Cards",
      "Terms of Use",
      "Corporate Information",
    ],
    [
      "Media Centre",
      "Privacy",
      "Contact Us",
    ],
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Social Media Icons */}
        <div className={styles.socialLinks}>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>

          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Link Columns */}
        <div className={styles.linksContainer}>
          {footerLinks.map((column, columnIndex) => (
            <ul key={columnIndex} className={styles.linkColumn}>
              {column.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>
          © 1997-2026 Netflix, Inc.
        </p>
         <p className={styles.developer}>Developed By: Sadik J</p>

      </div>

    </footer>
  );
}

export default Footer;