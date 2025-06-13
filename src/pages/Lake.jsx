import { useEffect, useRef, useState } from "react";
import imagem from "../assets/img/lake.jpg";
import barcode from "../assets/img/qrcode.png";
import AudioPlayer from "../components/AudioPlayer";
import audio from "../assets/sounds/tchaikovski.mp3";

export default function Lake() {
  const correctPassword = "corleone";
  const nextStepPassword = "Tchaikovski";
  // m na tabela ascii
  const [isCorrect, setIsCorrect] = useState(false);
  const [nextStep, setNextStep] = useState(false);

  const audioRef = useRef(null);
  
  
  useEffect(() => {
  if (nextStep && audioRef.current) {
    audioRef.current.playSound();
  }
}, [nextStep]);



  function alertAccess() {
    alert("Você conseguiu entrar!");
    setIsCorrect(true);
  }

  function alertNextStep() {
    alert("Próxima parte do enigma.");
    setNextStep(true);
  }

  useEffect(() => {
    document.title = "Pitágoras + Excel";
  }, []);

  function handleAccess(e) {
    if (e.target.value === correctPassword) {
      setTimeout(() => {
        alertAccess();
      }, 300);
    }
  }

  function handleNextStage(e) {
    if (e.target.value === nextStepPassword) {
      setTimeout(() => {
        alertNextStep();
      }, 300);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center m-auto bg-black h-screen">
      {isCorrect ? (
        <>
          {nextStep ? (
            <>
              
              <img className="w-150 h-90" src={barcode} />
              <AudioPlayer audio={audio} ref={audioRef} />  
              <h2 className="mt-4 text-center text-stone-950">
                Olhe para baixo e encontre a sua resposta.
                Abaixo, há dois irmãos, e apenas o que consoa melhor é o correto.
              </h2>
            </>
          ) : (
            <>
              <enigma
                dangerouslySetInnerHTML={{
                  __html:
                    "<!-- lembra do que você usou no enigma no anjo? use aqui também. -->",
                }}
              ></enigma>
              <img className="w-90 h-90" src={imagem} />
              <h2 className="mt-4 text-center text-stone-700">
                {" "}
                1515.3125.1657
              </h2>

              <div className="bg-black flex flex-col items-center justify-center absolute left-[83vw] top-[70vh]">
                <label className="text-xl text-white antialiased ">
                  ???
                  <br />
                </label>
                <input
                  className="ring-1 ring-gray-800 bg-stone-950 w-32 h-16 text-white uppercase font-bold text-center mt-16"
                  type="text"
                  onChange={handleNextStage}
                />
              </div>
            </>
          )}
        </>
      ) : (
        <div className="bg-black flex flex-col items-center justify-center">
          <label className="text-2xl text-white font-bold antialiased ">
            Qual era o nome que você digitou no enigma do galho? (minusculo)
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
