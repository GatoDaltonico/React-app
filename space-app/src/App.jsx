import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import Astros from './components/astros/Astros.jsx';
import About from './components/about/About.jsx';
import Apod from './components/apod/Apod.jsx'; // Asegúrate de crear este componente
import './App.css'

function App() {
    const links = [
        {
            id: 1,
            text: 'Home',
            link: '/'
        },
        {
            id: 2,
            text: 'APOD',
            link: '/apod',
        },
        {
            id: 3,
            text: 'Astros',
            link: '/astros',
        },
        {
            id: 4,
            text: 'About',
            link: '/about',
        }
    ];

    return (
        <>
            <Navbar header='Space App' links={links} />
            <Routes>
                <Route element={<Hero />} path='/' />
                <Route element={<Astros />} path='/astros' />
                <Route element={<Apod />} path='/apod' />
                <Route element={<About />} path='/about' />
            </Routes>
        </>
    );
}

export default App;
