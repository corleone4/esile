import { useEffect, useState } from "react";
import imagem from "../assets/img/entre_o_10_e_o_15_sempre_ha_uma_virgula.jpg";
import qrcode from "../assets/img/frame.png";
import Modal from "../components/Modal";

export default function Books() {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  useEffect(() => {
    document.title = "Subtração";
  }, []);

  return (
    <>
      {isVisible ? (
        <Modal image={qrcode} close={handleVisibility} />
      ) : undefined}
      <div className="flex flex-col justify-center items-center m-auto bg-black h-screen">
        <img className="w-90 h-90" src={imagem} onClick={handleVisibility} />
        <h2 className="mt-4 text-stone-950">
          Páginas sussurram segredos que o tempo esqueceu, revelando mundos que
          a realidade jamais sonhou.
        </h2>
        <h2 className="mt-4 text-stone-950">
          Muitas vezes a verdade se encontra por baixo dos livros.
        </h2>

        <h2 className="mt-16 text-stone-950">
          Lembre-se: a quantidade de livros importa.
        </h2>
      </div>
    </>
  );
}
