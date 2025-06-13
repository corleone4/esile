import { useEffect, useState } from "react";
import imagem from "../assets/img/angel.png";
import Modal from "../components/Modal";
// import Password from "../components/Password";
export default function Angel() {
  const correctPassword = "77";
  // m na tabela ascii
  const [isCorrect, setIsCorrect] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function alertAccess() {
    alert("Você conseguiu entrar!");
    setIsCorrect(true);
  }

  useEffect(() => {
    document.title = "Tatl";
  }, []);


  function handleAccess(e) {
    if (e.target.value === correctPassword) {
      setTimeout(() => {
        alertAccess();
      }, 300);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center m-auto bg-black h-screen">
      {isCorrect ? (
        <>
          {isVisible ? (
            <Modal image={imagem} close={handleVisibility} />
          ) : undefined}

          <img className="w-90 h-90" src={imagem} onClick={handleVisibility} />
          <h2 className="mt-4 text-stone-950">
            O anjo está olhando, relutante, para o topo do inalcançavel, em
            prantos, pois sabe que apenas você pode alterar a realidade da qual ela está presa.
          </h2>
          <h2 className="mt-4 text-stone-950">
           Mas, será que esta entidade realmente é chamada de anjo? Descubra suas origens.
          </h2>
        </>
      ) : (
        <div className="bg-black flex flex-col items-center justify-center">
          <label className="text-2xl text-white font-bold antialiased ">
            Digite uma senha para continuar este enigma.
          </label>
          <input
            className="ring-1 ring-gray-800 bg-stone-950 w-32 h-16 text-white uppercase font-bold text-center mt-16"
            type="text"
            onChange={handleAccess}
          />
        </div>
      )}
    </div>
  );
}
