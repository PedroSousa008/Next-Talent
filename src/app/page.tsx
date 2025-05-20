import React, { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* Logo Section */}
      <div className="flex flex-col items-center mt-8">
        <img
          src="/logo.png"
          alt="Next Talent Logo"
          className="w-64 h-64 rounded-3xl object-contain mb-8"
        />
      </div>

      {/* Login Form */}
      <div className="flex flex-col items-center w-full px-4">
        <div className="w-full max-w-xl">
          <label className="block text-gray-500 mb-1" htmlFor="email">Email/Phone Number</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full mb-4 px-2 py-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          />
          <label className="block text-gray-500 mb-1" htmlFor="password">Password</label>
          <div className="relative mb-4">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-2 py-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded pr-20"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 font-medium"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button className="w-full py-2 bg-gray-200 text-2xl text-gray-800 font-medium rounded mb-2 hover:bg-gray-300 transition">Log In</button>
        </div>
        <a href="#" className="text-blue-700 mt-2 mb-8 text-center">Forgot Password?</a>
      </div>

      {/* Create Account Section */}
      <div className="w-full flex flex-col items-center mb-8">
        <h2 className="text-xl text-blue-700 font-normal mb-4">Create a new account</h2>
        <div className="flex flex-row justify-center w-full max-w-xl gap-4 mb-8">
          <a href="#" className="flex-1 text-center font-bold text-lg">As a Coach</a>
          <a href="#" className="flex-1 text-center font-bold text-lg">As a Player</a>
          <a href="#" className="flex-1 text-center font-bold text-lg">As an Agent</a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-4 flex flex-row justify-center gap-6 text-blue-700 text-sm">
        <a href="#">Support</a>
        <a href="#">Terms</a>
        <a href="#">About Us</a>
        <a href="#">Privacy</a>
        <a href="#">Language</a>
      </footer>
    </div>
  );
} 