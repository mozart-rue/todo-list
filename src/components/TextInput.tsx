import styles from "./TextInput.module.css";

export function TextInput({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  );
}
