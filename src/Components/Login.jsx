import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [signin, setsignin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const switchsign = () => {
    setsignin((prev) => !prev);
    setFormData({ username: "", email: "", password: "" });
  };

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://bookcircleapi.onrender.com/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Signup successful 🎉");
        switchsign(); // go back to SignIn form
      } else {
        toast.error("Signup failed ❌");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  // Signin
  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://bookcircleapi.onrender.com/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();

      if (res.ok && data.token) {
        toast.success("Welcome back! 🎉");

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify({ email: formData.email }));

        navigate("/");
      } else {
        toast.error("Invalid credentials ❌");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-screen gap-9 z-[1000] sm:flex-row py-20">
      <div className="bg-gray-300 h-96 w-80 rounded-xl flex flex-col items-center justify-center">
        <h1 className="text-3xl font-Playfair pb-2">BookCircle</h1>
        <h2 className="w-44 text-center text-sm pb-7">
          Books Within Reach:
          Buy, Read, Sell, Repeat!
        </h2>
        <img src="/images/bookcircle.png" alt="" className="w-3/6 pb-6" />
        <div className="text-sm">
          {signin ? "Dont have an account? " : "Already have an account? "}
          <span
            onClick={switchsign}
            className="text-blue-500 underline cursor-pointer"
          >
            {signin ? "Signup" : "Signin"}
          </span>
        </div>
      </div>

      {/* Signin Form */}
      <div className="h-96 w-72 rounded-xl ">
        <form
          onSubmit={handleSignin}
          className={` flex-col items-start justify-around h-full px-3 ${
            signin ? "flex" : "hidden"
          } `}
        >
          <h1 className="text-2xl">SignIn</h1>
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-black rounded-md h-8 outline-none px-1"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-black rounded-md h-8 outline-none px-1"
              required
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="mx-auto border-black px-3 py-1 rounded-md border hover:bg-black hover:text-white"
            >
              Submit
            </button>
          </div>
          <div className="flex justify-between w-full text-sm">
            <div>
              Remember me:{" "}
              <input type="checkbox" className="cursor-pointer" />
            </div>
            <div className="text-blue-600 underline cursor-pointer">
              Forgot Password
            </div>
          </div>
        </form>

        {/* Signup Form */}
        <form
          onSubmit={handleSignup}
          className={` flex-col items-start justify-around h-full px-3 ${
            signin ? "hidden" : "flex"
          } `}
        >
          <h1 className="text-2xl">SignUp</h1>
          <div className="flex flex-col w-full">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border border-black rounded-md h-8 outline-none px-1"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-black rounded-md h-8 outline-none px-1"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-black rounded-md h-8 outline-none px-1"
              required
            />
          </div>
          <div className="w-full flex justify-between">
            <button
              type="button"
              onClick={switchsign}
              className="mx-auto border-black px-3 py-1 rounded-md border hover:bg-black hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="mx-auto border-black px-3 py-1 rounded-md border hover:bg-black hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
