import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Player from "./components/Player/Player";
import Banner01 from "./components/Carousel/Images/banner01.jpg";
import Banner02 from "./components/Carousel/Images/banner02.jpg";
import Banner03 from "./components/Carousel/Images/banner03.jpg";

function App() {
  return (
    <div>
      <div>
        <Carousel infinite timer={4000} stopOnManual>
          <img
            src={Banner01}
            alt="オンラインセミナー開催中!! 550社 100,000本の実績"
          />
          <img src={Banner02} alt="PIPセールステック" />
          <img
            src={Banner03}
            alt="LIXIL社 現場担当者のインタビュー! 5000本制作した現場からDXを加速させる現場とは？"
          />
        </Carousel>
      </div>
      <div>
        <Player />
      </div>
    </div>
  );
}

export default App;
