import { useDispatch, useSelector } from "react-redux"
import styles from "../styles/navbar.module.css"
import { SignOutUser } from "../actions";
import { useNavigate } from "react-router-dom";

export default function NavBar(){
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const logged = useSelector((state)=>state.logged);
    const handleLogin = () => {
        dispatch(SignOutUser());
        Navigate("/login")
    }
    return(
        <nav className={styles.nav}>
            <img 
                src="/cloud-computing.png" 
                className={styles.icon}
                onClick={()=>Navigate("/home")}
            />
            <a 
                href=" "  
                className={styles.link}
                onClick={()=>handleLogin()}>
                    {logged ? "SignOut" : "LogIn"}
            </a>
        </nav>
    )
}