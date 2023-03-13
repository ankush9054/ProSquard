import React, { useState } from 'react'

const NavBar = () => {

  return (
    <div>
        <header>
            <div class="flex">
                <div class="logo">
                    <a href="#"><img src="https://onclickwebdesign.com/wp-content/uploads/game_warrior_logo.png" alt="Game Warrior Logo" /></a>
                </div>
                <nav>
                    <button id="nav-toggle" class="hamburger-menu">
                        <span class="strip"></span>
                        <span class="strip"></span>
                        <span class="strip"></span>
                    </button>
                    <ul id="nav-menu-container">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Forums</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <a href="#" id="login-register-button">Login / Register</a>
            </div>
        </header>
    </div>
  )
}


export default NavBar