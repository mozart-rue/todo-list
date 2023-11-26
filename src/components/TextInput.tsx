import styles from "./TextInput.module.css";

export function TextInput() {
  return (
    <div className={styles.input}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
    </div>
  );
}
