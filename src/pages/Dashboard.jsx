import React, { useEffect, useState } from "react";

export default function Dashboard({ user, onLogout }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error("Erreur :", error));
  }, []);

  return (
    <div>
      <h1 className="text-blue-600 text-center">Dashboard</h1>
      <div className="text-center mb-4">
        <h3 className="text-left text-xl ml-8">Bienvenue, {user.name} !</h3>
      </div>
    </div>
  );
}
