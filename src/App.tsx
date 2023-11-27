import styles from "./app.module.css";
import { Header } from "./components/Header";
import { MainButton } from "./components/MainButton";
import { TextInput } from "./components/TextInput";

function App() {
  return (
    <div className={styles.input}>
      <Header />
      <TextInput />
      <MainButton />
    </div>
  );
}

export default App;
