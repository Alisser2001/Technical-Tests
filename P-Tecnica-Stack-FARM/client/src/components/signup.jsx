import styles from "../styles/signup.module.css";
import { useForm } from "react-hook-form";
import { passwordValidator, emailValidator, nameValidator } from "../validators/validator";
import { SignUpUser } from "../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const { register, handleSubmit } = useForm();
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmitUser = (data) => {
        dispatch(SignUpUser(data));
        Navigate("/login");
    }

    return (
        <div className={styles.container}>
            <div className={styles.signup}>
                <h1 className={styles.title}>SignUp</h1>
                <form onSubmit={handleSubmit(handleSubmitUser)} className={styles.form}>
                    <label>Email:</label>
                    <input type="text" {...register("email", { required: true, validate: emailValidator })} />
                    <label>Username:</label>
                    <input type="text" {...register("username", { required: true, validate: nameValidator })} />
                    <label>Password:</label>
                    <input type="password" {...register("password", { required: true, validate: passwordValidator })} />
                    <input type="submit" />
                </form>
                <a href="/login" className={styles.login}>LogIn</a>
            </div>
        </div>
    )
}
