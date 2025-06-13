import imagem from "../assets/img/interrogacao.jpg";
import { useEffect } from "react";

export default function Answer() {

  useEffect(() => {
    document.title = "?";
  }, []);

  return (
    <div>
      <div
        className="flex flex-col justify-center items-center m-auto bg-black h-screen"
      >
        <img className="w-80 h-80 z-1" src={imagem} />
      </div>
    </div>
  );
}
