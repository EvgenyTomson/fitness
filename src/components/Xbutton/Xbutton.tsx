import styles from './Xbutton.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Xbutton = (props: Props) => {
  const { onClick, ...otherProps } = props;
  return <button type="button" className={styles.xbutton} onClick={onClick} {...otherProps} />;
};

export default Xbutton;
