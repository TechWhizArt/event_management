import React, { useState } from "react";
import "../styles/Login.css";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [remember, setRemember] = useState(false);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      alert("Login Successful");

      navigate("/");
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back 👋</h1>

        <p>Login to continue managing your events.</p>

        <form onSubmit={handleLogin}>
          {/* Email */}

          <div className="input-box">
            <Mail size={18} />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {errors.email && <p className="error">{errors.email}</p>}

          {/* Password */}

          <div className="input-box">
            <Lock size={18} />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.password && <p className="error">{errors.password}</p>}

          <div className="login-options">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember Me
            </label>

            <button
              type="button"
              className="link-btn"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </button>
          </div>

          <button className="login-btn" disabled={loading}>
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn">Continue with Google</button>

        <button className="github-btn">Continue with GitHub</button>

        <p className="signup-text">
          Don't have an account?
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
