import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Veuillez remplir le formulaire de connexion");
      return;
    }

    const user = users.find(
      (u) =>
        u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
        u.password === password
    );

    if (user) {
      onLogin(user);
      navigate("/dashboard");
    } else {
      alert("Mail ou mdp incorect");
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/auth")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API :", data);
        setUsers(data);
      })
      .catch((error) => {
        console.error("Erreur :", error);

        const mockAuthData = [
          { email: "desaintem.lucas@gmail.com", password: "Lucas1234", name: "Lucas" },
          { email: "jean@gmail.com", password: "azerty1234", name: "Jean" },
        ];
        console.log("Données :", mockAuthData);
        setUsers(mockAuthData);
      });
  }, []);

  return (
    <div>
      <h1 className="text-blue-600 text-center">Login</h1>
      <form
        onSubmit={submit}
        className="bg-slate-300 rounded-lg max-w-[600px] mx-auto p-4"
      >
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 w-full p-2 mb-4"
            placeholder="Email"
          />
        </div>

        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 w-full p-2 mb-4"
            placeholder="Mot de passe"
          />
        </div>

        <div className="flex flex-col items-center">
          <input
            type="submit"
            value="Envoyer"
            className="bg-slate-500 rounded-md text-white px-4 py-2 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}
