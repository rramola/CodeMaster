import React from 'react';
import NavBar from './Navbar';

export default function Header({handleNavbarClick, handleGoBack}){
    return(
        <div>
            <header className="header">
                <NavBar handleNavbarClick={handleNavbarClick}
                handleGoBack={handleGoBack}/>
            </header>
        </div>
    );
}