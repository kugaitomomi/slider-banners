import "./App.css";
import { useRef, useState, useEffect } from "react";
import Player from "./components/Player/Player";
import { songsdata } from "./components/Player/audios";
import Carousel from "./components/Carousel/Carousel";
import Banner01 from "./components/Carousel/Images/banner01.jpg";
import Banner02 from "./components/Carousel/Images/banner02.jpg";
import Banner03 from "./components/Carousel/Images/banner03.jpg";

function App() {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <div>
      <h5 style={{ textAlign: "center" }}>Carousel</h5>
      <Carousel infinite timer={4500} stopOnManual>
        {/* <img
          src="https://c4.wallpaperflare.com/wallpaper/290/826/480/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
          alt=""
        /> */}
        <img src={Banner01} alt="" />
        {/* <img
          src="https://c4.wallpaperflare.com/wallpaper/414/668/941/for-desktop-nature-scenes-beautiful-scenery-1920x1080-wallpaper-preview.jpg"
          alt=""
        /> */}
        <img src={Banner02} alt="" />
        <img src={Banner03} alt="" />
        {/* <img
          src="https://c4.wallpaperflare.com/wallpaper/849/138/463/nature-high-resolution-wallpaper-preview.jpg"
          alt=""
        /> */}
        {/* <img
          src="https://c4.wallpaperflare.com/wallpaper/611/154/459/widescreen-high-resolution-nature-hd-1920x1080-wallpaper-preview.jpg"
          alt=""
        />
        <img
          src="https://c4.wallpaperflare.com/wallpaper/388/898/571/hd-images-nature-pc-1920x1080-wallpaper-preview.jpg"
          alt=""
        />
        <img
          src="https://c4.wallpaperflare.com/wallpaper/314/778/449/1920x1080-px-los-angeles-anime-sailor-moon-hd-art-wallpaper-preview.jpg"
          alt=""
        />
        <img
          src="https://c4.wallpaperflare.com/wallpaper/636/592/951/beach-1920x1080-high-definition-wallpaper-preview.jpg"
          alt=""
        />
        <img
          src="https://c4.wallpaperflare.com/wallpaper/1019/745/82/1920x1080-px-bit-city-pixel-art-wallpaper-preview.jpg"
          alt=""
        />
        <img src="https://wallpapercave.com/wp/wp2419380.jpg" alt="" />
        <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt="" /> */}
      </Carousel>
      <div>
        <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
        <Player
          songs={songs}
          setSongs={setSongs}
          isplaying={isplaying}
          setisplaying={setisplaying}
          audioElem={audioElem}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
        />
      </div>
    </div>
  );
}

export default App;
