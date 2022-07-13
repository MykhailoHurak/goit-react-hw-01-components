import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return(
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {
                    stats.map(element =>
                        <li className={css.item} key={element.id}>
                            <span className={css.label}>{element.label}</span>
                            <span className={css.percentage}>{element.percentage}%</span>
                        </li>
                    )
                }
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,

    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }))
};