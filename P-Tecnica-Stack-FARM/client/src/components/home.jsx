import { useDispatch } from "react-redux"
import styles from "../styles/home.module.css"
import { ChangeType } from "../actions/index";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const handleUploadType = (type) => {
        dispatch(ChangeType(type));
        Navigate(`/upload/${type}`);
    }
    return (
        <div className={styles.home}>
            <h1>Extract information from...</h1>
            <ul className={styles.options}>
                <li className={styles.option} onClick={()=>handleUploadType("api")}>
                    <h1>API</h1>
                    <img src="/api-app.png" />
                </li>
                <li className={styles.option} onClick={()=>handleUploadType("db")}>
                    <h1>Mongo DB</h1>
                    <img src="/brand-mongodb.png" />
                </li>
                <li className={styles.option} onClick={()=>handleUploadType("csv")}>
                    <h1>CSV</h1>
                    <img src="/csv.png" />
                </li>
            </ul>
        </div>

    )
}