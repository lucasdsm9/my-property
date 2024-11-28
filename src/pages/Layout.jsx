import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

export default function Layout(){
    return (
    <>
    <div className="flex">
        <div>
            <nav className=" bg-gray-300 h-screen w-60 pt-10">
                <ul className="">
                    <li className="font-bold text-center">
                        EstateHub
                    </li>
                    <li>
                        <Link to="/dashboard"><FontAwesomeIcon icon={faGauge} /> Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/heritage"><FontAwesomeIcon icon={faBuilding}/> Your heritage</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            <Outlet />
        </div>
    </div>   
    </>
    )
}