import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <div>
            <table className={css.transactionHistory}>
                <thead>
                    <tr>
                        <th className={css.cellTitle}>Type</th>
                        <th className={css.cellTitle}>Amount</th>
                        <th className={css.cellTitle}>Currency</th>
                    </tr>
                </thead>
                
                <tbody>
                    {items.map(element =>
                        <tr key={element.id}>
                            <td className={css.cell}>{element.type}</td>
                            <td className={css.cell}>{element.amount}</td>
                            <td className={css.cell}>{element.currency}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}