import { useEffect, useState } from "react";
import imagem from "../assets/img/demon.png";
import dica from "../assets/img/dica.png";
import Modal from "../components/Modal";
export default function Demon() {

  const [isVisible, setIsVisible] = useState(false);

  function handleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

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
          {isVisible ? (
            <Modal image={dica} close={handleVisibility} />
          ) : undefined}
          <enigma
            dangerouslySetInnerHTML={{
              __html: "<!-- ao achar a resposta (EM MAIUSCULO), codifique ela em base64. https://www.base64encode.org/ -->",
            }}
          ></enigma>
          <img className="w-90 h-90" src={imagem} onClick={handleVisibility} />
          <h2 className="mt-4 text-stone-900">
            O demônio enlouqueceu nas redondezas deste labirinto, cuidado para
            que você não pereça ao lado da vasta imensidão do abismo.
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-row justify-center gap-18">
              <h2 className="mt-2 text-center text-stone-700">
                Conjunto 1
              </h2>
              <h2 className="mt-2 text-center text-stone-700">
                Conjunto 2
              </h2>
            </div>
            <div className="flex flex-row gap-13">
              <h2 className="mt-2 text-center text-stone-700">
                Estrelas do EUA <br />
                Avião <br />
                Capitalismo <br />
                Poço Artesiano <br />
              </h2>

              <h2 className="mt-2 text-center text-stone-700">
                Coração <br />
                Foguete <br />
                Mão francesa <br />
                Cova <br />
              </h2>
            </div>

          </div>
          <h2 className="mt-4 text-stone-200 text-center">
            Pense, todos estes elementos tem ou seguem para uma direção (esquerda, direita, cima e baixo), adivinhe qual é a direção e a desenhe um traço numa folha. <br /> Após encerrar a sua
            arte, coloque um resultado em cima do outro e terá sua resposta.
          </h2>
        </>
      ) : (
        <div className="bg-black flex flex-col items-center justify-center">
          <label className="text-2xl text-white font-bold antialiased">
            Digite a resposta do anjo para continuar este enigma.
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
