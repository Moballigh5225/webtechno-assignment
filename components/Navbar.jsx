"use client";
import { MdCancel } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [loginUsername, setLoginUsername] = useState();
  const [loginPass, setLoginPass] = useState();
  const [users, setUsers] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleClick = () => {
    setShowModal(false);
    setLoginModal(false);
  };

  const LoginSubmit = async (e) => {
    e.preventDefault();
    const url = "https://learnkoods-task.onrender.com/login_api/";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      url,
      {
        username: loginUsername,
        password: loginPass,
      },
      config
    );

    setUsers(response.data.data.username);
    const data = await response.data.data;
    const accessToken = data.access;
    const refreshToken = data.refresh;
    console.log(accessToken, refreshToken, "tokens");
    console.log(data, "login response ");
    // Here you can save the tokens in localStorage or session storage
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
    localStorage.setItem("refreshToken", JSON.stringify(accessToken));
    setIsAuthenticated(true);
    setLoginModal(false);
  };

  const RegisterSubmit = async (e) => {
    e.preventDefault();
    const url = "https://learnkoodsapi.onrender.com/user_api/";
    try {
      const body = JSON.stringify({
        username: username,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      });
      const res = await axios.post(url, body);
      console.log(res, "register");
    } catch (err) {
      console.error(err.response.data);
    }
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
          <ul className="flex space-x-6  ">
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
          <ul className="flex space-x-4 justify-center items-center ml-5   ">
            <li className="text-[#1967d2] font-normal text-[15px]">
              <Link href="/">Upload your CV</Link>
            </li>
            {isAuthenticated ? (
              <p className="user-username">{users}</p>
            ) : (
              <li className="text-[#1967d2] bg-[#e2eaf8] border-0 px-2 py-2 rounded-lg font-normal text-[15px] hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:ring focus:ring-violet-300 ">
                <button onClick={() => setLoginModal(true)}>Login</button>
              </li>
            )}
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
                  <form onSubmit={RegisterSubmit}>
                    <h1 className="font-bold mb-8">Register User</h1>
                    <div>
                      <label className="font-semibold mr-5">Username</label>
                      <input
                        className="border p-2 rounded-lg mb-4"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="font-semibold mr-4">First Name</label>
                      <input
                        className="border p-2 rounded-lg mb-4"
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="font-semibold mr-4">Last Name</label>
                      <input
                        className="border p-2 rounded-lg mb-4"
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="font-semibold mr-14">Email</label>
                      <input
                        className="border p-2 rounded-lg mb-4"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="font-semibold mr-5">Password</label>
                      <input
                        className="border p-2 rounded-lg mb-6"
                        type="password"
                        name="password"
                        id="password "
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-center border p-2 bg-sky-500 rounded-lg text-white ">
                      <button type="submit">Register</button>
                    </div>
                  </form>
                </div>
                <div className=" ">
                  <button className="model-btn" onClick={handleClick}>
                    <MdCancel />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="">
        {loginModal && (
          <>
            <div className="modal-wrapper"></div>
            <div className="modal-container">
              <div className="flex ">
                <div className="">
                  <form className="" onSubmit={LoginSubmit}>
                    <h1 className="font-bold mb-8">Login User</h1>
                    <div>
                      <label className="font-semibold mr-5">Username</label>
                      <input
                        className="border p-2 rounded-lg mb-4"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter Username"
                        value={loginUsername}
                        onChange={(e) => setLoginUsername(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="font-semibold mr-5">Password</label>
                      <input
                        className="border p-2 rounded-lg mb-6"
                        type="password"
                        name="password"
                        id="password "
                        placeholder="Enter Password"
                        value={loginPass}
                        onChange={(e) => setLoginPass(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-center border  bg-sky-500 rounded-lg text-white ">
                      <button type="submit">Login</button>
                    </div>
                  </form>
                </div>
                <div className=" ">
                  <button className="model-btn" onClick={handleClick}>
                    <MdCancel />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
