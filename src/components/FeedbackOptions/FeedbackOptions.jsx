import css from './FeedbackOptions.module.css';
import Button from 'components/Button/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.options}>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
