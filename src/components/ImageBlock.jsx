export default function ImageBlock({link, image, ...props}) {
  return (
    <a href={link}>
      <img className="w-48 h-48" src={image} />
    </a>
  );
}
