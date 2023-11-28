import styles from "./TextInput.module.css";

export function TextInput() {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Adicione uma nova tarefa"
    />
  );
}
