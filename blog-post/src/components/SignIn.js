import React, { useRef, useState } from 'react'
import firebase from 'firebase';
import '../styling/SignIn.css';
function SignIn() {

    const [err, setErr] = useState(null);
    const email = useRef(null);
    const password = useRef(null);


    const signInEmailPassword = () => {
        firebase.auth().signInWithEmailAndPassword(email.current.value,password.current.value)
            .then(()=>setErr(null))
            .catch(error=>setErr(error.message));
    }
    const forgotPassword = () => {
        const auth = firebase.auth();
        const emailAddress = email.current.value;
        
        auth.sendPasswordResetEmail(emailAddress)
            .then((result)=>{alert('check your email')})
            .catch(error=>setErr(error.message));
    }

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    } 
    const signInWithGithub = () => {
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result=>{
                console.log('result');
            })
            .catch(error=>console.error("Error ->",error))
    }
    return (
        <div className="SignIn">
            <div className="boxSignIn">
                <div className="signInTitle">Sign In</div>
                <input ref={email} type="email" placeholder="email"></input>
                <input ref={password} type="password" placeholder="password"></input>
                <div className="error">{err ? `*${err}` : ''}</div>
                <button className="signInButton" onClick={()=>signInEmailPassword()}>Sign In</button>
                <div className="buttonsTitle" >SIGN IN WITH</div>
                <div className="buttonsAuth">
                    <button className="signInButton" onClick={()=>signInWithGoogle()}>google</button>
                    <button className="signInButton" onClick={()=>signInWithGithub()}>github</button>
                </div>
                
                <button id='forgotButton' onClick={()=>forgotPassword()}>DID YOU FORGET YOUR PASSWORD AGAIN ?</button>
                <div style={{fontSize: '2vh',fontWeight: 'bolder',letterSpacing: '2px'}}>INSERT YOUR EMAIL -> CLICK HERE -> CHECK YOUR EMAIL</div>
            </div>
        </div>
    )
}

export default SignIn
