import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
  });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast("Copy to clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
    const updatedPasswords = passwordArray.map((item) =>
      item.id === id
        ? {
            ...item,
            site: form.site,
            username: form.username,
            password: form.password,
          }
        : item
    );
    setPasswordArray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
    localStorage.setItem("passwords", JSON.stringify(passwordArray));
  };

  const showPassword = () => {
    passwordRef.current.type =
      passwordRef.current.type === "password" ? "text" : "password";
    if (ref.current.src === "/public/eye.png")
      ref.current.src = "/public/eye-off.png";
    else {
      ref.current.src = "/public/eye.png";
    }
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    const newPasswordArray = [...passwordArray, { ...form, id: uuidv4() }];
    setPasswordArray(newPasswordArray);
    localStorage.setItem("passwords", JSON.stringify(newPasswordArray));
    console.log(newPasswordArray);
  };

  const deletePassword = (id) => {
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
    localStorage.setItem(
      "passwords",
      JSON.stringify(passwordArray.filter((item) => item.id !== id))
    );
  };
  const editPassword = (id) => {
    setPasswordArray(
      passwordArray.map((item) =>
        item.id === id
          ? {
              ...item,
              site: form.site,
              username: form.username,
              password: form.password,
            }
          : item
      )
    );
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />

      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <div className=" mycontainer ">
        <h1 className="text-4xl font-bold  text-center">
          <span className="text-green-700"> &lt;</span>
          Pass <span className="text-green-700"> Saver</span>
          <span className="text-green-700"> /&gt;</span>
        </h1>
        <p className="text-green-700 text-lg text-center">
          Your own Password Manager
        </p>
        <div className="text-black flex flex-col p-4 gap-7 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website URL"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full justify-between gap-4">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="password"
                name="password"
                id=""
              />
              <span
                className="absolute right-[3px] text-black top-[3px] cursor-pointer "
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={26}
                  src="/public/eye.png"
                  alt=""
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2  border-green-900 border-2 bg-green-500 rounded-full px-4 py-2 w-fit text-black hover:bg-green-300"
          >
            <lord-icon
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
            ></lord-icon>
            Save Password
          </button>
        </div>
        <div className="password">
          <h2 className="font-bold text-xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center  py-2 flex items-center justify-center">
                      {" "}
                      <a href={item.site} target="_blank">
                        {item.site}
                      </a>
                      <div
                        className="lordiconcopy size-7 cursor-pointer"
                        onClick={() => {
                          copyText(item.site);
                        }}
                      >
                        <lord-icon
                          style={{
                            width: "25px",
                            height: "25px",
                            "padding-Top": "3px",
                            "padding-Left": "3px",
                          }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover"
                        ></lord-icon>
                      </div>
                    </td>
                    <td className="text-center  py-2  justify-center">
                      <div className="flex items-center justify-center">
                        <span>{item.username}</span>
                        <div
                          className="lordiconcopy size-7 cursor-pointer"
                          onClick={() => {
                            copyText(item.username);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "25px",
                              "padding-Top": "3px",
                              "padding-Left": "3px",
                            }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="text-center  py-2  items-center ">
                      <div className="flex items-center justify-center">
                        <span>{item.password}</span>
                        <div
                          className="lordiconcopy size-7 cursor-pointer"
                          onClick={() => {
                            copyText(item.password);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "25px",
                              "padding-Top": "3px",
                              "padding-Left": "3px",
                            }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="text-center  py-2  items-center ">
                      <div className="items-center justify-center">
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "25px",
                              "padding-Top": "3px",
                              "padding-Left": "3px",
                            }}
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                          ></lord-icon>
                        </span>
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "25px",
                              "padding-Top": "3px",
                              "padding-Left": "3px",
                            }}
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                          ></lord-icon>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
