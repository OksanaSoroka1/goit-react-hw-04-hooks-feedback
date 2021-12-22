import PropTypes from 'prop-types';
import css from './feedback.module.css';

const FeadbackOptionsItem = ({ onLeaveFeedback, option }) => {
  return (
    <li className={css.item}>
      <button
        className={css.button}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    </li>
  );
};

FeadbackOptionsItem.propTypes = {
  onLeaveFeedback: PropTypes.func,
  option: PropTypes.string,
};
export { FeadbackOptionsItem };
