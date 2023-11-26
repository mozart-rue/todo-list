import styles from "./app.module.css";
import { Header } from "./components/Header";
import { TextInput } from "./components/TextInput";

function App() {
  return (
    <div className={styles.input}>
      <Header />
      <TextInput />
    </div>
  );
}

export default App;
