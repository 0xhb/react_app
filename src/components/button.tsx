import { ReactNode } from "react";
import styles from "./button.module.css";

interface Props {
  children: ReactNode;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={styles["btn-red"]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
