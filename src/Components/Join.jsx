import React from 'react';
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'

const Join = () => {
  return (
    <div>
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
      
      <p className="text-md mb-4 text-gray-600">By continuing, you agree to our <span className="text-black">Terms of Service</span> and <span className="text-black">Privacy Policy</span></p>
      <button className="w-full bg-purple-700 text-white py-2 rounded-lg">Agree and Continue</button>
    </div>
  );
};

export default Join;