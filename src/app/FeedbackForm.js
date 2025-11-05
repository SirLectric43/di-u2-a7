import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  if (isSent) {
    return <h1>¡Gracias!</h1>;
  }

  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert(`Enviando: "${message}"`);
      setIsSent(true);
    }}>
      <textarea
        placeholder="Mensaje"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}