import React from 'react'
import "../App.css"

export default function LandingPage() {   // ✅ Uppercase L
    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Apna Video Call</h2>
                </div>
                <div className='navlist'>
                    <p>Join as a guest</p>
                    <p>Register</p>
                    <div role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                <h1><span style={{color: "#FF9839"}}>Connect</span> with your love ones </h1>
                <p>cover a distance by NovaMeet</p>
                <div role = 'button'>
                    <link to={"/home"}>Get started</link>
                </div>
                </div>
                <div>

                    <img src ="/mobile.png" alt = ""/>
                </div>
            </div>
        </div>
    )
}