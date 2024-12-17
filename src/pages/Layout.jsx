import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faStar, faPerson } from "@fortawesome/free-solid-svg-icons";

export default function Layout({ onLogout, isLoggedIn }) {
  return (
    <>
      <div>
        <div>
          <nav className="bg-gray-300 w-100 p-5">
            <ul className="flex items-center">
              <li className="font-bold">ReactFlix</li>
              <div className="flex ml-auto text-right space-x-4">
                <li>
                  <Link to="/dashboard">
                    <FontAwesomeIcon icon={faGauge} /> Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/heritage">
                    <FontAwesomeIcon icon={faStar} /> Favoris
                  </Link>
                </li>
                {!isLoggedIn ? (
                  <li>
                    <Link to="/login">
                      <FontAwesomeIcon icon={faPerson} /> Login
                    </Link>
                  </li>
                ) : (
                  <li>
                    <button
                      onClick={onLogout}
                      className="bg-red-500 text-white px-1 rounded"
                    >
                      Déconnexion
                    </button>
                  </li>
                )}
              </div>
            </ul>
          </nav>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
