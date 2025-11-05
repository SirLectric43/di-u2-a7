export default function FeedbackForm() {
  function handleClick() {
    const name = prompt('¿Cuál es tu nombre?');
    alert(`Hola, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Saludar
    </button>
  );
}
