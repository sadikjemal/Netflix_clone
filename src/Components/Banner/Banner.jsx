import React from "react";
import logo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import style from "./Banner.module.css";
import {} from "../../Utility/MovieInstance";
import { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import {movieInstance} from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrls";
const BANNER_BASE = "https://image.tmdb.org/t/p/original/";
function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    async function fetchBannerImage() {
      const request = await movieInstance.get(requests.fetchNetflixOriginals);
      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
    }
    fetchBannerImage();
  }, []);


  function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

  return (
    <div
      className={style.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BANNER_BASE}${bannerImage.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={style.contents}>
        {/* Netflix image */}
        <img className={style.logoImg} src={logo} alt="Netflix logo" />

        {/* title */}
        <h1 className={style.tile}>{bannerImage?.original_name}</h1>

        {/* description */}
        <div className={style.description}>
          {truncate(bannerImage?.overview, 120)}
        </div>

        {/* buttons */}
        <div className={style.buttonContainer}>
          <button className={style.button}>
            <Play size={30} />
            Play
          </button>
          <button className={style.button}>
            <Info size={30} />
          </button>
        </div>
      </div>
      {/* fading */}
      <div className={style.fadeBottom}></div>
    </div>
  );
}

export default Banner;
