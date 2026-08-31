import React, { useState } from "react";

const Form = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`UserName:${username}\nPassword:${password}`);
        setUserName('');
        setPassword('')
        alert('Form Submit')
    }
    
    const handleUserName = (e) => {
        e.preventDefault();
        setUserName(e.target.value)
    }
    const handlePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    
  return (
    <>
      <div className="bg-cyan-950 min-h-screen p-3 uppercase font-sans">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold text-3xl text-cyan-300">
            Form in React
          </h2>
          <div className="bg-cyan-900 border border-cyan-300 rounded p-3 m-3 shadow-2xl">
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
              <div className="flex flex-col cursor-pointer m-1.5">
                <label
                  htmlFor="username"
                  className="text-white font-semibold mb-0"
                >
                  UserName:
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  required
                  onChange={handleUserName}
                  placeholder="Enter Your username"
                  className=" w-2xs border-b-2 placeholder:font-semibold text-white outline-0 border-b-cyan-300"
                />
              </div>
              <div className="flex flex-col cursor-pointer m-1.5">
                <label
                  htmlFor="password"
                  className="text-white font-semibold mb-0"
                >
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePassword}
                  required
                  placeholder="Enter Your username"
                  className=" w-2xs border-b-2 placeholder:font-semibold text-white outline-0 border-b-cyan-300"
                />
              </div>
              <button className="border-none bg-cyan-500 p-1.5 m-1 rounded-2xl text-white font-semibold cursor-pointer" type="submit">
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
