import { useDispatch, useSelector } from "react-redux"
import styles from "../styles/upload.module.css";
import { useForm } from "react-hook-form";
import { UpdateCSV, UpdateAPI, UpdateDB, GetSales } from "../actions";
import { useNavigate } from "react-router-dom";

export default function Upload() {
    const Navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const type = useSelector((state) => state.upType);

    const handleAPISubmit = (data) => {
        dispatch(UpdateAPI(data))
        dispatch(GetSales())
        Navigate("/sales")
    }
    const handleDBSubmit = (data) => {
        dispatch(UpdateDB(data))
        dispatch(GetSales())
        Navigate("/sales")
    }
    const handleCSVSubmit = (data) => {
        dispatch(UpdateCSV(data))
        dispatch(GetSales())
        Navigate("/sales")
    }
    return (
        <div className={styles.container}>
            {type == "api" && <div className={styles.type}>
                <section className={styles.icon}>
                    <h1>API</h1>
                    <img src="/api-app.png" />
                </section>
                <section className={styles.form}>
                    <h1>API Info</h1>
                    <form className={styles.formInfo} onSubmit={handleSubmit(handleAPISubmit)}>
                        <label>API Url</label>
                        <input type="text" {...register("apiUrl", { required: true })}/>
                        <input type="submit"/>
                    </form>
                </section>
                </div>}
            {type == "db" && <div className={styles.type}>
                <section className={styles.icon}>
                    <h1>Mongo DB</h1>
                    <img src="/brand-mongodb.png" />
                </section>
                <section className={styles.form}>
                    <h1>DataBase Info</h1>
                    <form className={styles.formDBInfo} onSubmit={handleSubmit(handleDBSubmit)}>
                        <label>Dirección IP</label>
                        <input type="text" {...register("ip", { required: true })}/>
                        <label>Puerto</label>
                        <input type="number" {...register("port", { required: true })}/>
                        <label>Usuario</label>
                        <input type="text" {...register("username", { required: true })}/>
                        <label>Contraseña</label>
                        <input type="password" {...register("password", { required: true })}/>
                        <label>Nombre DB</label>
                        <input type="text" {...register("dbName", { required: true })}/>
                        <label>Colección</label>
                        <input type="text" {...register("collection", { required: true })}/>
                        <input type="submit"/>
                    </form>
                </section>
                </div>}
            {type == "csv" && <div className={styles.type}>
                <section className={styles.icon}>
                    <h1>CSV</h1>
                    <img src="/csv.png" />
                </section>
                <section className={styles.form}>
                    <h1>Upload Files</h1>
                    <form className={styles.formInfo} onSubmit={handleSubmit(handleCSVSubmit)}>
                        <input type="file" name="csv" accept=".csv" {...register("csv", { required: true })}/>
                        <input type="submit" value="Enviar"/>
                    </form>
                </section>
                </div>}
        </div>
    )
}