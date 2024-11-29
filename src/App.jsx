import { RouterProvider } from "react-router-dom";
import { defaultRouter } from "./router/default.router";

function App() {
  return <RouterProvider router={defaultRouter} />;
}

export default App;
