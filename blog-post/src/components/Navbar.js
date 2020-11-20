import React from 'react'
import '../styling/Navbar.css';
import firebase from 'firebase';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="navbarLink">Lorem Ipsum</div>
            <button style={{
                width: '100%' , 
                height: '100%' ,
                fontSize: '2vh',
                letterSpacing: '4px',
                backgroundColor: 'rgb(100,60,70)',
                border: 0,
                fontFamily: 'Roboto Mono',
                fontWeight: 'bold',
                color: '#fff'
                }} 
                onClick={()=>firebase.auth().signOut()}>Sign Out</button>
            <div className="navbarLink">Lorem Ipsum</div>
        </div>
    )
}

export default Navbar ;
