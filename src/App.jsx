import { RouterProvider } from "react-router-dom";
import { defaultRouter } from "./router/default.router";
import { useSession } from "./context/session-context";
import { chatRouter } from "./router/chat.router";
import { useCallback, useEffect } from "react";

function App() {
  const { isAuth, login, isLoading, setIsLoading, setIsAuth, logout } =
    useSession();

  const getSession = () => {
    try {
      const user = localStorage.getItem("user");
      const parsedUser = JSON.parse(user);

      if (parsedUser) {
        setIsAuth(true);
        login(parsedUser);
      } else {
        setIsAuth(false);
      }
    } catch (e) {
      console.log(e);
      setIsAuth(false);
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSession();
  }, []);

  if (isLoading) return <div>Cargando...</div>;

  if (!isAuth) return <RouterProvider router={defaultRouter} />;

  return <RouterProvider router={chatRouter} />;
}

export default App;
