import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"; // Import specific methods from firebase/auth
import { BrowserRouter as Link } from 'react-router-dom';
import "../design/signin.css";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAYmpMYbOPrSv5pDuJLDPz8Xpk7IpHAI9o",
  authDomain: "ezessence-9847f.firebaseapp.com",
  projectId: "ezessence-9847f",
  storageBucket: "ezessence-9847f.appspot.com",
  messagingSenderId: "564663427495",
  appId: "1:564663427495:web:5114fdae40c23c5a4ed682",
  measurementId: "G-R4N9X1JXKW"
};
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUpWithEmailAndPassword = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        console.log("Signed up:", user);
        // Optionally, you can automatically sign in the user after sign up
        handleSignInWithEmailAndPassword();
      })
      .catch((error) => {
        // Handle errors
        setError(error.message);
        console.error("Sign up error:", error);
      });
  };

  const handleSignInWithEmailAndPassword = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log("Signed in:", user);
        <Link to="/shop"></Link>
      })
      .catch((error) => {
        // Handle errors
        setError(error.message);
        console.error("Sign in error:", error);
      });
  };

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Signed in with Google successfully
        const user = result.user;
        console.log("Signed in with Google:", user);
        <Link to="/shop"></Link>
      })
      .catch((error) => {
        // Handle errors
        setError(error.message);
        console.error("Google sign in error:", error);
      });
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div className="error">{error}</div>}
      <button onClick={handleSignInWithEmailAndPassword}>Sign in with Email/Password</button>
      <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
      <button onClick={handleSignUpWithEmailAndPassword}>Create Account</button>
    </div>
  );
}

export default Signin;
