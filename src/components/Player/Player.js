import React from "react";
import useSound from "use-sound";
import Sound from "./Music/inspiring-cinematic-ambient-116199.mp3";
import classes from "./player.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faStop } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";

function Player() {
  const [play, { stop, pause }] = useSound(Sound);
  return (
    <div className={classes.AudioContainer}>
      <div className={classes.Audioarea}>
        <p>再生ボタンをクリックすると音楽が再生されます。</p>
        <button className={classes.AudioButton} onClick={() => play()}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button className={classes.AudioButton} onClick={() => pause()}>
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button className={classes.AudioButton} onClick={() => stop()}>
          <FontAwesomeIcon icon={faStop} />
        </button>
      </div>
    </div>
  );
}

export default Player;
