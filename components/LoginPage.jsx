import { MdCancel } from "react-icons/md";
const LoginPage = ({ handleClick }) => {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <div className="flex ">
          <div className="">
            <form action="">
              <h1>Register User</h1>
              <div>
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  name="username"
                  id=""
                  placeholder="Enter Username"
                />
              </div>
              <div>
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id=""
                  placeholder="Enter Username"
                />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id=""
                  placeholder="Enter Username"
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="Enter Password"
                />
              </div>
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
  );
};

export default LoginPage;
