import React from 'react';
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'

const SignUp = () => {
  return (
    <div >
      <button className="w-full mb-4 text-purple-700 border border-purple-700 py-2 rounded-lg flex items-center justify-center">
        <img src={google} alt="Google" className="h-5 w-5 mr-2" />
        Continue with Google
      </button>
      <button className="w-full mb-4 text-purple-700 border border-purple-700 py-2 rounded-lg flex items-center justify-center">
        <img src={facebook} alt="Facebook" className="h-5 w-5 mr-2" />
        Continue with Facebook
      </button>
      <div className="text-center text-gray-600 my-4">Or connect with</div>
      <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-700" />
      <input type="password" placeholder="Password" className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-700" />
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center text-gray-600">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <a href="#" className="text-purple-700">Forgot password?</a>
      </div>
      <button className="w-full py-2 rounded-lg border-black text-black border">Continue</button>
    </div>
  );
};

export default SignUp;
