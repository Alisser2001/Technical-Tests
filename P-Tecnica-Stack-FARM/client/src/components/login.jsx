import styles from "../styles/login.module.css";
import { useForm } from "react-hook-form";
import { passwordValidator, emailValidator } from "../validators/validator";
import { LogInUser } from "../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
    const { register, handleSubmit } = useForm();
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmitUser = (data) => {
        dispatch(LogInUser(data));
        Navigate("/home");
    }

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h1 className={styles.title}>Login</h1>
                <form onSubmit={handleSubmit(handleSubmitUser)} className={styles.form}>
                    <label>Email:</label>
                    <input type="text" {...register("email", { required: true, validate: emailValidator })} />
                    <label>Password:</label>
                    <input type="password" {...register("password", { required: true, validate: passwordValidator })} />
                    <input type="submit" />
                </form>
                <a href="/signup" className={styles.signup}>SignUp</a>
            </div>
        </div>
    )
}