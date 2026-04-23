import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logo } from '../assets';

const LoginPage = () => {
    const [tab, setTab] = useState('login');
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const { login, register, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/home');
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (tab === 'register') {
            if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
                setError('All fields are required');
                return;
            }
            const result = register(form.name.trim(), form.email.trim(), form.password);
            if (!result.success) { setError(result.error); return; }
        } else {
            if (!form.email.trim() || !form.password.trim()) {
                setError('Email and password are required');
                return;
            }
            const result = login(form.email.trim(), form.password);
            if (!result.success) { setError(result.error); return; }
        }

        navigate('/home');
    };

    const switchTab = (t) => {
        setTab(t);
        setError('');
        setForm({ name: '', email: '', password: '' });
    };

    return (
        <div className="min-h-screen bg-[#13131a] flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    <img src={logo} alt="logo" className="h-8" />
                    <span className="text-white text-xl font-bold font-epilogue">CrowdFund</span>
                </div>

                <div className="bg-[#1c1c24] rounded-2xl p-8 shadow-2xl">
                    <h2 className="text-white text-2xl font-bold text-center mb-1">
                        {tab === 'login' ? 'Welcome back' : 'Create account'}
                    </h2>
                    <p className="text-gray-500 text-sm text-center mb-6">
                        {tab === 'login' ? 'Sign in to manage your campaigns' : 'Join the crowdfunding community'}
                    </p>

                    {/* Tab Switch */}
                    <div className="flex bg-[#13131a] rounded-xl p-1 mb-6">
                        <button
                            type="button"
                            onClick={() => switchTab('login')}
                            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${tab === 'login' ? 'bg-[#8c6dfd] text-white shadow' : 'text-gray-400 hover:text-white'}`}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={() => switchTab('register')}
                            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${tab === 'register' ? 'bg-[#8c6dfd] text-white shadow' : 'text-gray-400 hover:text-white'}`}
                        >
                            Register
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        {tab === 'register' && (
                            <div>
                                <label className="text-gray-400 text-sm mb-1.5 block">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    className="w-full bg-[#13131a] text-white border border-[#3a3a43] rounded-xl px-4 py-3 outline-none focus:border-[#8c6dfd] transition placeholder-gray-600"
                                />
                            </div>
                        )}

                        <div>
                            <label className="text-gray-400 text-sm mb-1.5 block">Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                className="w-full bg-[#13131a] text-white border border-[#3a3a43] rounded-xl px-4 py-3 outline-none focus:border-[#8c6dfd] transition placeholder-gray-600"
                            />
                        </div>

                        <div>
                            <label className="text-gray-400 text-sm mb-1.5 block">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={form.password}
                                onChange={e => setForm({ ...form, password: e.target.value })}
                                className="w-full bg-[#13131a] text-white border border-[#3a3a43] rounded-xl px-4 py-3 outline-none focus:border-[#8c6dfd] transition placeholder-gray-600"
                            />
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2.5">
                                <p className="text-red-400 text-sm text-center">{error}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="bg-[#8c6dfd] hover:bg-[#7b5de0] text-white font-semibold rounded-xl py-3 mt-1 transition-all duration-200 active:scale-95"
                        >
                            {tab === 'login' ? 'Sign In' : 'Create Account'}
                        </button>
                    </form>

                    <p className="text-gray-500 text-xs text-center mt-6">
                        {tab === 'login' ? "Don't have an account? " : 'Already have an account? '}
                        <button
                            type="button"
                            onClick={() => switchTab(tab === 'login' ? 'register' : 'login')}
                            className="text-[#8c6dfd] hover:underline"
                        >
                            {tab === 'login' ? 'Register' : 'Login'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
