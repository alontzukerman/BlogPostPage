import React, { lazy, Suspense } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Navbar from './Navbar';
const Post = lazy(() => import('./Post'));


function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <ErrorBoundary>
          <Post />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default App;
