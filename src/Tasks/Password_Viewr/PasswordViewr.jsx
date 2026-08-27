import React, { useState } from "react";

const PasswordViewr = () => {
    const [password, setPassword] = useState('');
    const [viewPassword, setViewPassword] = useState(false);
    
  const togglePassword = (e) => {
      e.preventDefault();
      setViewPassword(!viewPassword);

  };
  const hadlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
      <>
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col p-4 m-4 border rounded w-2xl justify-center items-center">
        <h3 className="mb-1 font-semibold text-2xl">Password Viewer</h3>
        <input
          type={viewPassword ? 'text' : 'password'}
          value={password}
          onChange={hadlePassword}
          placeholder="Enter Password"
          className="border w-xl rounded m-1 p-1 outline-0"
        />
        <button
          className="border-none bg-slate-800 mt-2 rounded p-2 text-white"
          onClick={togglePassword}
        >
          {viewPassword ? "Hide Password" : "Show Password"}
        </button>
         </div>
       </div>
    </>
  );
};

export default PasswordViewr;
