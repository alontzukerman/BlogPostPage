import React, { useRef, useState } from 'react'
import firebase from 'firebase';
import '../styling/SignUp.css';

function SignUp() {
    const db = firebase.firestore();

    const [err, setErr] = useState(null);

    const fullname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email.current.value,password.current.value)
            .then(()=>{
                setErr(null);
                db.collection('users')
                    .add({
                        fullName: fullname.current.value,
                        email: email.current.value,
                        password: password.current.value
                    })


            })
            .catch(error=>{
                setErr(error.message)
            })
    }
    return (
        <div className="SignUp">
            <div className="boxSignUp">

            <div className="signUpTitle">Sign Up</div>
            <input ref={fullname} type="text" placeholder="Full Name"></input>
            <input ref={email} type="email" placeholder="Email"></input>
            <input ref={password} type="password" placeholder="Password"></input>
            <div className="error">{err?`*${err}`:''}</div>
            <button className="signUpButton" onClick={()=>handleSignUp()}>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp
