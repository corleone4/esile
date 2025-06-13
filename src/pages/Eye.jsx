import imagem from "../assets/img/olho.gif";
import olho from "../assets/img/olho.jpg";
import bg from "../assets/img/backgroundalt.jpg";
import background from "../assets/img/background.jpg";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";
export default function Eye() {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibility() {
    setIsVisible((prevState) => !prevState);
  }
  useEffect(() => {
    document.title = "ASCII";
  }, []);

  return (
    <div>
      {isVisible ? (
        <Modal
          className="mt-4"
          opacity={100}
          image={bg}
          close={handleVisibility}
        >
          <img className="absolute" src={olho} />
          <h1 className="text-white">
            {" "}
            Parece que apenas um dentre vários passa despercebido pelo olho que
            tudo vê...{" "}
          </h1>
        </Modal>
      ) : undefined}
      <div
        onClick={handleVisibility}
        className="flex flex-col justify-center items-center m-auto bg-black h-screen"
      >
        <img className="absolute z-0 mt-4" src={background} />
        <img className="w-80 h-80 z-1" src={imagem} />
      </div>
    </div>
  );
}
