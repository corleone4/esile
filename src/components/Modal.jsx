export default function Modal({ children, image, close, opacity = 85, ...props}) {
  return (
    <>
      <div
        onClick={close}
        className={`fixed top-0 z-2 justify-center m-auto items-center opacity-${opacity} bg-black left-0 w-full h-full flex flex-col`}
      >
        <div>
          <img src={image} />
        </div>

        {children}
      </div>
    </>
  );
}
