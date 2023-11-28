import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../../lists/users';
import style from './login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/cliente');
      }
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleKeyPress = (e) => {
    // Si la tecla presionada es "Enter", llama a handleLogin
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  // Agrega o quita la clase login-body al body según la página actual
  document.body.classList.add('login-body');
  // Limpia la clase cuando el componente se desmonta
  return (
    <div className={style.principalContainer}>
      <div className={style.loginContainer}>
        <h2 className={style.loginTitle}>Login</h2>
        <label className={style.loginLabel}>
          Username:
          <input
            className={style.loginInput}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </label>
        <br />
        <label className={style.loginLabel}>
          Password:
          <input
            className={style.loginInput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </label>
        <br />
        <button className={style.loginButton} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
