import { Link, useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";
import { signOut, getAuth } from "firebase/auth";

const NavBar = () => {
    const {user} = useUser();
    const navigate = useNavigate();
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/about" >About</Link>
                </li>
                <li>
                    <Link to="/articles" >Articles</Link>
                </li>
                <div className="nav-right">
                    {user
                        ? <button onClick={() => {
                            signOut(getAuth());
                        }}>Log out</button> 
                        : <button onClick={()=>{
                            navigate('/login');
                        }}>Log in</button>}
                </div>
            </ul>
        </nav>
    )
}

export default NavBar;