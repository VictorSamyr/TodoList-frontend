import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import { useState } from "react";
import { auth } from "./src/firebase/config";
import { onAuthStateChanged } from 'firebase/auth';


export default function App() {

  const [user, setUser] = useState(auth.currentUser);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User logged in...");
      setUser(user);
    } else {
      console.log("User not logged in...");
      setUser(null);
    }
  });

  if (user) {
    return (
      //<AppNavigation></AppNavigation>
      <Login></Login>
    );
  } else {
    return (
      <Register></Register>
    );
  }
}

