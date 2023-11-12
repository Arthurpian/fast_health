import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './rotas/home.jsx';
import Error from './rotas/Error.jsx';
import Login from './rotas/Login.jsx';
import Aventura from './rotas/Aventura.jsx'
import Parques from './rotas/Parques.jsx'
import Cadastro from './rotas/Cadastro.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login />},
      { path: '/aventura', element: <Aventura />},
      { path: '/parque', element: <Parques />},
      { path: '/login/cadastro', element: <Cadastro />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);