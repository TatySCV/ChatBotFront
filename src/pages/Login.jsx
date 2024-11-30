// pages/Login.jsx
import LoginForm from "../components/LoginForm";


function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-white p-8 rounded-lg">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
