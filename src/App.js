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
          <img src={Banner01} alt="" />
          <img src={Banner02} alt="" />
          <img src={Banner03} alt="" />
        </Carousel>
      </div>
      <div>
        <Player />
      </div>
    </div>
  );
}

export default App;
