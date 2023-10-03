import { useSelector } from "react-redux"
import styles from "../styles/sales.module.css"

export default function Sales(){
    const sales = useSelector((state)=> state.sales)
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.head}>
                    <tr className={styles.row}>
                        <th>Store</th>
                        <th>Date</th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody className={styles.body}>
                    {sales.map((sale, index) => (
                        <tr key={index} className={styles.row}>
                            <td>{sale.store}</td>
                            <td>{sale.date}</td>
                            <td>{sale.product}</td>
                            <td>{sale.amount}</td>
                            <td>{sale.price}</td>
                            <td>{sale.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
} 