import { useState, useEffect, useRef } from "react";
import Carousel from "../components/Carousel";
import ben from "../assets/img/ben.png";
import AudioPlayer from "../components/AudioPlayer";
import audio from "../assets/sounds/jumpscare.mp3";
import bgmusic from "../assets/sounds/soundtrack.mp3";
import palavras from "../phrases.js";

export default function Final() {
  const correctPassword = "interrogação";
  const [jumpscare, setJumpscare] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [music, setMusic] = useState(false);
  const [nextStep, setNextStep] = useState(false);

  const audioRef = useRef(null);
  const audioRef2 = useRef(null);

  const [frase, setFrase] = useState("");

  function gerarFraseAleatoria() {
    const embaralhadas = [...palavras].sort(() => 0.5 - Math.random());
    const tamanho = Math.floor(Math.random() * 4) + 3; // entre 3 e 6 palavras
    const selecionadas = embaralhadas.slice(0, tamanho);
    setFrase(selecionadas.join(" "));
  }

  useEffect(() => {
    if (nextStep && audioRef.current) {
      audioRef.current.playSound();
    }
  }, [nextStep]);

  useEffect(() => {
    if (music && audioRef2.current) {
      audioRef2.current.playSound();
    }
  }, [music]);

  useEffect(() => {
    if (isCorrect) {
      gerarFraseAleatoria();
    }
  }, [isCorrect]);

  function alertAccess() {
    alert("Você conseguiu entrar!");
    setIsCorrect(true);
    setJumpscare(true);
    setNextStep(true);
    setTimeout(() => {
      setJumpscare(false);
      setNextStep(false);
      setMusic(true);
    }, 4500);
  }

  function handleAccess(e) {
    if (e.target.value === correctPassword) {
      setTimeout(() => {
        alertAccess();
      }, 300);
    }
  }
  useEffect(() => {
    document.title = "Final.";
  }, []);

  return (
    <div className="flex flex-col justify-center items-center m-auto bg-black h-screen">
      {isCorrect ? (
        <>
          {jumpscare ? (
            <div
              className="fixed inset-0 flex justify-center items-center bg-black bg-cover bg-center z-50"
              style={{ backgroundImage: `url(${ben})` }}
            >
              <AudioPlayer audio={audio} ref={audioRef} />
            </div>
          ) : (
            <>
              <Carousel audio={bgmusic} ref={audioRef2} />

              <h2
                className="mt-4 text-center text-stone-950"
              >
                Junte as informações que você já obteve de cada uma das fases
                anteriores (letras) e a resposta deste enigma de agora, que não
                é uma letra. <br />
                Marque os perfis @lu_4.n e @kozmotisesile no Instagram com esta frase: 
                {frase} + a resposta completa do enigma.
              </h2>
            </>
          )}
        </>
      ) : (
        <div className="bg-black flex flex-col items-center justify-center">
          <label className="text-2xl text-white font-bold antialiased ">
            Digite a answer.
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
