
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../utils/auth";
import { loginApi, fetchUserDetails } from "../api/auth";

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    React.useEffect(() => {
        const token = sessionStorage.getItem("session_token");
        if (token) {
            navigate("/");
        }
    }, [navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await loginApi(username, password);
            if (!res.ok) {
                const errorData = await res.json();
                setError(errorData.message || "Invalid credentials");
                return;
            }
            const data = await res.json();
            if (data.access_token) {
                setToken(data.access_token);
                // Fetch user details and save user_role
                try {
                    const userRes = await fetchUserDetails(data.access_token);
                    if (userRes.ok) {
                        const userData = await userRes.json();
                        if (userData.role) {
                            sessionStorage.setItem("user_role", userData.role);
                        }
                    }
                } catch (e) {
                    // Optionally handle error
                }
                navigate("/");
            } else {
                setError(data.message || "Invalid credentials");
            }
        } catch (err) {
            setError("Network error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page-center">
            <form onSubmit={handleSubmit} className="login-form-modern">
                <h2 className="login-title">HireHub ATS Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoComplete="username"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit" disabled={loading} className="login-btn">
                    {loading ? "Logging in..." : "Login"}
                </button>
                {error && <p className="login-error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
