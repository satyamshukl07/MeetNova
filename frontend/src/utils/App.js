import './App.css';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';

function App(){
    return (
        <>
        <Routes>
            {/* <Routes path= '/home' element = /> */}

            <Routes path ='/' element ={ <LandingPage/>}/>

        </Routes>
        
        </>
    )
}