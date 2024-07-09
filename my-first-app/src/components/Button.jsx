export default function Button({ firstText, secondText }) {
  return (
    <>
      <button className="white-btn">{firstText}</button>
      <button className="black-btn">{secondText}</button>
    </>
  );
}
