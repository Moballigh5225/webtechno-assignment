"use client";
import { MdCancel } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoginPage from "./LoginPage";
import axios from "axios";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const handleClick = () => {
    setShowModal(false);
    setLoginModal(false);
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    const url = "https://learnkoodsapi.onrender.com/user_api/";

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        username: username,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      });
      const res = await axios.post(url, body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const Login = () => {
    return <LoginPage handleClick={handleClick} />;
  };
  return (
    <>
      <header className="w-full z-10">
        <nav className="max-w-[1440px] mx-auto flex  items-center sm:px-16 px-6 py-4">
          <Link
            href="/"
            className="flex justify-center items-center font-bold mr-16 text-[#1967D2] text-3xl"
          >
            Learnkoods
          </Link>
          <ul className="flex space-x-6 mr-10 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Find Jobs</Link>
            </li>
            <li>
              <Link href="/">Employers</Link>
            </li>
            <li>
              <Link href="/">Candidates</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
          </ul>
          <ul className="flex space-x-4  ">
            <li className="text-[#1967d2] font-normal text-[15px]">
              <Link href="/">Upload your CV</Link>
            </li>
            <li className="text-[#1967d2] bg-[#e2eaf8] border-0 px-2 py-2 rounded-lg font-normal text-[15px] hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:ring focus:ring-violet-300 ">
              <button onClick={() => setLoginModal(true)}>Login</button>
            </li>
            <li className="text-[#1967d2] bg-[#e2eaf8] border-0 px-2 py-2 rounded-lg font-normal text-[15px] hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:ring focus:ring-violet-300 ">
              <button onClick={() => setShowModal(true)}>Register</button>
            </li>
            <li className="text-white bg-[#1967d2]  border-0 p-2 rounded-lg font-normal text-[15px] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
              <Link href="/">Job Post</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="">
        {showModal && (
          <>
            <div className="modal-wrapper"></div>
            <div className="modal-container">
              <div className="flex ">
                <div className="">
                  <form onSubmit={loginSubmit}>
                    <h1>Register User</h1>
                    <div>
                      <label htmlFor="">Username</label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="">First Name</label>
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="">Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password "
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit">Register</button>
                  </form>
                </div>
                <div className="">
                  <button className="model-btn" onClick={handleClick}>
                    <MdCancel />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="">{loginModal && <Login />}</div>
    </>
  );
};

export default Navbar;
