import { Checkbox, Input } from "antd";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import GoogleLogin from "../Google/GoogleLogin";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginerror, setLoginerror] = useState("");

  const { LogIn } = useContext(AuthContext);

  const location = useLocation();

  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // const [emailData, setEamilData] = useState('')
  // const handlChange = (event) => {
  //     event.preventDefault()
  //     const form = event.target;
  //     const email = form.email.value;
  //     setEamilData(email)
  // }
  // console.log(emailData)

  const handlogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    LogIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginerror(error.message);
      });
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="flex flex-col lg:flex-row max-w-[1200px]  px-[20px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
          exit={{ opacity: 0, x: 50, transition: { duration: 2 } }}
          className="w-full lg:w-1/2"
        >
          <div className="py-6">
            <h1 className="text-center text-[25px] font-semibold ">
              Welcome Back
            </h1>
            <p className="text-[13px] font-bold text-center text-sky-600">
              Please enter your details
            </p>
          </div>
          <div className="w-full lg:w-2/3 mx-auto">
            <form className="" onSubmit={handlogin}>
              <div className="form-control py-2 w-full">
                <label className="label  ">Email</label>
                <Input
                  type="text"
                  {...register("email", {})}
                  className="py-2"
                />

                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>

              <div className="form-control py-2 w-full ">
                <label className="label">Password</label>

                <Input
                  type="password"
                  {...register("password", {
                    minLength: { value: 6, message: "at least 6 carecter" },
                  })}
                  className="py-2"
                />

                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>

              <div className="flex items-center py-4 justify-between">
                <p>
                  {" "}
                  <Checkbox /> Remember For 30 days
                </p>
                <p>Forgot passowrd</p>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-800 cursor-pointer  transition duration-300 hover:scale-105 hover:border-[2px] hover:border-blue-800 py-2 rounded-md text-white"
              >
                Sign In
              </button>
            </form>
            <div>
              {loginerror && <p className="text-red-600">{loginerror}</p>}
            </div>

            <div className="py-4 text-center">
              <p>
                Dont have an account?{" "}
                <Link
                  className="text-green-600 text-[16px] font-bold cursor-pointer"
                  to="/signup"
                >
                  {" "}
                  Sign Up
                </Link>{" "}
              </p>
              <div className="divider">OR</div>
              <GoogleLogin></GoogleLogin>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
          exit={{ opacity: 0, x: 50, transition: { duration: 2 } }}
          className="w-full lg:w-1/2"
        >
          <img
            className="w-full"
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740&t=st=1690643188~exp=1690643788~hmac=bc61214700a55325dc9846d5dde69437965f77f95d75f2dd800112294cbfb74e"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
