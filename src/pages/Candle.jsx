import { useEffect } from "react";
import imagem from "../assets/img/large.jpg";

export default function Candle() {
  useEffect(() => {
    document.title = "Classes do CSS/Tailwind.";
  }, []);
  return (
    <>
      <p
        style={{ color: "black" }}
        className="absolute select-none left-[84vw]"
      >
        {" "}
        63nEaCi2zZNzUUreF8Tirw (no key)
      </p>
      <div className="flex flex-col me-diga-uma-cor-mais-clara-que-o-preto justify-center items-center m-auto bg-black h-screen">
        <img className="w-90 h-90" src={imagem} />
        <h2 className="mt-4 text-stone-950">
          O fogo que se apaga se acende em um canto escuro
        </h2>
        <h2 className="mt-4 text-stone-950">
          Você não acha este site muito escuro?
        </h2>
        <p style={{ color: "black" }} className="absolute left-[75vw]">
          {" "}
          talvez o inspecionar seja o seu amigo.{" "}
        </p>
      </div>
    </>
  );
}
