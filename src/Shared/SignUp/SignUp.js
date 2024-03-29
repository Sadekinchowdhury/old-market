import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
// import { toast } from 'react-hot-toast'
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import UseToken from "../../UseToken/UseToken";
import GoogleLogin from "../Google/GoogleLogin";

// import UseToken from '../../Ussetoken/UseToken';
import { motion } from "framer-motion";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signuperror, setsignUperror] = useState("");

  const { creatUsers, updatePro } = useContext(AuthContext);

  const [createmail, setCreatemail] = useState("");

  const [token] = UseToken(createmail);

  const navigate = useNavigate();

  const handlsignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    // creatt user
    creatUsers(email, password)
      .then((result) => {
        const user = result.user;
        toast(`Welcome ${name}`);
        const userinfo = {
          displayName: name,
        };

        // update user
        updatePro(userinfo).then(() => {});

        //  save user
        saveUser(email, name, role, user).catch((error) => console.log(error));
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setsignUperror(
            "Email is already in use. Please use a different email address."
          );
        } else if (error.code === "auth/weak-password") {
          setsignUperror("Please choose a stronger password.");
        } else if (error.code === "auth/invalid-email") {
          setsignUperror("Invalid email address. Please enter a valid email.");
        } else {
          setsignUperror(`Error creating user: ${error.message}`);
          console.log(error);
        }
      });

    //  saveUser

    const saveUser = (email, name, role) => {
      const user = { name, email, role };
      fetch("https://old-server.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          setCreatemail(email);
        });
    };
  };
  if (token) {
    navigate("/");
  }
  // get token

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px]  px-[20px] mx-auto lg:flex-row gap-20 justify-center py-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
        exit={{ opacity: 0, x: 50, transition: { duration: 2 } }}
        className="w-full lg:w-1/2 mx-auto"
      >
        <img
          className="w-full"
          src="https://img.freepik.com/premium-vector/customizable-flat-illustration-mobile-login_9206-2872.jpg?w=740"
          alt=""
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
        exit={{ opacity: 0, x: 50, transition: { duration: 2 } }}
        className="w-full lg:w-1/2 mx-auto px-4"
      >
        <div className="py-6">
          <h1 className="text-center text-[25px] font-semibold ">
            Lets Create Your Account
          </h1>
          <p className="text-[13px] font-bold text-center text-sky-600">
            Please enter your details
          </p>
        </div>
        <div className="w-full  lg:w-2/3 mx-auto">
          <form onSubmit={handlsignup}>
            <div className="form-control py-1 w-full ">
              <label className="label">Name </label>
              <Input
                type="text"
                name="name"
                {...register("name", {
                  required: "name is requerd",
                })}
                className=" w-full py-2"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="form-control py-1 w-full">
              <label className="label">Email </label>
              <Input
                type="text"
                {...register("email", {
                  required: "email is required",
                })}
                className=" w-full py-2"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>

            <div className="form-control pt-1 pb-4 w-full">
              <label className="label">Password </label>
              <Input
                type="text"
                {...register("password", {
                  required: "pass is required",
                  minLength: {
                    value: 6,
                    message: "password must be 6 carrecters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message: "password should be  an uppercase and nmbr",
                  },
                })}
                className="w-full py-2"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>

            <div className="form-control pt-2 pb-5 w-full ">
              <select
                {...register("role")}
                className="py-2 w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Account Type
                </option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-800 cursor-pointer  transition duration-300 hover:scale-105 hover:border-[2px] hover:border-blue-800 py-2 rounded-md text-white"
            >
              Sign Up
            </button>
          </form>

          <div className="py-4">
            {signuperror && <p className="text-red-600">{signuperror}</p>}
          </div>
          <div className="py-4 text-center">
            <p>
              Dont have an account?{" "}
              <Link
                className="text-green-600 text-[16px] font-bold cursor-pointer"
                to="/login"
              >
                {" "}
                Sign In
              </Link>{" "}
            </p>
            <div className="divider">OR</div>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
