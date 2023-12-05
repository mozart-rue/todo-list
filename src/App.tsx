import styles from "./app.module.css";
import { Header } from "./components/Header";
import { MainButton } from "./components/MainButton";
import { TextInput } from "./components/TextInput";

function App() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.inputContainer}>
          <TextInput />
          <MainButton />
        </div>
      </section>
    </main>
  );
}

export default App;
