import { forwardRef, useImperativeHandle, useRef, useEffect } from "react";

const AudioPlayer = forwardRef(({audio, ...props}, ref) => {
  const audioRef = useRef(null);

  useImperativeHandle(ref, () => ({
    playSound: () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        console.log("audio tocando");
        audioRef.current.play().catch((err) => {
          console.warn("Falha ao tocar áudio:", err);
        });
      }
    },
  }));

  return <audio ref={audioRef} {...props} src={audio} hidden preload="auto" />;
});

export default AudioPlayer;
