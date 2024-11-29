// components/LoginForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import ErrorMessage from './ErrorMessage';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'user' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({ username }));
      navigate('/home');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-96 mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl text-center mb-6 font-bold text-purple-600">Iniciar sesión</h2>
      <Input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <ErrorMessage message={error} />}
      <Button type="submit">Iniciar sesión</Button>
    </form>
  );
}

export default LoginForm;