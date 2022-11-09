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
    <div className={classes.Audioarea}>
      <p>BGM</p>
      <button onClick={() => play()}>
        <FontAwesomeIcon icon={faPlay} />
      </button>
      <button onClick={() => pause()}>
        <FontAwesomeIcon icon={faPause} />
      </button>
      <button onClick={() => stop()}>
        <FontAwesomeIcon icon={faStop} />
      </button>
    </div>
  );
}

export default Player;
