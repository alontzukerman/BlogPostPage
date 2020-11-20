import React, { lazy, Suspense, useState } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Post = lazy(() => import('./components/Post'));

firebase.initializeApp({
  apiKey: "AIzaSyBXpeqcXRCRFR7M_rgclhkpk4LPPAZAgXM",
  authDomain: "blogging-966a7.firebaseapp.com",
  databaseURL: "https://blogging-966a7.firebaseio.com",
  projectId: "blogging-966a7",
  storageBucket: "blogging-966a7.appspot.com",
  messagingSenderId: "735149489715",
  appId: "1:735149489715:web:9984710a6b72edc38b6d46",
  measurementId: "G-1XGGSZLXE0"
});

const auth = firebase.auth() ;

const storage = firebase.storage();

function App() {

  const [bool,setBool] = useState(true);
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {
        user 
        ? 
        <>
          <Navbar />
          <Suspense fallback={<h1>Loading...</h1>}>
            <ErrorBoundary>
              <Post firebase={firebase} storage={storage} />
            </ErrorBoundary>
          </Suspense>
        </>
        : 
        <div id="forms">
          <div id="toggle">
            <button className="toggleButton" onClick={()=>setBool(true)}
              style={{
                backgroundColor: bool ? '#555' : 'rgb(235, 182, 182)',
                color: bool ? '#fff' : '#000'
              }}>SIGN IN</button>
            <button className="toggleButton" onClick={()=>setBool(false)}
              style={{
                backgroundColor: !bool ? '#555' : 'rgb(235, 182, 182)',
                color: !bool ? '#fff' : '#000'
              }}>SIGN UP</button>
          </div>
          {
            bool ? <SignIn /> : <SignUp />
          }
        </div>
      }

    </div>
  );
}

export default App;
