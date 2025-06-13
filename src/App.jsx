import img9 from "./assets/img/large.jpg";
import img8 from "./assets/img/entre_o_10_e_o_15_sempre_ha_uma_virgula.jpg";
import img7 from "./assets/img/olho.jpg";
import img6 from "./assets/img/lake.jpg";
import img5 from "./assets/img/interrogacao.jpg";
import img4 from "./assets/img/galhos.png";
import img3 from "./assets/img/demon.png";
import img2 from "./assets/img/angel.png";
import img1 from "./assets/img/girl.jpg";
import ImageBlock from "./components/ImageBlock";

export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-auto bg-black h-screen">
        <div className="grid mt-1 grid-cols-3">
          <ImageBlock link={"girl"} image={img1}/>
          <ImageBlock link={"angel"} image={img2}/>
          <ImageBlock link={"demon"} image={img3}/>
          <ImageBlock link={"sticks"} image={img4}/>
          <ImageBlock link={"answer"} image={img5}/>
          <ImageBlock link={"lake"} image={img6}/>
          <ImageBlock link={"eye"} image={img7}/>
          <ImageBlock link={"books"} image={img8}/>
          <ImageBlock link={"candles"} image={img9}/>
        </div>
      </div>
    </>
  );
}
