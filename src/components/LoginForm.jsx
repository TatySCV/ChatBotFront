// components/LoginForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import { useSession } from "../context/session-context";
import { loginUser } from "../services/authService";
import { BsRobot } from "react-icons/bs";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, setIsAuth } = useSession();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

      const { success, usuario, error: errorMessage } = await loginUser(username, password);

    if (success) {
      setIsAuth(true);
      login(user);
      navigate("/", {
        replace: true,
      });
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-96 mx-auto mt-12 p-6 bg-white rounded-lg flex flex-col items-center"
    >
      <BsRobot size={100} className="text-primary"/>
      <h2 className="text-2xl text-center mb-6 font-bold text-primary">
        Iniciar sesión
      </h2>
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
      <Button type="submit" className="w-full">
        Iniciar sesión
      </Button>
    </form>
  );
}

export default LoginForm;
