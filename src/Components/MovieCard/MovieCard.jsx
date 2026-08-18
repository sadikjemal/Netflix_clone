import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import styles from "./MovieCard.module.css";
function MovieCard({ movie }) {
  let geners = ["Adventure", "Action", "Thriller"];
  return (
    <div className={styles.cardwrapper}>
      {/* poster image */}
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt="poster image"
      />

      {/* hover card */}
      <div className={styles.hovercard}>
        {/* img */}
        <img
          className={styles.hoverImage}
          src={movie.poster_path}
          alt="hover image"
        />
        {/* badge */}
        <div className={styles.badge}>Recently added</div>
 
        {/* button row */}
        <div className={styles.buttonrow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>

        {/* metadata row */}
        <div className={styles.metadatarow}>
          <span className={styles.tag}> U?/A 16+c</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>HD</span>
        </div>

        {/* genres */}
        <div className={styles.genres}>
          {geners?.map((g, index) => (
            <span key={index}>
              {g}
              {index < geners.length - 1 && (
                <span className={styles.dot}> • </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
