import './Avatar.css'

export default function Avatar() {

  const imgSrc = 'https://i.imgur.com/7vQD0fPs.jpg';

  return (
    <img
      src={imgSrc}
      alt="Gregorio Y. zara"
      className="avatar"
    />
  );
}