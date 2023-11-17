import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './rota/home.jsx';
<<<<<<< HEAD
import Medico from './rota/medico/medico.jsx';
import Paciente from './rota/paciente/paciente.jsx';
import PrivateRoute from './rota/privateRoute.jsx';
import PerfilMedico from './rota/medico/perfilMedico.jsx';
import PerfilPaciente from './rota/paciente/perfilPaciente.jsx'; 
import Consultas from './rota/paciente/consultas.jsx';
=======
import Medico from './rota/medico.jsx';
import Paciente from './rota/paciente.jsx';
import PrivateRoute from './rota/privateRoute.jsx';
import PerfilMedico from './rota/perfilMedico.jsx';
import PerfilPaciente from './rota/perfilPaciente.jsx'; 
>>>>>>> 7a940c3710346e1c6229cb01b052b7a1708f8d5c
import "./styles/main/main.module.css";

const isAuthenticated = () => {
  const userData = sessionStorage.getItem('userData');
  const senhaData = sessionStorage.getItem('senhaData');
  return userData && senhaData;
};

const isMedico = () => {
  const userData = sessionStorage.getItem('userData');
  return userData === 'medico';
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/paciente", element: <Paciente /> },
      { path: "/medico", element: <Medico /> },
      // Use PrivateRoute para as páginas de perfil
      { 
<<<<<<< HEAD
        path: "/paciente/perfil",
        element: <PrivateRoute element={<PerfilPaciente />} checkAuthentication={isAuthenticated} />
      },
      { 
        path: "/paciente/perfil/consultas", 
        element: <PrivateRoute element={<Consultas />} checkAuthentication={isAuthenticated} />
      },
      { 
=======
        path: "/paciente/perfil", 
        element: <PrivateRoute element={<PerfilPaciente />} checkAuthentication={isAuthenticated} />
      },
      { 
>>>>>>> 7a940c3710346e1c6229cb01b052b7a1708f8d5c
        path: "/medico/perfil", 
        element: <PrivateRoute element={<PerfilMedico />} checkAuthentication={isMedico} />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);