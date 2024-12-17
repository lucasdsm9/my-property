import React, { useEffect, useState } from "react";

export default function Posts({ user, onLogout }) {
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
      <h1 className="text-blue-600 text-center">Posts</h1>
      <div className="text-center mb-4">
        <p>Bienvenue, {user.name} !</p>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Déconnexion
        </button>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="p-2 mb-4 border-b border-gray-300">
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <p>Aucun post disponible</p>
        )}
      </div>
    </div>
  );
}
