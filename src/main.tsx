import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EsqueciSenha from "./pages/esqueci-senha/EsqueciSenha.tsx";
import AulasVideo from "./pages/aulas-video/AulasVideo.tsx";

const router = createBrowserRouter([
  {
    path: "/esqueci",
    element: <EsqueciSenha />,
  },
  {
    path: "/aulas",
    element: <AulasVideo />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
