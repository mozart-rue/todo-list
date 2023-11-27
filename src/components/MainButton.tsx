import styles from "./MainButton.module.css";
import { PlusCircle } from "phosphor-react";

export function MainButton() {
  return (
    <button className={styles.button}>
      Criar
      <PlusCircle />
    </button>
  );
}
