import { useEffect } from "react";
export default function Corleone() {

  useEffect(() => {
    document.title = "eba!";
  }, []);

  return (
    <div className="flex flex-col justify-center items-center m-auto bg-black h-screen">
      <>
        <h2 className="mt-4 text-[20vw] font-sans text-stone-300"> O </h2>
        <h2 className="mt-4 text-center text-stone-700">
          sim, é literalmente a resposta (letra O). 
        </h2>
      </>
    </div>
  );
}
