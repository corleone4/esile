import { useEffect, useState } from "react";
import imagem from "../assets/img/sticks.jpg";
export default function Sticks() {
  const correctPassword = "QG==";
  // m na tabela ascii
  const [isCorrect, setIsCorrect] = useState(false);

  function alertAccess() {
    alert("Você conseguiu entrar!");
    setIsCorrect(true);
  }

  useEffect(() => {
    document.title = "Hidden ROT-3";
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
          <enigma
            dangerouslySetInnerHTML={{
              __html:
                "<!-- lembra do que você usou no enigma no anjo? use aqui também. -->",
            }}
          ></enigma>
          <img className="w-90 h-90" src={imagem} />
          <h2 className="mt-4 text-stone-950"> YOU SHOULDN'T HAVE DONE THAT. </h2>
          <h2 className="mt-4 text-center text-stone-700">
            4,5 ; 1,2 ; 4,2 ; 6;1, 3,3 ; 7,2 ; 1,10 ; 6,4
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
