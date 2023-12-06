import styles from "./app.module.css";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import { MainButton } from "./components/MainButton";
import { TextInput } from "./components/TextInput";
import { ListHeader } from "./components/list/ListHeader";
import { useState } from "react";

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.inputContainer}>
          <TextInput
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <MainButton onClick={handleAddTask}>
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
