import React from "react";
import NetflixBannerLog from "../../assets/image/logo.png";
import {Play, Info} from 'lucide-react'
import style from './Banner.module.css'
function Banner() {
  return (
    <div className={style.banner}>
      <div className={style.contents}>
        {/* Netflix image */}
        <img className={style.logoImg} src={NetflixBannerLog} alt="Netflix log" />

        {/* title */}
        <h1 className={style.tile}>Bridgerton</h1>

        {/* description */}
        <div className={style.description} >
          Shondaland's Emmy-winning series brings Julia Quinn's novels to life, as eight siblings seek their perfect match amid London's scandals and soirées.
        </div>

        {/* buttons */}
        <div className={style.buttonContainer}>
          <button className={style.button}>
            <Play size={30} />
            Play
          </button>
          <button className={style.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>
      {/* fading */}
      <div className={style.fadeBottom}>

      </div>
    </div>
  );
}

export default Banner;
