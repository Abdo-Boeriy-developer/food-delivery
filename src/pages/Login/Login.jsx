import React, { useContext, useEffect, useState } from "react";
import "./Login.css";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { StoreContext } from "../../components/Context/ShopContext";
import { schema } from "../../lib/Schema";

// const schema = z
//   .object({
//     name: z.string().min(1, { message: "Name is required" }),
//     email: z.string().email({ message: "Invalid email address" }),
//     password: z
//       .string()
//       .min(6, { message: "Password must be at least 6 charaters" }),
//     confirm: z
//       .string()
//       .min(6, { message: "Password must be at least 6 charaters" }),
//   })
//   .refine((value) => value.password === value.confirm, {
//     message: "Password don match",
//     path: ["confirm"],
//   });

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 charaters " }),
  confirm: z
    .string()
    .min(6, { message: "Password must be at least 6 charaters" }),
});

const Login = () => {
  const { setIsLogin } = useContext(StoreContext);

  const [formLogin, setFormLogin] = useState("Sign Up");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formLogin === "Sign Up" ? schema : loginSchema),
  });

  const onSubmit = (event) => {
    localStorage.setItem("user", JSON.stringify(event));
    console.log(event);
  };

  // useEffect(() => {
  //   const savedUser = JSON.parse(localStorage.getItem("user"));
  //   console.log(savedUser);
  // }, []);
  useEffect(() => {
    reset();
  }, [formLogin]);

  return (
    <div className="login">
      <div className="div">
        <h2>{formLogin}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formLogin === "Sign Up" && (
            <>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter Your Name"
                className="name"
                style={{ borderColor: errors?.password?.message && "red" }}
              />
              {errors?.name?.message && (
                <p className="error">{errors?.name?.message}</p>
              )}
            </>
          )}
          <div className="inpusts">
            <input
              {...register("email")}
              type="email"
              placeholder="Enter Your Email"
              style={{ borderColor: errors?.password?.message && "red" }}
            />
            {errors?.email?.message && (
              <p className="errors">{errors?.email?.message} </p>
            )}

            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              style={{ borderColor: errors?.password?.message && "red" }}
            />
            {errors?.password?.message && (
              <p className="errors">{errors?.password?.message}</p>
            )}
            <input
              {...register("confirm")}
              type="password"
              placeholder="confirm Password"
              style={{ borderColor: errors?.password?.message && "red" }}
            />
            {errors?.confirm?.message && (
              <p className="errors">{errors?.confirm?.message}</p>
            )}
          </div>
          <div className="Login_sing">
            <p>Forgot your password ?</p>
            {formLogin === "Login" ? (
              <p onClick={() => setFormLogin("Sign Up")}>Create account</p>
            ) : (
              <p onClick={() => setFormLogin("Login")}>Login Here</p>
            )}
          </div>
          <button onClick={() => setIsLogin(true)}>
            {formLogin === "Sign Up" ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
