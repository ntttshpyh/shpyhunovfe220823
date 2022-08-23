import { memo, useCallback, useEffect, useMemo, useState } from "react";
import shuffleArray from "./utils/shuffle";
import getRandomColor from "./utils/getRandomColor";
import DEFAULT_BACKGROUND_IMAGES from "./constants/imagesArray";

import "./App.css";

const App = () => {
  const [backgroundImages, setBackgroundImages] = useState<Array<String>>(
    DEFAULT_BACKGROUND_IMAGES
  );

  const backgrounds = useMemo(
    () => ({
      header: { background: `url(${backgroundImages[0]})` },
      footer: { background: `url(${backgroundImages[1]})` },
      leftPanel: { background: `url(${backgroundImages[2]})` },
      rightPanel: { background: `url(${backgroundImages[3]})` },
      main: { background: `url(${backgroundImages[4]})` },
      button: { background: getRandomColor() },
    }),
    [backgroundImages]
  );

  const handleChangeBackgrounds = useCallback(() => {
    setBackgroundImages((prev) => shuffleArray(prev));
  }, []);

  useEffect(() => {
    const interval = setInterval(handleChangeBackgrounds, 31000);

    return () => {
      clearInterval(interval);
    };
  }, [handleChangeBackgrounds]);

  return (
    <div className="app">
      <header className="header" style={backgrounds.header}></header>
      <main className="main-wrapper">
        <div className="panel left-panel" style={backgrounds.leftPanel}></div>
        <div className="main" style={backgrounds.main}>
          <button
            onClick={handleChangeBackgrounds}
            className="button"
            style={backgrounds.button}
          >
            Click
          </button>
        </div>
        <div className="panel right-panel" style={backgrounds.rightPanel}></div>
      </main>
      <footer className="footer" style={backgrounds.footer}></footer>
    </div>
  );
};

export default memo(App);
