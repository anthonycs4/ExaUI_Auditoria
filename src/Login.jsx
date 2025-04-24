import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Usuarios ficticios
    const validUsers = {
      admin: '1234',
      auditor: 'password',
    };

    if (validUsers[user] && validUsers[user] === pass) {
      localStorage.setItem('auth', 'true');
      navigate('/dashboard');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="login">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Usuario" value={user} onChange={(e) => setUser(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={pass} onChange={(e) => setPass(e.target.value)} />
        <button type="submit">Entrar</button>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
