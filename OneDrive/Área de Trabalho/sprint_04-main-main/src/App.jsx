import {  } from 'react'
import Nav from './componentes/Nav'
import Footer from './componentes/Footer'
import {register} from 'swiper/element/bundle'
import { Outlet } from 'react-router-dom'

register();
import 'swiper/css';
import 'swiper/css/scrollbar';

function App() {

  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
