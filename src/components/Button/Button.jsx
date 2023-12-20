import css from './Button.module.css';

const Button = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick} className={css.button}>
      {children}
    </button>
  );
};

export default Button;
