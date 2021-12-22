import PropTypes from 'prop-types';
import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <p className={css.text}>
          Good:<span className={css.span}> {good}</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Neutral:<span className={css.span}>{neutral}</span>{' '}
        </p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Bad:<span className={css.span}>{bad}</span>
        </p>{' '}
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Total:<span className={css.span}>{total}</span>
        </p>{' '}
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Positive feedback:
          <span className={css.span}> {positivePercentage}%</span>
        </p>{' '}
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export { Statistics };
