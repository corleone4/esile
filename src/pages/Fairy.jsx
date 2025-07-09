import { useEffect} from "react";
import imagem from "../assets/img/tatl.jpg";

export default function Fairy() {

  useEffect(() => {
    document.title = "Semelhante" ;
  }, []);

  return (
    <div className="flex flex-col justify-center items-center m-auto bg-black h-screen">
      <>
        <img className="w-90 h-90" src={imagem} />
        <h2 className="mt-4 text-stone-800">
          vetor[4] = ["T", "a", "t", "l"] <br/>
          Imprimir vetor[2] ??
        </h2>
        <h2 className="mt-4 text-stone-800">Lembre-se, Tatl não serve para este vetor, procure alguem para colocar em seu lugar.</h2>

        <h2 className="mt-4 text-stone-300">Resposta em binário.</h2>
      </> 
    </div>
  );
}
