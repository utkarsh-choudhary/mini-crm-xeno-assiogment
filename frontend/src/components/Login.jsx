import React, { useState, useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthContext";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // Use named import

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!credentials.email || !credentials.password) {
      alert("Enter all the required fields");
      return;
    }

    loginUser(credentials, navigate);
  };

  const handleGoogleSuccess = (response) => {
    const userObject = jwtDecode(response.credential);
    console.log(userObject);

    const googleUser = {
      email: userObject.email,
      password: "undefined"  // Placeholder as no password is needed for Google Login
    };

    loginUser(googleUser, navigate);
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='87' height='50.232' patternTransform='scale(1) rotate(40)'><rect x='0' y='0' width='100%' height='100%' fill='%23ffffffff'/><path d='M0 54.424l14.5-8.373c4.813 2.767 9.705 5.573 14.5 8.37l14.5-8.373V29.303M0 4.193v16.744l-14.5 8.373L0 37.68l14.5-8.374V12.562l29-16.746m43.5 58.6l-14.5-8.37v-33.49c-4.795-2.797-9.687-5.603-14.5-8.37m43.5 25.111L87 37.67c-4.795-2.797-24.187-13.973-29-16.74l-14.5 8.373-14.5-8.37v-33.489m72.5 8.365L87 4.183l-14.5-8.37M87 4.183v16.745L58 37.673v16.744m0-66.976V4.185L43.5 12.56c-4.795-2.797-24.187-13.973-29-16.74L0 4.192l-14.5-8.37m29 33.484c4.813 2.767 9.705 5.573 14.5 8.37V54.42' stroke-linejoin='round' stroke-linecap='round' stroke-width='0.5' stroke='%230822b6ff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-106,-47.464)' fill='url(%23a)'/></svg>")`
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg">
        <div className="flex flex-col items-center mb-6">
          <div>
            <img src="../xeno.png" alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Welcome</h2>
          <p className="text-gray-500 text-center text-sm sm:text-base">
            Sign in to access your account.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <p className="text-gray-500 text-sm">
            Don't have an account?{" "}
            <RouterLink to="/register" className="text-blue-600 hover:underline">
              Sign up
            </RouterLink>
          </p>
        </div>

        <div className="mt-4 flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => { alert('Login Failed'); }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
