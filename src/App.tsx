import styles from "./app.module.css";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import { MainButton } from "./components/MainButton";
import { TextInput } from "./components/TextInput";
import { ListHeader } from "./components/list/ListHeader";

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.inputContainer}>
          <TextInput />
          <MainButton>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </MainButton>
        </div>
        <div>
          <ListHeader tasksCounter={10} checkedTasksCounter={1} />
        </div>
      </section>
    </main>
  );
}

export default App;
