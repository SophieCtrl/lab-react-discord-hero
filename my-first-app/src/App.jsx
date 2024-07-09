import TwoColumnsContainer from "./components/TwoColumnsContainer";
import Paragraph from "./components/Paragraph";
import Button from "./components/Button";
import Image from "./components/Image";
import menuIcon from "./assets/menu-icon.png";
import discordImg from "./assets/discord-background.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TwoColumnsContainer
        firstInput={
          <Image height="20px" imgSrc="src/assets/discord-logo-white.png" />
        }
        secondInput={<Image height="20px" imgSrc={menuIcon} />}
      />
      <Paragraph />
      <TwoColumnsContainer
        firstInput={
          <Button
            firstText="Download for Mac"
            secondText="Open Discord in your Browser"
          />
        }
        secondInput={<Image height="400px" imgSrc={discordImg} />}
      />
    </div>
  );
}

export default App;
