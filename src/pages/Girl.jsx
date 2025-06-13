import { useEffect, useRef } from "react";
import imagem from "../assets/img/girl.jpg";
import AudioPlayer from "../components/AudioPlayer";
import audio from "../assets/sounds/audio.mp3";

export default function Girl() {
  const audioRef = useRef(null);

  useEffect(() => {
    document.title = "Link?";
  }, []);

  const handleImageClick = () => {
    if (audioRef.current) {
      audioRef.current.playSound();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-auto bg-black h-screen">
      <>
        <AudioPlayer audio={audio} ref={audioRef} />
        <img
          className="w-90 h-90 cursor-pointer"
          src={imagem}
          onClick={handleImageClick}
        />
      </>
    </div>
  );
}
