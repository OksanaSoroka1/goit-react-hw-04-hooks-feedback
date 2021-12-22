import PropTypes from 'prop-types';
import { FeadbackOptionsItem } from './feadbackOptionsItem';
import css from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <FeadbackOptionsItem
          key={option}
          option={option}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
export { FeedbackOptions };
