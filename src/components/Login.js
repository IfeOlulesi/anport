import React from "react";

const Login = ({
  handleSubmitLogin,
  newId,
  handleIdChange,
  newPassword,
  handlePasswordChange,
}) => {
  return (
    <div className="login">
      <form onSubmit={handleSubmitLogin}>
        <div>
          <label>Id</label>
          <input value={newId} onChange={handleIdChange}></input>
        </div>
        <div>
          <label>Password</label>
          <input type='password' value={newPassword} onChange={handlePasswordChange}></input>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
