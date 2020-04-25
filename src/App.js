import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer"

const App = () => {
  const [newId, setnewId] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    //check if valid in the database
    setnewId("")
    setNewPassword("")
  };
  const handleIdChange = (event) => {
    setnewId(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value)
  }
  return (
    <div>
      <Navbar />
      <Login
        handleSubmitLogin={handleSubmitLogin}
        newId={newId}
        handleIdChange={handleIdChange}
        newPassword={newPassword}
        handlePasswordChange={handlePasswordChange}
      />
      <Footer />
    </div>
  );
};

export default App;
