import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.password) {
      return "Minden mezőt ki kell tölteni!";
    }

    if (formData.password !== formData.passwordRepeat) {
      return "A két jelszó nem egyezik!";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const errorMsg = validateForm();
    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Regisztráció sikertelen!");
      } else {
        setSuccess("Sikeres regisztráció!");
        setTimeout(() => navigate("/login"), 1200);
      }
    } catch (err) {
      setError("Szerverhiba történt!");
    }

    setLoading(false);
  };

  return (
    <div
      className="card p-4 mx-auto"
      style={{ maxWidth: "450px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
    >
      <div className="card-body">
        <h2 className="card-title text-center mb-4">
          Új fiók regisztrálása
        </h2>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Felhasználónév
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Pl: SimaUser99"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail cím</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="pelda@domain.hu"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Jelszó</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="passwordRepeat" className="form-label">
              Jelszó újra
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordRepeat"
              name="passwordRepeat"
              value={formData.passwordRepeat}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              {loading ? "Küldés..." : "Regisztráció"}
            </button>
          </div>
        </form>
      </div>

      <div className="card-footer text-center text-muted mt-3">
        Már van fiókod?
        <a href="/login" className="text-decoration-none"> Jelentkezz be!</a>
      </div>
    </div>
  );
}
