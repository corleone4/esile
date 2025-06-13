import { useEffect, useState } from "react";
import imagem from "../assets/img/demon.png";
export default function Demon() {
  const correctPassword = "01010110";
  // m na tabela ascii
  const [isCorrect, setIsCorrect] = useState(false);

  function alertAccess() {
    alert("Você conseguiu entrar!");
    setIsCorrect(true);
  }

  useEffect(() => {
    document.title = "Olhe o código fonte.";
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
              __html: "<!-- ao achar a resposta (EM MAIUSCULO), codifique ela em base64. https://www.base64encode.org/ -->",
            }}
          ></enigma>
          <img className="w-90 h-90" src={imagem} />
          <h2 className="mt-4 text-stone-950">
            O demônio enlouqueceu nas redondezas deste labirinto, cuidado para
            que você não pereça ao lado da vasta imensidão do abismo.
          </h2>
          <h2 className="mt-4 text-center text-stone-700">
            Volante <br />
            Avião <br />
            Capitalismo <br />
            Poço Artesiano <br />
          </h2>
          <h2 className="mt-4 text-center text-stone-700">
            Coração <br />
            Torre <br />
            Direção de Mão francesa <br />
            Sul <br />
          </h2>

          <h2 className="mt-4 text-stone-200 text-center">
            Pense, todos estes elementos carregam uma característica, adivinhe qual é esta característica e a desenhe. <br /> Após encerrar a sua
            bela arte, coloque um em cima do outro e terá sua resposta. 
            Talvez a resposta saia um pouco "quadrada" demais.
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
