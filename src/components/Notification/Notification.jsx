import css from './Notification.module.css';

const Notification = ({ text }) => {
  return <h2 className={css.notification}>{text}</h2>;
};

export default Notification;
